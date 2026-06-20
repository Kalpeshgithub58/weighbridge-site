import { links } from "@/lib/config";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative text-white py-24 sm:py-32 px-4 sm:px-8 overflow-hidden bg-gradient-to-br from-brand-dark to-brand-blue">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.15)_0%,_transparent_60%)]" />
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/weighbridge-site/images/grid.svg')] bg-repeat" />

      <div className="max-w-[1200px] mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {/* <span className="text-brand-orange font-semibold tracking-widest uppercase text-xs sm:text-sm mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            Premium Weighing Solutions Provider
          </span> */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Your Trusted Partner For <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-blue-200">Precision Scales.</span>
          </h1>
          <p className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed max-w-xl font-light">
            We supply, install, and maintain top-tier weighbridges and industrial scales. Get the best hardware, flawless software integration, and rapid maintenance services—all under one roof.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-3.5 rounded-lg font-semibold transition shadow-lg shadow-brand-orange/30"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold transition backdrop-blur-sm"
            >
              View Products
            </a>
          </div>
        </div>

        {/* Dealer Highlight Image Area */}
        <div className="relative mt-8 lg:mt-0 hidden md:block">
          <div className="relative bg-white/5 border border-white/10 rounded-2xl h-80 lg:h-[450px] flex items-center justify-center shadow-2xl overflow-hidden backdrop-blur-md group">
            {/* We can use the platform placeholder image here */}
            <img
              src="/weighbridge-site/images/platform.png"
              alt="High-Res Scale Installation"
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-brand-dark/40" />
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm text-gray-900 px-5 py-4 rounded-xl shadow-xl">
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue/10 p-2.5 rounded-lg text-brand-blue shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2 w-6 h-6">
                    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-charcoal">Authorized Supply & Installation</h4>
                  <p className="text-xs text-text-gray mt-0.5">OEM-level technical expertise for your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
