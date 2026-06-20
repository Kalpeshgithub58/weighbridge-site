import { industries } from "@/lib/data";

export default function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-28 bg-light border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 rounded-full px-4 py-1.5 mb-5">
            <span className="text-brand-blue text-sm font-semibold tracking-wide uppercase">Industries We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            Built for Heavy-Duty Environments
          </h2>
          <p className="text-text-gray mt-5 text-base sm:text-lg leading-relaxed">
            From dusty quarries to hygienic pharma labs, our weighing systems are engineered to perform flawlessly across every sector.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-brand-orange/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-light group-hover:bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
                </div>
                <h3 className="text-charcoal font-bold text-sm sm:text-base mb-2 group-hover:text-brand-orange transition-colors">
                  {industry.title}
                </h3>
                <p className="text-text-gray text-xs sm:text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
