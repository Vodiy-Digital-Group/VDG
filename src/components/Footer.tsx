import { useRef } from "react";
import { useScrollReveal } from "@/animations/useScrollReveal";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  useScrollReveal(footerRef, { y: 14 });

  return (
  <footer ref={footerRef} data-ambient="indigo" className="site-footer border-t section-rule py-8">
    <div data-reveal className="page-canvas flex flex-col gap-4 text-sm text-[#71717a] sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 VDG. All rights reserved.</p>
      <nav className="flex gap-2" aria-label="Footer navigation"><a className="focus-electric inline-flex h-11 items-center rounded-sm px-2 hover:text-[#f5f5f3]" href="#capabilities">Capabilities</a><a className="focus-electric inline-flex h-11 items-center rounded-sm px-2 hover:text-[#f5f5f3]" href="#studio">Studio</a><a className="focus-electric inline-flex h-11 items-center rounded-sm px-2 hover:text-[#f5f5f3]" href="#contact">Contact</a></nav>
    </div>
  </footer>
  );
};

export default Footer;
