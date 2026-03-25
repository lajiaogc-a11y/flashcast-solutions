import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle, ArrowRight } from "lucide-react";

const locationLinks = [
  { name: "Kuala Lumpur", slug: "kuala-lumpur" },
  { name: "Petaling Jaya", slug: "petaling-jaya" },
  { name: "Selangor", slug: "selangor" },
  { name: "Mont Kiara", slug: "mont-kiara" },
  { name: "Cheras", slug: "cheras" },
  { name: "Bangsar", slug: "bangsar" },
  { name: "Subang Jaya", slug: "subang-jaya" },
];

const serviceLinks = [
  { name: "Design Services", slug: "design" },
  { name: "Custom Built-In", slug: "builtin" },
  { name: "Renovation Works", slug: "renovation" },
  { name: "Commercial Works", slug: "commercial" },
  { name: "Exterior Works", slug: "exterior" },
  { name: "Warehouse & Shelving", slug: "warehouse" },
  { name: "Approval & Docs", slug: "approval" },
];

const companyLinks = [
  { name: "About Us", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Materials", path: "/materials" },
  { name: "Our Process", path: "/process" },
  { name: "Blog / Insights", path: "/blog" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-5">
    <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/90 mb-2">
      {children}
    </h4>
    <div className="w-8 h-0.5 bg-[hsl(var(--gold))]" />
  </div>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link
      to={to}
      className="text-sm text-white/50 hover:text-[hsl(var(--gold))] hover:pl-2 transition-all duration-200"
    >
      {children}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer>
      {/* ZONE 1: CTA Band */}
      <div className="bg-accent">
        <div className="container-narrow px-4 md:px-8 lg:px-16 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground">
              Ready to Transform Your Space?
            </h3>
            <p className="text-accent-foreground/70 mt-1 text-sm md:text-base">
              Get a free consultation and quote for your dream renovation.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-white text-accent hover:bg-white/90 font-semibold px-8 btn-press shrink-0"
          >
            <Link to="/quote" className="flex items-center gap-2">
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* ZONE 2: Main Footer */}
      <div className="bg-[hsl(220,20%,8%)] border-t border-[hsl(var(--gold)/0.2)]">
        <div className="container-narrow px-4 md:px-8 lg:px-16 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <h3 className="font-display text-xl font-bold text-white tracking-wide mb-4">
                FLASH CAST
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
                Professional renovation & interior design company based in Kuala Lumpur.
                Design, build, and custom solutions — all under one roof.
              </p>

              <div className="flex flex-col gap-3 text-sm text-white/50 mb-6">
                <span className="flex items-start gap-3 group">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[hsl(var(--gold)/0.15)] transition-colors">
                    <MapPin className="w-3.5 h-3.5 text-[hsl(var(--gold))]" />
                  </span>
                  94, Jalan Mega Mendung, Taman United, 58200 Kuala Lumpur
                </span>
                <span className="flex items-center gap-3 group">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[hsl(var(--gold)/0.15)] transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[hsl(var(--gold))]" />
                  </span>
                  +60 12-345 6789
                </span>
                <span className="flex items-center gap-3 group">
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[hsl(var(--gold)/0.15)] transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[hsl(var(--gold))]" />
                  </span>
                  info@flashcast.com.my
                </span>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: MessageCircle, label: "WhatsApp" },
                ].map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-[hsl(var(--gold))] hover:text-[hsl(220,20%,8%)] hover:border-[hsl(var(--gold))] transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <SectionTitle>Services</SectionTitle>
              <ul className="space-y-2.5">
                {serviceLinks.map((s) => (
                  <FooterLink key={s.slug} to={`/services/${s.slug}`}>
                    {s.name}
                  </FooterLink>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <SectionTitle>Company</SectionTitle>
              <ul className="space-y-2.5">
                {companyLinks.map((c) => (
                  <FooterLink key={c.path} to={c.path}>
                    {c.name}
                  </FooterLink>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div className="lg:col-span-4">
              <SectionTitle>Service Areas</SectionTitle>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {locationLinks.map((loc) => (
                  <FooterLink key={loc.slug} to={`/locations/${loc.slug}`}>
                    {loc.name}
                  </FooterLink>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ZONE 3: Bottom Bar */}
      <div className="bg-[hsl(220,20%,5%)]">
        <div className="container-narrow px-4 md:px-8 lg:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} FLASH CAST SDN. BHD. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>SSM: XXXXXXXXXX</span>
            <span className="w-px h-3 bg-white/10" />
            <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <span className="w-px h-3 bg-white/10" />
            <Link to="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
