const Footer = () => (
  <footer className="border-t section-rule py-8">
    <div className="page-canvas flex flex-col gap-4 text-sm text-[#71717a] sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 VDG. Barcha huquqlar himoyalangan.</p>
      <nav className="flex gap-2" aria-label="Footer navigation"><a className="focus-electric inline-flex h-11 items-center rounded-sm px-2 hover:text-[#f5f5f3]" href="#capabilities">Capabilities</a><a className="focus-electric inline-flex h-11 items-center rounded-sm px-2 hover:text-[#f5f5f3]" href="#studio">Studio</a><a className="focus-electric inline-flex h-11 items-center rounded-sm px-2 hover:text-[#f5f5f3]" href="#contact">Contact</a></nav>
    </div>
  </footer>
);

export default Footer;
