import { useState } from "react";
import { Menu, X } from "lucide-react";
import vdgLogo from "@/assets/vdg-logo.jpg";

const links = [
  { href: "#xizmatlar", label: "Xizmatlar" },
  { href: "#biz-haqimizda", label: "Biz haqimizda" },
  { href: "#aloqa", label: "Aloqa" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={vdgLogo} alt="VDG" className="w-9 h-9 rounded-lg object-cover" />
          {/* <span className="text-xl font-bold text-foreground">Vodiy Didital Group</span> */}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
