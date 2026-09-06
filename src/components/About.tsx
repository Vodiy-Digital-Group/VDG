import { useRef } from "react";
import { gsap, useGSAP } from "@/animations/gsap";
import { usePrefersReducedMotion } from "@/animations/usePrefersReducedMotion";
import { useScrollReveal } from "@/animations/useScrollReveal";

const principles = [
  { name: "Direct access", description: "The people making the work stay close to the people making the decisions." },
  { name: "Durable systems", description: "We favour foundations that can be understood, maintained, and extended over time." },
  { name: "Clear ownership", description: "Responsibilities and next steps are made explicit so the work can move forward with confidence." },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  useScrollReveal(sectionRef);

  useGSAP(
    () => {
      if (reducedMotion) return;
      gsap.fromTo(
        ".studio-anchor",
        { clipPath: "inset(12% 5% 12% 5% round 18px)", scale: 0.96 },
        {
          clipPath: "inset(0% 0% 0% 0% round 10px)",
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: ".studio-layout", start: "top 85%", end: "top 34%", scrub: true },
        },
      );
      gsap.to(".studio-anchor-copy", {
        yPercent: -7,
        ease: "none",
        scrollTrigger: { trigger: ".studio-layout", start: "top bottom", end: "bottom top", scrub: true },
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion] },
  );

  return (
  <section ref={sectionRef} id="studio" data-ambient="violet" className="site-section border-b section-rule py-20 md:py-32">
    <div className="page-canvas">
      <div data-reveal className="section-heading grid gap-6 border-b section-rule pb-7 md:grid-cols-2 md:items-end"><div data-reveal-item><p className="section-label text-[#71717a]">03 / Studio</p><h2 className="font-display mt-3 text-3xl font-medium tracking-[-0.02em] md:text-[46px]">Small by design.</h2></div><p data-reveal-item className="max-w-lg text-[#a1a1aa]">VDG is an independent product and engineering studio based in Andijan, Uzbekistan. We collaborate directly with the people responsible for the work.</p></div>

      <div className="studio-layout">
        <div className="studio-anchor registration-mark" role="img" aria-label="Typographic composition representing VDG's operating principles: direct access, durable systems, and clear ownership."><div className="studio-anchor-copy"><span className="section-label studio-anchor-index">VDG / OPERATING PRINCIPLES</span><p>Direct</p><p>Durable</p><p>Clear</p><span className="studio-anchor-rule" /><span className="studio-anchor-note">Designed for the work ahead.</span></div></div>
        <div data-reveal className="studio-content"><p data-reveal-item className="font-display text-2xl leading-tight tracking-[-0.02em] text-[#f5f5f3] md:text-[30px]">A closer working relationship leaves less room for ambiguity.</p><ul data-reveal-item className="studio-principles">{principles.map((principle, index) => <li key={principle.name} className="studio-principle glass-row"><span className="section-label text-[#71717a]">0{index + 1}</span><div><h3 className="font-display text-xl font-medium">{principle.name}</h3><p>{principle.description}</p></div></li>)}</ul><div data-reveal-item className="studio-context"><span className="section-label text-[#71717a]">Collaboration</span><p>Based in Andijan, Uzbekistan. Working together in the way the project needs: in person, remotely, or across both.</p></div></div>
      </div>
    </div>
  </section>
  );
};

export default About;
