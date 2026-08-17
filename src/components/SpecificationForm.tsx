"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/config";

interface SpecificationFormProps {
  productName: string;
  description: string;
  nameLabel?: string;
  namePlaceholder?: string;
  dropdownLabel: string;
  dropdownOptions: string[];
  textareaPlaceholder: string;
}

export default function SpecificationForm({
  productName,
  description,
  nameLabel = "Company / Full Name",
  namePlaceholder = "Enter your name",
  dropdownLabel,
  dropdownOptions,
  textareaPlaceholder,
}: SpecificationFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState(dropdownOptions[0] || "");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl relative overflow-hidden text-center flex flex-col items-center justify-center min-h-[380px] transition-all duration-500 animate-fadeIn">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
        
        {/* Animated Checkmark */}
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-6 shadow-inner">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">Thank you, {name.split(" ")[0]}!</h3>
        <p className="text-sm text-slate-600 mb-6 leading-relaxed max-w-xs">
          Your enquiry for the <strong>{productName}</strong> has been received. Our engineers will get in touch with you shortly.
        </p>

        <div className="w-full space-y-3">
          <a
            href={`tel:+${siteConfig.phoneRaw}`}
            className="flex items-center justify-center gap-2 w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold py-3 rounded-lg text-xs tracking-wider transition-colors shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 01-7.108-7.108c-.157-.44.009-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            CALL US NOW
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-wider font-semibold"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
      
      <h3 className="text-lg font-bold text-slate-900 mb-1">Request Technical Specification</h3>
      <p className="text-xs text-slate-500 mb-6">{description}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">{nameLabel}</label>
          <input
            type="text"
            placeholder={namePlaceholder}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
          />
        </div>
        <div>
          <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Direct Contact Number</label>
          <input
            type="tel"
            placeholder="+91 "
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
          />
        </div>
        <div>
          <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">{dropdownLabel}</label>
          <select
            value={option}
            onChange={(e) => setOption(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-600 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
          >
            {dropdownOptions.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Custom Notes</label>
          <textarea
            rows={3}
            placeholder={textareaPlaceholder}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold py-2.5 rounded-lg text-xs tracking-wider transition-colors shadow-xs cursor-pointer"
        >
          SUBMIT ENQUIRY <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i>
        </button>
      </form>
    </div>
  );
}
