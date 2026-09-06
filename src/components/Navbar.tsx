import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import vdgLogo from "@/assets/VDG-transparent-logo.png";

const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#approach", label: "Approach" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const returnFocusTarget = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    const firstMenuLink = menuRef.current?.querySelector<HTMLAnchorElement>("a");
    firstMenuLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !menuRef.current) return;
      const focusable = [...menuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      returnFocusTarget?.focus();
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  const headerSurface = scrolled || open ? "border-b section-rule bg-[#0b0b0d]/95 backdrop-blur-sm" : "border-b border-transparent bg-transparent";

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-200 ${headerSurface}`}>
      <div className="page-canvas flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <a href="#top" className="focus-electric flex h-11 items-center gap-3 rounded-sm" aria-label="VDG home" onClick={closeMenu}>
          <img src={vdgLogo} alt="VDG" width={1254} height={1254} className="h-8 w-8 object-contain" />
          <span className="font-display text-lg font-medium tracking-tight">VDG</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map((link) => {
            const active = activeHref === link.href;
            return <a key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`focus-electric relative inline-flex h-11 items-center rounded-sm px-1 text-sm transition-colors after:absolute after:bottom-1 after:left-1 after:h-px after:w-[calc(100%-0.5rem)] after:bg-[#4361ff] after:transition-transform ${active ? "text-[#f5f5f3] after:scale-x-100" : "text-[#a1a1aa] after:scale-x-0 hover:text-[#f5f5f3] hover:after:scale-x-100"}`}>{link.label}</a>;
          })}
        </nav>

        <a href="#contact" className="focus-electric hidden h-11 items-center border border-[#23232a] px-4 font-display text-sm font-medium text-[#f5f5f3] transition-colors hover:border-[#71717a] hover:bg-[#121216] sm:inline-flex">Discuss a project</a>
        <button ref={menuButtonRef} type="button" className="focus-electric inline-flex h-11 w-11 items-center justify-center rounded-sm text-foreground md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav ref={menuRef} id="mobile-navigation" className="fixed inset-x-0 bottom-0 top-16 flex border-t section-rule bg-[#0b0b0d] md:hidden" aria-label="Mobile navigation" aria-modal="true" role="dialog">
          <div className="page-canvas flex w-full flex-col py-6">
            <p className="section-label text-[#71717a]">Index / VDG</p>
            <div className="mt-7 border-t section-rule">
              {links.map((link, index) => <a key={link.href} href={link.href} onClick={closeMenu} className="focus-electric flex min-h-16 items-center justify-between border-b section-rule py-3 font-display text-2xl text-[#f5f5f3]"><span>{link.label}</span><span className="section-label text-[#71717a]">0{index + 1}</span></a>)}
            </div>
            <div className="mt-auto border-t section-rule pt-6"><p className="max-w-xs text-sm leading-6 text-[#a1a1aa]">Independent digital product and engineering studio.</p><a href="#contact" onClick={closeMenu} className="focus-electric mt-6 inline-flex h-12 items-center bg-[#4361ff] px-5 font-display text-sm font-medium text-[#f5f5f3] hover:bg-[#5a75ff]">Discuss a project</a></div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
