import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo-flashcast.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Materials", path: "/materials" },
  { label: "Projects", path: "/projects" },
  { label: "Process", path: "/process" },
  { label: "Blog", path: "/blog" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/98 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/95 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-0 shrink-0">
          <img
            src={logoImg}
            alt="FLASH CAST SDN. BHD. - Renovation Company Kuala Lumpur"
            className="h-9 md:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[13px] font-medium px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "text-accent bg-accent/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
            <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 mr-1.5" /> WhatsApp
            </a>
          </Button>
          <Button size="sm" className="font-semibold" asChild>
            <Link to="/quote">Get a Quote <ArrowRight className="w-3.5 h-3.5 ml-1" /></Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2.5 -mr-2 rounded-md hover:bg-muted transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in" style={{ animationDuration: "0.2s" }}>
          <nav className="flex flex-col px-4 py-3">
            {/* Main links */}
            <div className="space-y-0.5">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-accent bg-accent/8"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="flex-1" asChild>
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-1.5" /> WhatsApp
                </a>
              </Button>
              <Button size="sm" className="flex-1 font-semibold" asChild>
                <Link to="/quote">Get a Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
