const Footer = () => {
  return (
  <footer className="site-footer border-t section-rule py-8">
    <div className="page-canvas flex flex-col gap-4 text-sm text-[#71717a] sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 VDG. All rights reserved.</p>
      <nav className="flex flex-wrap gap-2" aria-label="Footer navigation"><a className="focus-electric inline-flex h-11 items-center rounded-sm px-2 hover:text-[#f5f5f3]" href="#capabilities">Capabilities</a><a className="focus-electric inline-flex h-11 items-center rounded-sm px-2 hover:text-[#f5f5f3]" href="#studio">Studio</a><a className="focus-electric inline-flex h-11 items-center rounded-sm px-2 hover:text-[#f5f5f3]" href="#contact">Contact</a><a className="focus-electric inline-flex h-11 items-center rounded-sm px-2 hover:text-[#f5f5f3]" href="https://www.instagram.com/vodiydigital" target="_blank" rel="noreferrer">Instagram</a><a className="focus-electric inline-flex h-11 items-center rounded-sm px-2 hover:text-[#f5f5f3]" href="https://www.linkedin.com/company/vodiydigitalgroup/" target="_blank" rel="noreferrer">LinkedIn</a></nav>
    </div>
  </footer>
  );
};

export default Footer;
