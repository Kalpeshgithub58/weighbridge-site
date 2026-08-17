import SpecificationForm from '@/components/SpecificationForm';
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
                Pitless <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Weighbridge</span>
            </h1>
            <p className="text-slate-400 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
                Our Pitless Weighbridge is designed for industries that need accurate, reliable, and long-lasting vehicle weighing. Since it is installed above ground, it requires very little civil work, reducing installation time and overall project cost while maintaining high weighing accuracy.
            </p>
        </div>
    </header>

    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-12">
            
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Strong & Durable Structure</h2>
                    <p className="text-slate-500 text-sm mt-1">Built to handle heavy multi-axle vehicles without bending or losing its strength over years of continuous use.</p>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-weight-hanging text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">High-Strength Steel Construction</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            The platform is manufactured using premium-quality high-tensile mild steel. Its strong load-bearing structure is designed to carry heavy vehicle loads and perform reliably even in tough industrial working conditions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Smart Design for Easy Transport & Installation</h2>
                    <p className="text-slate-500 text-sm mt-1">Smart modular interlocking setup designed for convenient transport and precise loading alignment.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-cubes-stacked text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Modular Platform Design</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">The platform is built with a modular interlocking design that can be dismantled into individual sections. This makes transportation easier, reduces freight costs, and allows faster installation at the site.</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-crosshairs text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Self-Centering Load Cell Mounts</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">The load cells are installed on a very specific point so it can automatically maintain proper alignment, ensure even load distribution, and provide consistent, highly accurate weighing results every time.</p>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-sm border border-slate-800">
                <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight"><i className="fa-solid fa-hand-holding-dollar text-amber-500 mr-2"></i>Economic & Operational Benefits</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Cost-Effective Surface Installation
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            The above-ground (pitless) design removes the need for deep excavation, costly foundation pits, and complicated drainage work. This helps reduce civil construction costs.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Easy Maintenance with Less Downtime
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Since the complete weighbridge platform is installed above ground, cleaning, maintenance, inspection, and load cell calibration can be done quickly and easily. This reduces machine downtime and keeps your operations running smoothly.
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
                                <td className="p-4 text-center text-amber-600 font-semibold">20 Ton</td>
                                <td className="p-4 text-center text-slate-500">2 kg</td>
                                <td className="p-4 font-normal text-slate-600">6.0m x 2.5m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">4 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 text-center text-amber-600 font-semibold">30 Ton</td>
                                <td className="p-4 text-center text-slate-500">5 kg</td>
                                <td className="p-4 font-normal text-slate-600">7.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">4 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 text-center text-amber-600 font-semibold">40 / 50 Ton</td>
                                <td className="p-4 text-center text-slate-500">5 kg</td>
                                <td className="p-4 font-normal text-slate-600">7.5m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">4 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 text-center text-amber-600 font-semibold">40 / 50 Ton</td>
                                <td className="p-4 text-center text-slate-500">5 kg</td>
                                <td className="p-4 font-normal text-slate-600">9.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">4 / 6 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 text-center text-amber-600 font-semibold">40 / 50 Ton</td>
                                <td className="p-4 text-center text-slate-500">5 kg</td>
                                <td className="p-4 font-normal text-slate-600">10.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">4 / 6 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 text-center text-amber-600 font-semibold">50 / 60 Ton</td>
                                <td className="p-4 text-center text-slate-500">10 kg</td>
                                <td className="p-4 font-normal text-slate-600">12.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">6 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 text-center text-amber-600 font-semibold">50 / 60 Ton</td>
                                <td className="p-4 text-center text-slate-500">10 kg</td>
                                <td className="p-4 font-normal text-slate-600">14.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">6 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 text-center text-amber-600 font-semibold">50 / 60 Ton</td>
                                <td className="p-4 text-center text-slate-500">10 kg</td>
                                <td className="p-4 font-normal text-slate-600">15.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">6 / 8 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 text-center text-amber-600 font-semibold">60 / 80 Ton</td>
                                <td className="p-4 text-center text-slate-500">10 kg</td>
                                <td className="p-4 font-normal text-slate-600">16.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">6 / 8 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 text-center text-amber-600 font-semibold">60 / 80 / 100 Ton</td>
                                <td className="p-4 text-center text-slate-500">10 kg / 20 kg</td>
                                <td className="p-4 font-normal text-slate-600">18.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">8 Nos.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 text-center text-amber-600 font-semibold">80 / 100 Ton</td>
                                <td className="p-4 text-center text-slate-500">10 kg / 20 kg</td>
                                <td className="p-4 font-normal text-slate-600">20.0m x 3.0m</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">8 Nos.</td>
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
                
                <SpecificationForm
                  productName="Pitless Weighbridge"
                  description="Connect with our structural engineers for custom platform configurations and active quotation details."
                  dropdownLabel="Application Environment"
                  dropdownOptions={["Steel, Mining & Heavy Infrastructure", "Cement & Aggregates Manufacturing", "Agriculture, Mandis & Food Processing", "Logistics, Transports & Warehousing"]}
                  textareaPlaceholder="Provide size details or targeted deployment location specs..."
                />

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
