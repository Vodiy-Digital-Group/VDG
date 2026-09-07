import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import vdgLogo from "@/assets/VDG-transparent-logo.png";
import { gsap, ScrollTrigger, useGSAP } from "@/animations/gsap";
import { usePrefersReducedMotion } from "@/animations/usePrefersReducedMotion";

const links = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#approach", label: "Approach" },
  { href: "#studio", label: "Studio" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const [solid, setSolid] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    const header = headerRef.current;
    const hero = document.querySelector("#top");
    if (!header || !hero) return;
    if (reducedMotion) gsap.set(header, { autoAlpha: 1 });
    else gsap.from(header, {
      autoAlpha: 0,
      y: -12,
      duration: 0.55,
      delay: 0.68,
      ease: "power3.out",
      onComplete: () => gsap.set(header, { clearProps: "transform" }),
    });

    const trigger = ScrollTrigger.create({
      trigger: hero,
      start: "bottom top+=72",
      onEnter: () => setSolid(true),
      onLeaveBack: () => setSolid(false),
    });
    setSolid(trigger.progress > 0);
    return () => trigger.kill();
  }, { scope: headerRef, dependencies: [reducedMotion] });

  useGSAP(() => {
    if (reducedMotion) return;
    const navLinks = gsap.utils.toArray<HTMLAnchorElement>(".nav-link", headerRef.current);
    const cleanups = navLinks.map((link) => {
      const underline = link.querySelector<HTMLElement>(".nav-link__underline");
      const color = gsap.quickTo(link, "color", { duration: 0.2, ease: "power3.out" });
      const scale = underline ? gsap.quickTo(underline, "scaleX", { duration: 0.22, ease: "power3.out" }) : null;
      const enter = () => { color("#4361FF"); scale?.(1); };
      const leave = () => {
        color(link.getAttribute("aria-current") === "page" ? "#F5F5F3" : "#A1A1AA");
        if (link.getAttribute("aria-current") !== "page") scale?.(0);
      };
      link.addEventListener("pointerenter", enter);
      link.addEventListener("pointerleave", leave);
      link.addEventListener("focus", enter);
      link.addEventListener("blur", leave);
      return () => {
        link.removeEventListener("pointerenter", enter);
        link.removeEventListener("pointerleave", leave);
        link.removeEventListener("focus", enter);
        link.removeEventListener("blur", leave);
      };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, { scope: headerRef, dependencies: [reducedMotion, activeHref] });

  useEffect(() => {
    const sections = links.map(({ href }) => document.querySelector<HTMLElement>(href)).filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActiveHref(`#${current.target.id}`);
    }, { rootMargin: "-24% 0px -62% 0px", threshold: [0.1, 0.35, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const returnFocusTarget = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      returnFocusTarget?.focus();
    };
  }, [open]);

  useGSAP(() => {
    const menu = menuRef.current;
    if (!open || !menu || reducedMotion) return;
    const lines = gsap.utils.toArray<HTMLElement>(".mobile-nav-line", menu);
    gsap.set(menu, { clipPath: "inset(0 0 0 0)" });
    gsap.fromTo(lines, { yPercent: 115 }, { yPercent: 0, duration: 0.5, stagger: 0.065, ease: "power4.out", delay: 0.05 });
  }, { scope: menuRef, dependencies: [open, reducedMotion] });

  const openMenu = () => {
    setMenuMounted(true);
    setOpen(true);
  };
  const closeMenu = () => {
    const menu = menuRef.current;
    if (!open || !menu || reducedMotion) {
      setOpen(false);
      setMenuMounted(false);
      return;
    }
    const lines = gsap.utils.toArray<HTMLElement>(".mobile-nav-line", menu);
    gsap.killTweensOf([menu, ...lines]);
    gsap.timeline({
      onComplete: () => {
        setOpen(false);
        setMenuMounted(false);
      },
    })
      .to(lines, { yPercent: -115, duration: 0.32, stagger: { each: 0.04, from: "end" }, ease: "power3.in" })
      .to(menu, { clipPath: "inset(0 0 100% 0)", duration: 0.36, ease: "power4.inOut" }, 0);
  };
  const surface = open ? "nav-menu-open" : solid ? "nav-scrolled" : "";
  const mobileMenu = menuMounted && typeof document !== "undefined"
    ? createPortal(
      <nav ref={menuRef} id="mobile-navigation" className="mobile-nav-panel" style={{ backgroundColor: "#0B0B0D" }} aria-label="Mobile navigation">
        <div className="page-canvas mobile-nav-panel__inner">
          <p className="section-label text-[var(--text-muted)]">Index / VDG</p>
          <div className="mobile-nav-panel__list">
            {links.map((link, index) => <div className="mobile-nav-line" key={link.href}><a href={link.href} onClick={closeMenu} className="focus-electric"><span>{link.label}</span><i>0{index + 1}</i></a></div>)}
          </div>
          <a href="#contact" onClick={closeMenu} className="focus-electric primary-action mobile-nav-panel__cta">Discuss a project</a>
        </div>
      </nav>,
      document.body,
    )
    : null;

  return (
    <>
      <header ref={headerRef} className={`site-nav ${surface}`}>
        <div className="page-canvas site-nav__inner">
          <a href="#top" className="focus-electric wordmark" aria-label="VDG home" onClick={closeMenu}>
            <img src={vdgLogo} alt="VDG" width={1254} height={1254} className="h-10 w-10 object-contain" />
          </a>
          <nav className="site-nav__links" aria-label="Primary navigation">
            {links.map((link) => {
              const active = activeHref === link.href;
              return <a key={link.href} href={link.href} aria-current={active ? "page" : undefined} className={`focus-electric nav-link ${active ? "is-active" : ""}`}><span>{link.label}</span><i className="nav-link__underline" aria-hidden="true" /></a>;
            })}
          </nav>
          <div className="site-nav__actions">
            {/* <span className="system-chip site-nav__status"><i className="system-chip__dot" aria-hidden="true" />Andijan / UZ</span> */}
            <a href="#contact" className="focus-electric primary-action">Discuss a project</a>
            <button ref={menuButtonRef} type="button" className="focus-electric menu-toggle" onClick={open ? closeMenu : openMenu} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <X size={19} /> : <Menu size={19} />}</button>
          </div>
        </div>
      </header>
      {mobileMenu}
    </>
  );
};

export default Navbar;
