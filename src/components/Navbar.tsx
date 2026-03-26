import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Home, Info, Wrench, Layers, FolderOpen, GitBranch, BookOpen, HelpCircle, Mail } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo-flashcast.png";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "About", path: "/about", icon: Info },
  { label: "Services", path: "/services", icon: Wrench },
  { label: "Materials", path: "/materials", icon: Layers },
  { label: "Projects", path: "/projects", icon: FolderOpen },
  { label: "Process", path: "/process", icon: GitBranch },
  { label: "Blog", path: "/blog", icon: BookOpen },
  { label: "FAQ", path: "/faq", icon: HelpCircle },
  { label: "Contact", path: "/contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/98 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-background/95 backdrop-blur-md border-b border-border"
        }`}
      >
        <div className="container-narrow flex items-center justify-between h-16 px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logoImg}
              alt="FLASH CAST SDN. BHD."
              className="h-8 md:h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-[13px] font-medium px-3 py-2 transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-4 h-4 mr-1.5 text-[#25D366]" /> WhatsApp
              </a>
            </Button>
            <Button size="sm" className="font-semibold" asChild>
              <Link to="/quote">Get a Quote <ArrowRight className="w-3.5 h-3.5 ml-1" /></Link>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors -mr-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu - rendered outside header to avoid stacking context issues */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-[60] bg-background overflow-hidden"
        >
          {/* Scrollable nav links */}
          <div className="absolute inset-x-0 top-0 bottom-[140px] overflow-y-auto px-5 py-4">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3 px-3">
              Navigation
            </p>
            <div className="space-y-0.5">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 py-3 px-3 rounded-lg text-[15px] font-medium transition-colors ${
                      isActive
                        ? "text-accent bg-accent/8"
                        : "text-foreground active:bg-muted"
                    }`}
                  >
                    <Icon className={`w-[18px] h-[18px] shrink-0 ${isActive ? "text-accent" : "text-muted-foreground"}`} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Fixed bottom CTA */}
          <div className="absolute inset-x-0 bottom-0 border-t border-border bg-background px-5 py-4 space-y-2.5">
            <Button size="lg" className="w-full font-semibold h-12 text-sm justify-center" asChild>
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full h-12 text-sm font-medium justify-center"
              asChild
            >
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
