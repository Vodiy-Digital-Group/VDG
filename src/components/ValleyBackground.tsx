import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Group } from "three";
import { gsap, useGSAP } from "@/animations/gsap";
import { useIsMobile } from "@/hooks/use-mobile";
import { VALLEY_TERRAIN, createValleyGeometry } from "@/lib/terrain";
import { usePrefersReducedMotion } from "@/animations/usePrefersReducedMotion";

type TerrainProps = { mobile: boolean; reducedMotion: boolean };

const Terrain = ({ mobile, reducedMotion }: TerrainProps) => {
  const group = useRef<Group>(null);
  const motion = useRef({ orbit: 0, pointerX: 0, pointerY: 0 });
  const geometry = useMemo(() => createValleyGeometry(mobile ? VALLEY_TERRAIN.mobileSegments : VALLEY_TERRAIN.desktopSegments), [mobile]);

  useGSAP(() => {
    if (reducedMotion) return;
    const orbit = gsap.to(motion.current, {
      orbit: Math.PI * 2,
      duration: VALLEY_TERRAIN.orbitDuration,
      ease: "none",
      repeat: -1,
    });
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
      orbit.kill();
      window.removeEventListener("pointermove", onMove);
    };
  }, { dependencies: [reducedMotion] });

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(motion.current.orbit) * 0.075 + motion.current.pointerX;
    group.current.rotation.x = -0.42 + motion.current.pointerY * 0.42;
    group.current.position.y = Math.cos(motion.current.orbit) * 0.12 - 1.25;
  });

  return (
    <group ref={group} position={[0, -1.25, -2]}>
      <mesh>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[geometry.positions, 3]} />
          <bufferAttribute attach="index" args={[geometry.indices, 1]} />
        </bufferGeometry>
        <meshBasicMaterial color="#4361FF" transparent opacity={VALLEY_TERRAIN.opacity} wireframe depthWrite={false} />
      </mesh>
      <mesh scale={[1.005, 1.005, 1.005]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[geometry.positions, 3]} />
          <bufferAttribute attach="index" args={[geometry.indices, 1]} />
        </bufferGeometry>
        <meshBasicMaterial color="#4361FF" transparent opacity={VALLEY_TERRAIN.glowOpacity} wireframe depthWrite={false} />
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
      {mobile ? (
        <div className="valley-fallback" />
      ) : (
        <Canvas dpr={[1, 1.5]} frameloop={visible ? "always" : "never"} camera={{ position: [0, 3.8, 11], fov: 48 }} gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}>
          <Terrain mobile={mobile} reducedMotion={reducedMotion} />
        </Canvas>
      )}
      <div className="valley-scrim" />
    </div>
  );
};

export default ValleyBackground;
