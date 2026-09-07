import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import ValleyBackground from "@/components/ValleyBackground";
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
    <div ref={shellRef} className="site-shell min-h-screen bg-[var(--void)]">
      <ValleyBackground />
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
