import { useRef } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { gsap, SplitText, useGSAP } from "@/animations/gsap";
import { motion } from "@/animations/motion";
import { usePrefersReducedMotion } from "@/animations/usePrefersReducedMotion";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const primaryCtaRef = useRef<HTMLAnchorElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const headline = headlineRef.current;
      const button = primaryCtaRef.current;
      if (!headline) return;

      let split: SplitText | undefined;
      if (!reducedMotion) {
        split = SplitText.create(headline, {
          type: "words,chars",
          wordsClass: "hero-word",
          charsClass: "hero-char",
          mask: "words",
          aria: "auto",
        });

        gsap.timeline({ defaults: { ease: motion.ease } })
          .from(".hero-eyebrow", { autoAlpha: 0, y: 14, duration: 0.5 })
          .from(split.chars, {
            autoAlpha: 0,
            yPercent: 115,
            rotationX: -55,
            transformOrigin: "50% 100%",
            stagger: 0.018,
            duration: 0.78,
          }, "-=0.2")
          .from(".hero-support", { autoAlpha: 0, y: 20, duration: 0.62 }, "-=0.32")
          .from(".hero-actions > *", { autoAlpha: 0, y: 16, duration: 0.5, stagger: 0.09 }, "-=0.34")
          .from(".hero-meta > *", { autoAlpha: 0, y: 10, duration: 0.45, stagger: 0.08 }, "-=0.24");
      } else {
        gsap.set([".hero-eyebrow", headline, ".hero-support", ".hero-actions > *", ".hero-meta > *"], {
          autoAlpha: 1,
          clearProps: "transform",
        });
      }

      if (!button || reducedMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        return () => split?.revert();
      }

      const moveX = gsap.quickTo(button, "x", { duration: 0.38, ease: "power3.out" });
      const moveY = gsap.quickTo(button, "y", { duration: 0.38, ease: "power3.out" });
      const move = (event: PointerEvent) => {
        const rect = button.getBoundingClientRect();
        moveX((event.clientX - rect.left - rect.width / 2) * 0.18);
        moveY((event.clientY - rect.top - rect.height / 2) * 0.22);
      };
      const enter = () => gsap.to(button, { scale: 1.035, boxShadow: "0 0 34px rgba(67, 97, 255, 0.42)", duration: 0.24 });
      const leave = () => gsap.to(button, { x: 0, y: 0, scale: 1, boxShadow: "0 0 22px rgba(67, 97, 255, 0.24)", duration: 0.46, ease: motion.ease });

      button.addEventListener("pointermove", move, { passive: true });
      button.addEventListener("pointerenter", enter);
      button.addEventListener("pointerleave", leave);
      return () => {
        split?.revert();
        button.removeEventListener("pointermove", move);
        button.removeEventListener("pointerenter", enter);
        button.removeEventListener("pointerleave", leave);
      };
    },
    { scope: heroRef, dependencies: [reducedMotion] },
  );

  return (
    <section ref={heroRef} id="top" className="hero-section">
      <div className="hero-vignette" aria-hidden="true" />
      <div className="page-canvas hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow section-label"><span />VDG / Independent product and engineering studio</p>
          <h1 ref={headlineRef} className="hero-title font-display">Make the complex feel considered.</h1>
          <p className="hero-support">VDG partners with teams to shape useful digital products, systems, and the decisions that connect them.</p>
          <div className="hero-actions">
            <a ref={primaryCtaRef} href="#contact" className="focus-electric hero-button hero-button--primary">Discuss a project <ArrowRight size={17} /></a>
            <a href="#capabilities" className="focus-electric hero-button hero-button--secondary">Explore capabilities <ArrowDownRight size={17} /></a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
