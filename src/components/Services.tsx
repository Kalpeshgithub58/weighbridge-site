import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-accent text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal tracking-tight">
            Reliable weighing support for every load
          </h2>
          <p className="text-text-gray mt-4 text-base sm:text-lg leading-relaxed">
            Built for commercial vehicles, construction material, agriculture
            goods and industrial movement.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-light rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-100 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.8} />
                </div>
                <h3 className="text-charcoal font-bold text-base sm:text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-text-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
