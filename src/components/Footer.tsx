import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const locationLinks = [
  { name: "Kuala Lumpur", slug: "kuala-lumpur" },
  { name: "Petaling Jaya", slug: "petaling-jaya" },
  { name: "Selangor", slug: "selangor" },
  { name: "Mont Kiara", slug: "mont-kiara" },
  { name: "Cheras", slug: "cheras" },
  { name: "Bangsar", slug: "bangsar" },
  { name: "Subang Jaya", slug: "subang-jaya" },
];

const Footer = () => {
  return (
    <footer className="bg-surface-dark text-muted-foreground">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">FLASH CAST</h3>
            <p className="text-sm leading-relaxed mb-4">
              Professional renovation & interior design company based in Kuala Lumpur, Malaysia.
              Design, build, and custom solutions — all under one roof.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                94, Jalan Mega Mendung, Taman United, 58200 Kuala Lumpur
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                +60 12-345 6789
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                info@flashcast.com.my
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/design" className="hover:text-primary-foreground transition-colors">Design Services</Link></li>
              <li><Link to="/services/builtin" className="hover:text-primary-foreground transition-colors">Custom Built-In</Link></li>
              <li><Link to="/services/renovation" className="hover:text-primary-foreground transition-colors">Renovation Works</Link></li>
              <li><Link to="/services/commercial" className="hover:text-primary-foreground transition-colors">Commercial Works</Link></li>
              <li><Link to="/services/exterior" className="hover:text-primary-foreground transition-colors">Exterior Works</Link></li>
              <li><Link to="/services/warehouse" className="hover:text-primary-foreground transition-colors">Warehouse & Shelving</Link></li>
              <li><Link to="/services/approval" className="hover:text-primary-foreground transition-colors">Approval & Documentation</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-primary-foreground transition-colors">Projects</Link></li>
              <li><Link to="/materials" className="hover:text-primary-foreground transition-colors">Materials</Link></li>
              <li><Link to="/process" className="hover:text-primary-foreground transition-colors">Our Process</Link></li>
              <li><Link to="/blog" className="hover:text-primary-foreground transition-colors">Blog / Insights</Link></li>
              <li><Link to="/faq" className="hover:text-primary-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
              <li><Link to="/quote" className="hover:text-primary-foreground transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {locationLinks.map((loc) => (
                <li key={loc.slug}>
                  <Link to={`/locations/${loc.slug}`} className="hover:text-primary-foreground transition-colors">
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} FLASH CAST SDN. BHD. All rights reserved.</p>
          <p className="text-muted-foreground">SSM Registration No: XXXXXXXXXX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
