const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 VDG. Barcha huquqlar himoyalangan.</p>
        <div className="flex gap-6">
          <a href="#xizmatlar" className="hover:text-foreground transition-colors">Xizmatlar</a>
          <a href="#biz-haqimizda" className="hover:text-foreground transition-colors">Biz haqimizda</a>
          <a href="#aloqa" className="hover:text-foreground transition-colors">Aloqa</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
