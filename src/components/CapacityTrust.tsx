import { CheckCircle } from "lucide-react";
import { capacityBullets, trustCards } from "@/lib/data";

export default function CapacityTrust() {
  return (
    <section id="capacity" className="py-16 sm:py-20 bg-navy">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left — Capacity Details */}
          <div className="bg-charcoal rounded-2xl p-6 sm:p-8 border border-white/5">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-5">
              <span className="text-accent text-sm font-semibold">
                Capacity Details
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
              Heavy-duty setup for commercial weighing
            </h2>
            <ul className="space-y-4">
              {capacityBullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                >
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={2} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Trust Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-charcoal rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-accent/20 transition-colors"
                >
                  <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-[22px] h-[22px] text-accent" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-white font-bold text-sm sm:text-base mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
