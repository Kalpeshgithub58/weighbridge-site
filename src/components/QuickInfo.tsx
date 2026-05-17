import { quickInfoCards } from "@/lib/data";

export default function QuickInfo() {
  return (
    <section className="relative -mt-8 sm:-mt-10 z-10 pb-8 sm:pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {quickInfoCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.label}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg shadow-black/5 border border-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-accent" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-text-gray text-xs font-medium">
                      {card.label}
                    </div>
                    <div className="text-charcoal font-bold text-sm sm:text-base mt-0.5 truncate">
                      {card.value}
                    </div>
                    <div className="text-text-gray text-[11px] sm:text-xs mt-0.5 hidden sm:block">
                      {card.description}
                    </div>
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
