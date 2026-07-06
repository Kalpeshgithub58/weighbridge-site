import { industries } from "@/lib/data";

export default function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-28 bg-white border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-brand-blue text-sm font-semibold tracking-wide uppercase">Industries We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            Made for Heavy Daily Use
          </h2>
          <p className="text-text-gray mt-5 text-base sm:text-lg leading-relaxed">
            From dusty stone crushers to clean medicine labs, our weighing machines work perfectly everywhere.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {industries.map((industry, index) => {
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-charcoal font-bold text-lg mb-2 group-hover:text-brand-orange transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-text-gray text-sm leading-relaxed flex-1">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
