import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { siteConfig, links } from "@/lib/config";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-accent text-sm font-semibold">Contact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal tracking-tight">
            Visit Our Weighbridge
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Card */}
          <div className="bg-navy rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">
              {siteConfig.businessName}
            </h3>

            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">
                    Phone
                  </div>
                  <a
                    href={links.call}
                    className="text-white font-semibold text-base hover:text-accent transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">
                    Address
                  </div>
                  <p className="text-white font-semibold text-base">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">
                    Working Hours
                  </div>
                  <p className="text-white font-semibold text-base">
                    {siteConfig.workingHours}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-white/10">
              <a
                href={links.call}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover text-navy font-bold text-sm rounded-xl transition-colors"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Call Now
              </a>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm rounded-xl transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
                WhatsApp
              </a>
              <a
                href={links.direction}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl transition-colors"
                aria-label="Get Direction"
              >
                <MapPin className="w-4 h-4" strokeWidth={2.5} />
                Get Direction
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg shadow-black/5 min-h-[350px] sm:min-h-[400px]">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Weighbridge Location on Google Maps"
              className="w-full h-full min-h-[350px] sm:min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
