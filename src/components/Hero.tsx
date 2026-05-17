import { Phone, MessageCircle, MapPin, BadgeCheck, Timer } from "lucide-react";
import { siteConfig, links } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative bg-navy pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.08)_0%,_transparent_60%)]" />

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
              <BadgeCheck className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">
                Trusted Local Weighing Service
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold text-white leading-tight tracking-tight">
              Certified Electronic Weighbridge in{" "}
              <span className="text-accent">{siteConfig.city}</span>
            </h1>

            {/* Subtext */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Accurate truck and material weighing service with printed weight
              slips for transporters, traders, farmers and construction
              suppliers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={links.call}
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-navy font-bold text-sm rounded-xl transition-colors shadow-lg shadow-accent/20"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Call Now
              </a>
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-sm rounded-xl transition-colors shadow-lg shadow-whatsapp/20"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
                WhatsApp
              </a>
              <a
                href={links.direction}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white hover:bg-white/10 font-bold text-sm rounded-xl transition-colors"
                aria-label="Get Direction"
              >
                <MapPin className="w-4 h-4" strokeWidth={2.5} />
                Get Direction
              </a>
            </div>
          </div>

          {/* Right content — Hero image card */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
              <img
                src="/images/hero.png"
                alt="Electronic weighbridge with truck on platform"
                className="w-full h-[400px] object-cover"
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

              {/* Live Weight Overlay Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-navy/90 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-text-gray text-xs font-medium uppercase tracking-wider mb-1">
                      Live Weight Display
                    </div>
                    <div className="text-3xl font-extrabold text-accent tracking-tight">
                      42,680 <span className="text-lg font-bold text-gray-400">KG</span>
                    </div>
                    <div className="text-gray-500 text-xs mt-1">
                      Printed slip generated after weighing
                    </div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg px-3 py-2 text-center">
                    <Timer className="w-4 h-4 text-accent mx-auto mb-1" />
                    <div className="text-accent text-xs font-bold">2–5 Min</div>
                    <div className="text-gray-500 text-[10px]">Fast Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
