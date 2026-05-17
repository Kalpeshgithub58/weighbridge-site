"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 bg-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-accent text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal tracking-tight">
            Common customer questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-charcoal font-semibold text-sm sm:text-base pr-2">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-gray shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                    <p className="text-text-gray text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
