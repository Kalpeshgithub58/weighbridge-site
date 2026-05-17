import { Scale, Phone, MapPin } from "lucide-react";
import { siteConfig, links } from "@/lib/config";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Capacity", href: "#capacity" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-navy" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <div className="text-white font-bold text-sm">
                  {siteConfig.businessName}
                </div>
                <div className="text-gray-500 text-xs">
                  {siteConfig.subtitle}
                </div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Accurate {siteConfig.capacity} electronic weighbridge service with
              printed weight slips for all types of commercial vehicles and
              materials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href={links.call}
                className="flex items-center gap-2.5 text-gray-500 hover:text-accent text-sm transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {siteConfig.phone}
              </a>
              <a
                href={links.direction}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-gray-500 hover:text-accent text-sm transition-colors"
              >
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                {siteConfig.address}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5">
          <p className="text-gray-600 text-xs sm:text-sm text-center">
            © {year} {siteConfig.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
