"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { siteConfig, links } from "@/lib/config";
import { products } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Group products by category
const groupedProducts = products.reduce((acc, product) => {
  const category = product.category || "Other";
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(product);
  return acc;
}, {} as Record<string, typeof products>);

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navLinks = [
  { label: "Industries", href: `${basePath}/#industries` },
  { label: "Software & Services", href: `${basePath}/services` },
  // { label: "Technical Updates", href: "/updates" },
  { label: "About us", href: `${basePath}/#about` },
  { label: "Contact & Support", href: `${basePath}/#contact` },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpenMobile, setProductsOpenMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // 1. Handle scroll-to-hash on page mount or pathname transition (cross-page routing)
    const handleScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 150);
        }
      }
    };

    handleScroll();

    // 2. Intercept same-page hash link clicks and scroll manually
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.hash) {
        const targetPath = anchor.pathname.replace(/\/$/, "");
        const currentPath = window.location.pathname.replace(/\/$/, "");
        
        // Check if we are on the same page
        if (targetPath === currentPath) {
          const id = anchor.hash.replace("#", "");
          const element = document.getElementById(id);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", anchor.hash);
            setMobileMenuOpen(false);
          }
        }
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-0"
          : "bg-white border-b border-gray-100 py-1"
        }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          {/* Logo */}
          <Link href={`${basePath}/`} className="flex items-center gap-2.5 shrink-0">
            <div className="relative h-12 w-44">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logo_horizontal_v2.jpg`}
                alt="Aveera Scales Logo"
                fill
                className="object-contain"
                unoptimized
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Products Dropdown */}
            <div className="relative group">
              <Link
                href={`${basePath}/#products`}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors rounded-lg hover:bg-brand-blue/5"
              >
                Products
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden max-h-[80vh] overflow-y-auto">
                <div className="p-3 flex flex-col gap-4">
                  {Object.entries(groupedProducts).map(([category, items]) => (
                    <div key={category} className="flex flex-col">
                      <h4 className="px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                        {category}
                      </h4>
                      {items.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand-blue hover:bg-brand-blue/5 rounded-lg transition-colors flex items-center gap-3"
                        >
                          <product.icon className="w-4 h-4 text-brand-orange shrink-0" />
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors rounded-lg hover:bg-brand-blue/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center">
            <a
              href={links.call}
              className="flex items-center gap-2 text-brand-blue hover:text-brand-orange font-bold text-[17px] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <Phone className="w-4 h-4 fill-brand-blue text-brand-blue" />
              </div>
              97237 94363
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
              {/* Mobile Products Accordion */}
              <div className="flex flex-col">
                <button
                  onClick={() => setProductsOpenMobile(!productsOpenMobile)}
                  className="flex items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:text-brand-blue hover:bg-brand-blue/5 rounded-lg transition-colors w-full text-left"
                >
                  Products
                  <ChevronDown className={`w-4 h-4 transition-transform ${productsOpenMobile ? "rotate-180" : ""}`} />
                </button>

                {productsOpenMobile && (
                  <div className="flex flex-col pl-4 border-l-2 border-brand-blue/20 ml-4 mt-1 mb-2 gap-3">
                    {Object.entries(groupedProducts).map(([category, items]) => (
                      <div key={category} className="flex flex-col">
                        <h4 className="px-3 py-1 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          {category}
                        </h4>
                        {items.map((product) => (
                          <Link
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-brand-blue hover:bg-brand-blue/5 rounded-lg transition-colors flex items-center gap-2"
                          >
                            <product.icon className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                            {product.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-3 text-sm font-medium text-gray-700 hover:text-brand-blue hover:bg-brand-blue/5 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-gray-100 flex justify-center">
                <a
                  href={links.call}
                  className="flex items-center gap-2 text-brand-blue font-bold text-lg"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 fill-brand-blue text-brand-blue" />
                  </div>
                  97237 94363
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
