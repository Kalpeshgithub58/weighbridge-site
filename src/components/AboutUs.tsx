import { coreValues, technicalExpertise } from "@/lib/data";
import { CheckCircle2, TrendingUp } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">About Aveera Scales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal tracking-tight mb-6 leading-tight">
              Precision at Every Scale. <br className="hidden sm:block" />
              <span className="text-brand-blue">From Milligrams to Tons.</span>
            </h2>
            <p className="text-text-gray text-base sm:text-lg leading-relaxed mb-8">
              Founded by a team of passionate technical experts, Aveera Weighing Scales is not just a dealership—it is a complete technical support system for your weighing needs. We bring top-tier products and unparalleled technical service under one roof.
            </p>
            
            <div className="space-y-6 mb-10">
              <h3 className="text-xl font-bold text-charcoal flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-orange" /> Our Core Values
              </h3>
              <div className="space-y-4">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-charcoal">{value.title}: </span>
                      <span className="text-text-gray text-sm leading-relaxed">{value.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Expertise Cards */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-blue/5 rounded-[2rem] transform translate-x-4 translate-y-4" />
            <div className="relative bg-white rounded-[2rem] border border-gray-100 shadow-xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-charcoal mb-8 border-b border-gray-100 pb-4">
                Our Technical Expertise
              </h3>
              <div className="space-y-6">
                {technicalExpertise.map((expertise, index) => (
                  <div key={index} className="group flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-light border-2 border-brand-blue flex items-center justify-center font-bold text-brand-blue text-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        {index + 1}
                      </div>
                      {index !== technicalExpertise.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-100 my-2 group-hover:bg-brand-blue/30 transition-colors" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h4 className="font-bold text-charcoal mb-2">{expertise.title}</h4>
                      <p className="text-text-gray text-sm leading-relaxed">{expertise.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
