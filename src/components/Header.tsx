"use client";

import { useState, useEffect } from "react";
import { Scale, Phone, Menu, X, Mail } from "lucide-react";
import { siteConfig, links } from "@/lib/config";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Industries", href: "#industries" },
  { label: "Software & Services", href: "#services" },
  { label: "About us", href: "#about" },
  { label: "Contact & Support", href: "#contact" },
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
    <>
      {/* Top Info Bar */}
      <div className="bg-brand-orange text-white text-xs md:text-sm py-2 px-4 sm:px-8 flex justify-center sm:justify-between items-center font-light z-50 relative">
        <span className="hidden sm:inline">✓ Authorized Dealership | ✓ Expert Installation | ✓ Pan-India AMC Services</span>
        <span className="font-semibold flex items-center gap-2">
          <Phone className="w-3 h-3" /> Sales & Support: {siteConfig.phone}
        </span>
      </div>

      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 shrink-0">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="leading-tight">
                <div className="text-gray-900 font-bold text-lg sm:text-xl tracking-wide">
                  Aveera <span className="text-brand-blue">Scales</span>
                </div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors rounded-lg hover:bg-brand-blue/5"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-blue-800 text-white font-semibold text-sm rounded-lg transition-colors shadow-lg shadow-brand-blue/30"
              >
                Request Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t border-gray-100 mt-1">
              <nav className="flex flex-col gap-1 pt-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-3 text-sm font-medium text-gray-700 hover:text-brand-blue hover:bg-brand-blue/5 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-2 mt-2 border-t border-gray-100">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex justify-center w-full px-4 py-3 bg-brand-blue text-white font-semibold text-sm rounded-lg"
                  >
                    Request Quote
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
