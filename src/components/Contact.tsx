"use client";

import { siteConfig, links } from "@/lib/config";
import { Phone, MapPin, Clock, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-light relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-brand-orange text-sm font-semibold uppercase tracking-wide">Contact & Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight">
            Get a Quote or Expert Advice
          </h2>
          <p className="text-text-gray mt-4 text-base sm:text-lg leading-relaxed">
            Discuss your weighing requirements with our engineers. We provide end-to-end consulting, supply, and installation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-brand-dark rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-8">Reach Out Directly</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">Sales & Support</div>
                    <a href={links.call} className="text-white font-bold text-lg hover:text-brand-orange transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">Email Us</div>
                    <a href={links.email} className="text-white font-bold text-lg hover:text-brand-orange transition-colors">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">Office Location</div>
                    <p className="text-white font-medium text-base">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-blue/20 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <div className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">Working Hours</div>
                    <p className="text-white font-medium text-base">
                      {siteConfig.workingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Send an Inquiry</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-charcoal">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-charcoal">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-semibold text-charcoal">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none"
                    placeholder="Your Company Pvt Ltd"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm font-semibold text-charcoal">I am interested in...</label>
                  <select 
                    id="interest" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none bg-white"
                  >
                    <option>Weighbridge Installation</option>
                    <option>Industrial / Commercial Scales</option>
                    <option>Lab / Jewellery Scales</option>
                    <option>Software Automation</option>
                    <option>AMC / Repair Services</option>
                    <option>Other Queries</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-charcoal">Additional Details</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all outline-none resize-none"
                    placeholder="Tell us about your requirements, capacity needed, or any specific issues..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-blue/20"
                >
                  <Send className="w-5 h-5" />
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
