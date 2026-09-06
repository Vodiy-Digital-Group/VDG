import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/animations/gsap";
import { usePrefersReducedMotion } from "@/animations/usePrefersReducedMotion";

const Index = () => {
  const shellRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const shell = shellRef.current;
      if (!shell) return;
      const colors: Record<string, string> = {
        indigo: "rgba(67, 97, 255, 0.12)",
        cyan: "rgba(39, 202, 255, 0.1)",
        violet: "rgba(132, 87, 255, 0.11)",
        blue: "rgba(67, 97, 255, 0.14)",
      };

      if (!reducedMotion) {
        gsap.utils.toArray<HTMLElement>("[data-ambient]").forEach((section) => {
          const color = colors[section.dataset.ambient ?? "indigo"];
          ScrollTrigger.create({
            trigger: section,
            start: "top 55%",
            end: "bottom 45%",
            onEnter: () => gsap.to(shell, { "--ambient-color": color, duration: 0.9, ease: "power2.out" }),
            onEnterBack: () => gsap.to(shell, { "--ambient-color": color, duration: 0.9, ease: "power2.out" }),
          });
        });
      }

      const refresh = gsap.delayedCall(0.2, () => ScrollTrigger.refresh()).pause();
      const requestRefresh = () => refresh.restart(true);
      window.addEventListener("resize", requestRefresh, { passive: true });
      window.addEventListener("load", requestRefresh, { once: true });
      requestRefresh();
      return () => {
        refresh.kill();
        window.removeEventListener("resize", requestRefresh);
        window.removeEventListener("load", requestRefresh);
      };
    },
    { scope: shellRef, dependencies: [reducedMotion] },
  );

  return (
    <div ref={shellRef} className="site-shell min-h-screen bg-[#0b0b0d]">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
