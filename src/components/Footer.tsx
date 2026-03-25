import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-dark text-muted-foreground">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-3">FLASH CAST</h3>
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
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Interior Renovation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Commercial Renovation</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Custom Built-In</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Exterior Works</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Warehouse & Shelving</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Design & Permitting</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/materials" className="hover:text-white transition-colors">Materials</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/quote" className="hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>Kuala Lumpur</li>
              <li>Petaling Jaya</li>
              <li>Selangor</li>
              <li>Mont Kiara</li>
              <li>Cheras</li>
              <li>Bangsar</li>
              <li>Subang Jaya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} FLASH CAST SDN. BHD. All rights reserved.</p>
          <p>SSM Registration No: XXXXXXXXXX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
