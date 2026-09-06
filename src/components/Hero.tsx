import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowRight } from "lucide-react";

const Hero = () => {
  const artifactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const artifact = artifactRef.current;
    const canUseParallax = window.matchMedia("(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!artifact || !canUseParallax.matches) return;

    let frameId: number | null = null;
    let pointerX = 0;
    let pointerY = 0;

    const updateParallax = () => {
      frameId = null;
      artifact.style.setProperty("--artifact-x", `${pointerX * 12}px`);
      artifact.style.setProperty("--artifact-y", `${pointerY * 12}px`);
      artifact.style.setProperty("--artifact-rx", `${pointerY * -3}deg`);
      artifact.style.setProperty("--artifact-ry", `${pointerX * 3}deg`);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = artifact.getBoundingClientRect();
      pointerX = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
      pointerY = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
      if (frameId === null) frameId = window.requestAnimationFrame(updateParallax);
    };
    const resetParallax = () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      frameId = null;
      pointerX = 0;
      pointerY = 0;
      artifact.style.setProperty("--artifact-x", "0px");
      artifact.style.setProperty("--artifact-y", "0px");
      artifact.style.setProperty("--artifact-rx", "0deg");
      artifact.style.setProperty("--artifact-ry", "0deg");
    };
    artifact.addEventListener("pointermove", onPointerMove);
    artifact.addEventListener("pointerleave", resetParallax);
    return () => {
      artifact.removeEventListener("pointermove", onPointerMove);
      artifact.removeEventListener("pointerleave", resetParallax);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section id="top" className="border-b section-rule">
      <div className="page-canvas page-grid min-h-[calc(100svh-64px)] content-center gap-y-12 py-16 md:min-h-[calc(100svh-72px)] md:py-24">
        <div className="hero-enter hero-enter--one col-span-full lg:col-span-6 lg:col-start-1">
          <p className="section-label mb-6 flex items-center gap-3 text-[#a1a1aa]"><span className="h-px w-6 bg-[#4361ff]" />VDG / Independent product and engineering studio</p>
          <h1 className="font-display max-w-[720px] text-[44px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#f5f5f3] sm:text-[56px] lg:text-[76px] lg:leading-[1.04] lg:tracking-[-0.04em]">Make the complex feel considered.</h1>
          <p className="mt-7 max-w-xl text-lg leading-7 text-[#a1a1aa]">VDG partners with teams to shape useful digital products, systems, and the decisions that connect them.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="focus-electric inline-flex h-12 items-center gap-2 bg-[#4361ff] px-5 font-display text-sm font-medium text-[#f5f5f3] transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-[#5a75ff]">Discuss a project <ArrowRight size={17} /></a>
            <a href="#capabilities" className="focus-electric inline-flex h-12 items-center gap-2 border border-[#23232a] px-5 font-display text-sm font-medium text-[#f5f5f3] transition-colors hover:border-[#71717a] hover:bg-[#121216]">Explore capabilities <ArrowDownRight size={17} /></a>
          </div>
          <p className="hero-enter hero-enter--two section-label mt-16 text-[#71717a]">Based in Andijan, working where the work needs to happen.</p>
        </div>

        <div className="hero-enter hero-enter--three col-span-full lg:col-span-4 lg:col-start-9">
          <div ref={artifactRef} className="spatial-artifact registration-mark" role="img" aria-label="Abstract layered construction sheet representing VDG's approach to product and engineering work.">
            <div className="artifact-plate artifact-plate--back" />
            <div className="artifact-plate artifact-plate--middle">
              <span className="artifact-label artifact-label--top">CONSTRUCTION / 03</span>
              <span className="artifact-label artifact-label--side">SYSTEM STUDY</span>
              <svg viewBox="0 0 360 300" aria-hidden="true" className="artifact-diagram">
                <path d="M44 74H226L304 150L226 226H44L118 150Z" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M118 150H304M226 74V226M44 74L304 226M44 226L304 74" fill="none" stroke="currentColor" strokeDasharray="4 6" strokeWidth="1" />
                <rect x="137" y="104" width="87" height="92" fill="#1a1a1e" stroke="currentColor" strokeWidth="1" />
                <path d="M152 180L181 121L211 180Z" fill="none" stroke="#4361ff" strokeWidth="2" />
                <circle cx="181" cy="150" r="6" fill="#4361ff" />
              </svg>
              <span className="artifact-marker artifact-marker--one" />
              <span className="artifact-marker artifact-marker--two" />
            </div>
            <div className="artifact-plate artifact-plate--front">
              <span className="section-label text-[#a1a1aa]">VDG / spatial study</span>
              <span className="h-2 w-2 bg-[#4361ff]" />
              <span className="section-label text-[#71717a]">Static composition</span>
            </div>
          </div>
          <p className="section-label mt-5 flex justify-between text-[#71717a]"><span>01 — FIELD ASSEMBLY</span><span>NOT TO SCALE</span></p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
