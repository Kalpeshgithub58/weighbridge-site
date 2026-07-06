"use client";

import { useState } from "react";
import { products } from "@/lib/data";
import Link from "next/link";

const categories = ["All", "Heavy Weighbridges", "Industrial Scales", "Lab Scales", "Load Cells", "Software"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 sm:py-28 bg-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">What We Supply & Install</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            Precision at Every Scale
          </h2>
          <p className="text-text-gray mt-5 text-base sm:text-lg leading-relaxed">
            Premium hardware matched with expert integration. Choose the right system for your Industrial, Commercial and Lab scale needs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm border ${
                activeCategory === category
                  ? "bg-brand-orange text-white border-brand-orange shadow-brand-orange/20"
                  : "bg-white text-text-gray border-gray-200 hover:border-brand-orange/50 hover:text-brand-orange hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Display */}
        {activeCategory === "All" ? (
          <div className="relative overflow-hidden w-full group py-4">
            <div className="flex w-max animate-marquee gap-6 sm:gap-8">
              {[...filteredProducts, ...filteredProducts].map((product, index) => (
                <Link
                  href={`/products/${product.slug}`}
                  key={`${product.slug}-${index}`}
                  className="w-[280px] sm:w-[320px] shrink-0 bg-white rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 overflow-hidden flex flex-col block"
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-charcoal mb-2 hover:text-brand-orange transition-colors line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-text-gray text-xs sm:text-sm leading-relaxed flex-1 line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {/* Gradient Fades for Slider */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-light to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-light to-transparent pointer-events-none"></div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 transition-all duration-500">
            {filteredProducts.map((product) => {
              return (
                <Link
                  href={`/products/${product.slug}`}
                  key={product.slug}
                  className="group bg-white rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 overflow-hidden flex flex-col block"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-brand-orange transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-text-gray text-sm leading-relaxed flex-1">
                      {product.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-gray text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
