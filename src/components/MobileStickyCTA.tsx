"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";
import { links } from "@/lib/config";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-brand-dark/95 backdrop-blur-md border-t border-white/10 safe-area-bottom">
      <div className="grid grid-cols-3 divide-x divide-white/10">
        <a
          href={links.call}
          className="flex flex-col items-center justify-center gap-1 py-3 text-white active:bg-white/10 transition-colors"
          aria-label="Call Now"
        >
          <Phone className="w-5 h-5 text-brand-orange" strokeWidth={2} />
          <span className="text-[11px] font-semibold">Call</span>
        </a>
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white active:bg-white/10 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-whatsapp" strokeWidth={2} />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
        <a
          href={links.direction}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 text-white active:bg-white/10 transition-colors"
          aria-label="Get Direction"
        >
          <MapPin className="w-5 h-5 text-brand-blue" strokeWidth={2} />
          <span className="text-[11px] font-semibold">Direction</span>
        </a>
      </div>
    </div>
  );
}
