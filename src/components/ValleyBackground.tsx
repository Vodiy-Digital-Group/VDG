import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import type { BufferAttribute, Group } from "three";
import { gsap, useGSAP } from "@/animations/gsap";
import { useIsMobile } from "@/hooks/use-mobile";
import { VALLEY_TERRAIN, createValleyGeometry, updateValleyGeometryHeights } from "@/lib/terrain";
import { usePrefersReducedMotion } from "@/animations/usePrefersReducedMotion";

type TerrainProps = { mobile: boolean; reducedMotion: boolean };

const Terrain = ({ mobile, reducedMotion }: TerrainProps) => {
  const group = useRef<Group>(null);
  const positionAttribute = useRef<BufferAttribute>(null);
  const motion = useRef({ pointerX: 0, pointerY: 0, travel: 0 });
  const segments = mobile ? VALLEY_TERRAIN.mobileSegments : VALLEY_TERRAIN.desktopSegments;
  const geometry = useMemo(() => createValleyGeometry(segments), [segments]);

  useGSAP(() => {
    if (reducedMotion) return;
    const pointerX = gsap.quickTo(motion.current, "pointerX", { duration: 1.25, ease: "power3.out" });
    const pointerY = gsap.quickTo(motion.current, "pointerY", { duration: 1.25, ease: "power3.out" });
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onMove = (event: PointerEvent) => {
      if (!finePointer.matches) return;
      pointerX((event.clientX / window.innerWidth - 0.5) * VALLEY_TERRAIN.parallaxRange);
      pointerY((event.clientY / window.innerHeight - 0.5) * VALLEY_TERRAIN.parallaxRange);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
    };
  }, { dependencies: [reducedMotion] });

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y = motion.current.pointerX;
    group.current.rotation.x = -0.42 + motion.current.pointerY * 0.42;
    group.current.position.y = -1.25;

    const attribute = positionAttribute.current;
    if (reducedMotion || !attribute) return;
    motion.current.travel += delta * VALLEY_TERRAIN.forwardSpeed;
    updateValleyGeometryHeights(attribute.array as Float32Array, motion.current.travel);
    attribute.needsUpdate = true;
  });

  return (
    <group ref={group} position={[0, -1.25, -2]} scale={mobile ? [0.55, 0.9, 1] : [1, 1, 1]}>
      <mesh>
        <bufferGeometry>
          <bufferAttribute
            ref={positionAttribute}
            attach="attributes-position"
            args={[geometry.positions, 3]}
          />
          <bufferAttribute attach="index" args={[geometry.indices, 1]} />
        </bufferGeometry>
        <meshBasicMaterial color="#4361FF" transparent opacity={mobile ? 0.44 : VALLEY_TERRAIN.opacity + VALLEY_TERRAIN.glowOpacity} wireframe depthWrite={false} />
      </mesh>
    </group>
  );
};

const ValleyBackground = () => {
  const [visible, setVisible] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const mobile = useIsMobile();

  useEffect(() => {
    const hero = document.querySelector("#top");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "20% 0px" });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const hero = document.querySelector("#top");
    if (!wrapper || !hero || reducedMotion) return;
    gsap.fromTo(wrapper, { autoAlpha: 1 }, {
      autoAlpha: 0,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "45% top", end: "bottom top", scrub: true },
    });
  }, { scope: wrapperRef, dependencies: [reducedMotion] });

  return (
    <div ref={wrapperRef} className="valley-background" aria-hidden="true">
      <Canvas
        dpr={mobile ? [1, 1] : [1, 1.5]}
        frameloop={visible ? "always" : "never"}
        camera={mobile ? { position: [0, 4.8, 15.5], fov: 70 } : { position: [0, 3.8, 11], fov: 48 }}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
      >
        <Terrain mobile={mobile} reducedMotion={reducedMotion} />
      </Canvas>
      <div className="valley-scrim" />
    </div>
  );
};

export default ValleyBackground;
