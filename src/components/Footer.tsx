import { siteConfig } from "@/lib/config";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg tracking-wide">
                  Aveera <span className="text-brand-blue">Scales</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {siteConfig.seo.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a href="#products" className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/50"></span> Products
              </a>
              <a href="#industries" className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/50"></span> Industries
              </a>
              <a href="/services" className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/50"></span> Software & Services
              </a>
              <a href="/updates" className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/50"></span> Technical Updates
              </a>
              <a href="#about" className="text-gray-400 hover:text-brand-orange transition-colors text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/50"></span> About Us
              </a>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <a href={`tel:+${siteConfig.phoneRaw}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {siteConfig.businessName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
