import { useRef, type CSSProperties } from "react";
import { gsap, useGSAP } from "@/animations/gsap";
import { usePrefersReducedMotion } from "@/animations/usePrefersReducedMotion";

const stars = Array.from({ length: 34 }, (_, index) => ({
  left: (index * 37 + 11) % 100,
  top: (index * 53 + 7) % 100,
  size: index % 7 === 0 ? 3 : index % 3 === 0 ? 2 : 1,
  delay: (index % 9) * 0.14,
}));

const HeroField = () => {
  const fieldRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion) {
        gsap.set("[data-star]", { opacity: 0.45 });
        return;
      }

      gsap.from(".hero-orbital", { autoAlpha: 0, scale: 0.84, duration: 1.2, ease: "power2.out" });
      const timeline = gsap.timeline({ repeat: -1 });
      timeline
        .to(".hero-orbit--outer", { rotation: 360, duration: 42, ease: "none" }, 0)
        .to(".hero-orbit--middle", { rotation: -360, duration: 31, ease: "none" }, 0)
        .to(".hero-orbit--inner", { rotation: 360, duration: 24, ease: "none" }, 0)
        .to(".hero-core-glow", { scale: 1.12, opacity: 0.72, duration: 4.8, ease: "sine.inOut", yoyo: true, repeat: -1 }, 0)
        .to(".hero-nebula--one", { x: 28, y: -18, duration: 11, ease: "sine.inOut", yoyo: true, repeat: -1 }, 0)
        .to(".hero-nebula--two", { x: -22, y: 24, duration: 14, ease: "sine.inOut", yoyo: true, repeat: -1 }, 0)
        .to(".hero-scan-ring", { rotation: 360, duration: 18, ease: "none" }, 0)
        .to(".hero-telemetry-bars i", { scaleX: 0.42, duration: 1.2, stagger: 0.12, ease: "sine.inOut", yoyo: true, repeat: -1 }, 0);

      gsap.to("[data-star]", {
        opacity: 0.16,
        duration: 1.8,
        stagger: { each: 0.09, from: "random" },
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: fieldRef, dependencies: [reducedMotion] },
  );

  return (
    <div ref={fieldRef} className="hero-field" aria-hidden="true">
      <div className="hero-pointer-glow" data-cursor-glow />
      <div className="hero-grid" data-parallax-depth="0.35" />
      <div className="hero-nebula hero-nebula--one" data-parallax-depth="0.75" />
      <div className="hero-nebula hero-nebula--two" data-parallax-depth="1.1" />
      <div className="hero-stars" data-parallax-depth="0.55">
        {stars.map((star, index) => (
          <span
            key={index}
            data-star
            className="hero-star"
            style={{
              "--star-left": `${star.left}%`,
              "--star-top": `${star.top}%`,
              "--star-size": `${star.size}px`,
              "--star-delay": `${star.delay}s`,
            } as CSSProperties}
          />
        ))}
      </div>
      <div className="hero-orbital" data-parallax-depth="1.4" data-parallax-tilt>
        <div className="hero-core-glow" />
        <div className="hero-scan-ring" />
        <div className="hero-core"><span>VDG</span><i /></div>
        <div className="hero-orbit hero-orbit--outer"><i /></div>
        <div className="hero-orbit hero-orbit--middle"><i /></div>
        <div className="hero-orbit hero-orbit--inner"><i /></div>
      </div>
      <div className="hero-telemetry-wrap hero-telemetry--left" data-parallax-depth="2.2">
        <div className="hero-telemetry" data-repel>
          <span className="hero-telemetry-dot" />
          <div><b>Signal / 01</b><small>Product systems</small></div>
        </div>
      </div>
      <div className="hero-telemetry-wrap hero-telemetry--right" data-parallax-depth="-1.8">
        <div className="hero-telemetry" data-repel>
          <div><b>Field / live</b><small>Decision network</small></div>
          <span className="hero-telemetry-bars"><i /><i /><i /><i /></span>
        </div>
      </div>
      <span className="hero-reactive-node hero-reactive-node--one" data-repel />
      <span className="hero-reactive-node hero-reactive-node--two" data-repel />
      <span className="hero-reactive-node hero-reactive-node--three" data-repel />
    </div>
  );
};

export default HeroField;
