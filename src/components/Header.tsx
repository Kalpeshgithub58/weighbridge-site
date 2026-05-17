"use client";

import { useState, useEffect } from "react";
import { Scale, Phone, MapPin, Menu, X } from "lucide-react";
import { siteConfig, links } from "@/lib/config";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Capacity", href: "#capacity" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-navy"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent rounded-lg flex items-center justify-center">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-navy" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm sm:text-base tracking-tight">
                {siteConfig.businessName}
              </div>
              <div className="text-text-gray text-[10px] sm:text-xs">
                {siteConfig.subtitle}
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={links.call}
              className="flex items-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-hover text-navy font-semibold text-sm rounded-lg transition-colors"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" strokeWidth={2.5} />
              Call Now
            </a>
            <a
              href={links.direction}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 border border-white/20 text-white hover:bg-white/10 font-semibold text-sm rounded-lg transition-colors"
              aria-label="Get Direction"
            >
              <MapPin className="w-4 h-4" strokeWidth={2.5} />
              Direction
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 mt-1">
            <nav className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
