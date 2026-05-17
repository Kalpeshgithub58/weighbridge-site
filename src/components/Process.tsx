import { processSteps } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Process() {
  return (
    <section className="py-16 sm:py-20 bg-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-accent text-sm font-semibold">Simple Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal tracking-tight">
            From vehicle entry to printed slip
          </h2>
          <p className="text-text-gray mt-4 text-base sm:text-lg leading-relaxed">
            The process is clear, fast and easy for drivers. No unnecessary
            waiting, no confusing steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-100 h-full">
                {/* Step number */}
                <div className="w-10 h-10 bg-accent text-navy font-extrabold text-lg rounded-xl flex items-center justify-center mb-4">
                  {step.step}
                </div>
                <h3 className="text-charcoal font-bold text-base sm:text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-text-gray text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Arrow connector (desktop only) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
