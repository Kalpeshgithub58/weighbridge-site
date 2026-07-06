import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PitlessWeighbridgePage() {
  return (
    <div className="pt-[72px] bg-slate-50 text-slate-800 antialiased min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#products" className="hover:text-amber-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Pitless Weighbridge</span>
        </div>
      </div>



    <header className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_45%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Next-Gen Engineering</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                Surface Mounted <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Weighbridge</span>
            </h1>
            <p className="text-slate-400 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
                Elevate your heavy-duty material tracking with our premium above-ground weighing platforms. Engineered to eliminate complex excavation while delivering uncompromising precision under intense cyclical loading profiles.
            </p>
        </div>
    </header>

    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-12">
            
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Structural Rigidity & Integrity</h2>
                    <p className="text-slate-500 text-sm mt-1">Built to endure heavy multi-axle vehicular stress without long-term deflection.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-cubes-stacked text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Structural Mastery</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Fabricated using premium-grade, ultra-high-tensile reinforced mild steel. The entire load-bearing framework is precision-engineered to withstand heavy cyclical wheel loads and endure the most abrasive industrial environments without structural deformation.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-bezier-curve text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Continuous Interlocking Welds</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Unlike standard stitch-welding methods, our reinforcing ribs are continuously welded across the heavy-duty I-beam sub-structure. This delivers unparalleled stiffness, eliminating deck deflection even under maximum gross vehicle weight (GVW).
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Logistics & Metrological Precision</h2>
                    <p className="text-slate-500 text-sm mt-1">Smart modular layout combined with advanced shock-absorbing alignment hardware.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-truck-ramp-box"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Smart Modular Layout</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Designed with a smart, fully dismountable interlocking layout. Every single component can be effortlessly split, making long-distance transportation highly cost-effective and enabling rapid setup.</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-shield-halved"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Dynamic Shock Absorption</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Impact mitigation technology is built right into the mounting assemblies. This hardware safely dampens severe horizontal thrust forces generated when multi-axle trucks abruptly enter the scale.</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-crosshairs"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Self-Centering Mounts</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">All high-accuracy load cells are seated on specialized self-centering mounting assemblies. This optimizes load distribution and guarantees near-zero hysteresis with absolute repeatability.</p>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-sm border border-slate-800">
                <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight"><i className="fa-solid fa-chart-line text-amber-500 mr-2"></i>Economic & Operational Advantages</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> High-ROI Surface Installation
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            The elevated pitless profile completely removes the need for deep, expensive underground foundation pits and complex civil drainage networks, saving substantial initial structural capital.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Zero-Downtime Service Design
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Since the entire weighing deck sits clean above ground level, routine maintenance, mud-flushing, visual tracking, and load cell calibrations are exceptionally straightforward, keeping operational downtime to a bare minimum.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="border-l-4 border-amber-500 pl-4 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Standard Configurations & Dimensions</h2>
                    <p className="text-slate-500 text-sm mt-1">Select the ideal load-bearing layout tailored for your specific fleet and volumetric requirements.</p>
                </div>
                
                <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase">
                                
                                <th className="p-4 text-center rounded-tl-xl">Max Capacity</th>
                                <th className="p-4 text-center">Graduation / Resolution</th>
                                <th className="p-4">Standard Platform Sizes (L x W)</th>
                                <th className="p-4 text-center rounded-tr-xl">Load Cells Required</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                
                                <td className="p-4 text-center text-amber-600 font-semibold">5 Ton (5,000 kg)</td>
                                <td className="p-4 text-center text-slate-500">1 kg</td>
                                <td className="p-4 font-normal text-slate-600">3.0m x 2.0m &nbsp;|&nbsp; 4.25m x 2.15m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">4 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                
                                <td className="p-4 text-center text-amber-600 font-semibold">10 Ton (10,000 kg)</td>
                                <td className="p-4 text-center text-slate-500">1 / 2 kg</td>
                                <td className="p-4 font-normal text-slate-600">4.25m x 2.15m &nbsp;|&nbsp; 5.0m x 2.5m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">4 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                
                                <td className="p-4 text-center text-amber-600 font-semibold">20 Ton (20,000 kg)</td>
                                <td className="p-4 text-center text-slate-500">2 kg</td>
                                <td className="p-4 font-normal text-slate-600">6.0m x 2.5m &nbsp;|&nbsp; 7.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">4 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                
                                <td className="p-4 text-center text-amber-600 font-semibold">30 Ton (30,000 kg)</td>
                                <td className="p-4 text-center text-slate-500">5 kg</td>
                                <td className="p-4 font-normal text-slate-600">6.75m x 3.0m &nbsp;|&nbsp; 7.5m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">4 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                
                                <td className="p-4 text-center text-amber-600 font-semibold">40 Ton (40,000 kg)</td>
                                <td className="p-4 text-center text-slate-500">5 kg</td>
                                <td className="p-4 font-normal text-slate-600">7.5m x 3.0m &nbsp;|&nbsp; 9.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">4 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                
                                <td className="p-4 text-center text-amber-600 font-semibold">50 Ton (50,000 kg)</td>
                                <td className="p-4 text-center text-slate-500">5 kg</td>
                                <td className="p-4 font-normal text-slate-600">7.5m x 3.0m &nbsp;|&nbsp; 9.0m x 3.0m &nbsp;|&nbsp; 12.0m x 3.0m &nbsp;|&nbsp; 15.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">4 / 6 / 8 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                
                                <td className="p-4 text-center text-amber-600 font-semibold">60 Ton (60,000 kg)</td>
                                <td className="p-4 text-center text-slate-500">10 kg</td>
                                <td className="p-4 font-normal text-slate-600">7.5m x 3.0m &nbsp;|&nbsp; 9.0m x 3.0m &nbsp;|&nbsp; 12.0m x 3.0m &nbsp;|&nbsp; 15.0m x 3.0m &nbsp;|&nbsp; 16.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">4 / 6 / 8 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                
                                <td className="p-4 text-center text-amber-600 font-semibold">80 Ton (80,000 kg)</td>
                                <td className="p-4 text-center text-slate-500">10 kg</td>
                                <td className="p-4 font-normal text-slate-600">9.0m x 3.0m &nbsp;|&nbsp; 12.0m x 3.0m &nbsp;|&nbsp; 15.0m x 3.0m &nbsp;|&nbsp; 16.0m x 3.0m &nbsp;|&nbsp; 18.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">6 / 8 / 10 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                
                                <td className="p-4 text-center text-amber-600 font-semibold">100 Ton (100,000 kg)</td>
                                <td className="p-4 text-center text-slate-500">10 kg</td>
                                <td className="p-4 font-normal text-slate-600">12.0m x 3.0m &nbsp;|&nbsp; 15.0m x 3.0m &nbsp;|&nbsp; 16.0m x 3.0m &nbsp;|&nbsp; 18.0m x 3.0m &nbsp;|&nbsp; 20.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">6 / 8 / 10 Nos.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400 italic">
                    <i className="fa-solid fa-circle-info text-amber-500/80"></i>
                    <span>Technical parameters and dimensional specifications are subject to optimization adjustments inline with continuous product R&D advancements.</span>
                </div>
            </section>

        </div>

        <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
                
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Request Technical Specification</h3>
                    <p className="text-xs text-slate-500 mb-6">Connect with our structural engineers for custom platform configurations and active quotation details.</p>
                    
                    <form action="#" method="POST" className="space-y-4">
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Company / Full Name</label>
                            <input type="text" placeholder="Enter your name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" />
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Direct Contact Number</label>
                            <input type="tel" placeholder="+91 " required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" />
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Application Environment</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-600 focus:outline-none focus:border-amber-500 focus:bg-white transition-all">
                                <option>Steel, Mining & Heavy Infrastructure</option>
                                <option>Cement & Aggregates Manufacturing</option>
                                <option>Agriculture, Mandis & Food Processing</option>
                                <option>Logistics, Transports & Warehousing</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Custom Notes</label>
                            <textarea rows={3} placeholder="Provide size details or targeted deployment location specs..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold py-2.5 rounded-lg text-xs tracking-wider transition-colors shadow-xs cursor-pointer">
                            SUBMIT ENQUIRY <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i>
                        </button>
                    </form>
                </div>

                <div className="bg-slate-100 p-5 rounded-xl border border-slate-200">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">Deployment Environments:</h5>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> High Water-Table Areas (No logging risks)
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Temporary or Leased Sites (Easy shifting)
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Hard-Rock Soil Structural Baselines
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </main>


    </div>
  );
}
