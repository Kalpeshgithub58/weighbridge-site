import { softwareFeatures, technicalServices } from "@/lib/data";
import { MonitorPlay, Settings2 } from "lucide-react";

export default function SoftwareAndServices() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(29,78,216,0.15)_0%,_transparent_50%)]" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 bg-brand-blue/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-blue-300 text-sm font-semibold tracking-wide uppercase">Software & Technical Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Bridging Heavy-Duty Hardware with Smart Digital Management
          </h2>
          <p className="text-blue-100/80 text-base sm:text-lg leading-relaxed">
            We supply industry-leading software to automate your weighing data and provide the hardcore technical maintenance required to keep your operations running without interruption.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Software Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg shadow-brand-blue/20">
                <MonitorPlay className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Smart Weighbridge Automation</h3>
            </div>
            <div className="space-y-6">
              {softwareFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1.5">{feature.title}</h4>
                      <p className="text-blue-100/70 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Services Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center shadow-lg shadow-brand-orange/20">
                <Settings2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Expert Technical Maintenance</h3>
            </div>
            <div className="space-y-6">
              {technicalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 bg-brand-orange/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-orange-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base mb-1.5">{service.title}</h4>
                      <p className="text-blue-100/70 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
