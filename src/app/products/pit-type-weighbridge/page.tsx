import SpecificationForm from '@/components/SpecificationForm';
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PitTypeWeighbridgePage() {
  return (
    <div className="pt-[72px] bg-slate-50 text-slate-800 antialiased min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#products" className="hover:text-amber-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Pit Type Weighbridge</span>
        </div>
      </div>

      <header className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_45%)]"></div>
          <div className="max-w-7xl mx-auto relative z-10">
              <span className="text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Heavy Industrial Architecture</span>
              <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                  Pit Type <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Weighbridge</span>
              </h1>
              <p className="text-slate-400 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
                  Make the best use of your available yard space with our heavy-duty Pit Type Weighbridge. Installed at ground level, it is specially designed for busy factories and warehouses where vehicles move frequently from different directions.
              </p>
          </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-12">
              
              <section className="space-y-6">
                  <div className="border-l-4 border-amber-500 pl-4">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Strong Underground Structure</h2>
                      <p className="text-slate-500 text-sm mt-1">Built with a heavily reinforced foundation to provide excellent strength and stability. It easily handles heavy vehicle movement and cross traffic without affecting performance.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                          <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                              <i className="fa-solid fa-compress text-xl"></i>
                          </div>
                          <h3 className="font-bold text-lg text-slate-900 mb-2">Ground Level Installation</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                              The weighbridge platform is installed flush with the ground, so it does not require extra space for ramps. Trucks can enter, exit, or turn from any direction, making it ideal for factories with limited space.
                          </p>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                          <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                              <i className="fa-solid fa-vector-square text-xl"></i>
                          </div>
                          <h3 className="font-bold text-lg text-slate-900 mb-2">Anti-Twist Girder Design</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                              The platform is built with strong longitudinal girders and heavy cross bracing. This design prevents twisting and deformation caused by sudden braking or movement of multi-axle heavy vehicles, ensuring long-lasting durability.
                          </p>
                      </div>
                  </div>
              </section>

              <section className="space-y-6">
                  <div className="border-l-4 border-amber-500 pl-4">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Protected Components & Alignment</h2>
                      <p className="text-slate-500 text-sm mt-1">Smart component sealing paired with precision dual-link load cell restraints.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                          <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-shield-halved text-xl"></i></div>
                          <h4 className="font-bold text-slate-900 mb-2 text-base">Protected Components & Accurate Alignment</h4>
                          <p className="text-slate-600 text-xs leading-relaxed">All important components are well protected against dust, water, and harsh weather conditions. The precision load cell mounting system maintains accurate weighing performance over time.</p>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                          <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-truck-ramp-box text-xl"></i></div>
                          <h4 className="font-bold text-slate-900 mb-2 text-base">Modular Design for Easy Transportation</h4>
                          <p className="text-slate-600 text-xs leading-relaxed">The weighbridge is manufactured in strong modular sections, making transportation, installation, and future relocation easier and more convenient.</p>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                          <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-anchor text-xl"></i></div>
                          <h4 className="font-bold text-slate-900 mb-2 text-base">Heavy-Duty Restraint System</h4>
                          <p className="text-slate-600 text-xs leading-relaxed">Special bumper stops and stay rod assemblies help reduce excessive platform movement when heavily loaded trucks enter, stop, or reverse onto the weighbridge.</p>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                          <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-droplet-slash text-xl"></i></div>
                          <h4 className="font-bold text-slate-900 mb-2 text-base">Fully Sealed Load Cells</h4>
                          <p className="text-slate-600 text-xs leading-relaxed">We use premium IP68/IP69K stainless steel load cells with self-aligning rocker assemblies to protect against water, dust, and moisture. This ensures reliable and accurate weighing for many years.</p>
                      </div>
                  </div>
              </section>

              <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-sm border border-slate-800">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight"><i className="fa-solid fa-arrows-turn-to-dots text-amber-500 mr-2"></i>Operational Benefits</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                          <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> No Need for Approach Ramps
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                              Since the weighbridge is installed at ground level, no long concrete ramps are required. This saves valuable yard space and provides more room for vehicle movement and loading operations.
                          </p>
                      </div>
                      <div>
                          <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Smooth Vehicle Movement
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                              Ideal for busy factories, warehouses, ports, and industrial plants. The ground-level design allows trucks to move smoothly from any direction, improving traffic flow, reducing waiting time, and increasing operational efficiency.
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
              <div className="sticky top-24 space-y-6">
                  
                  <SpecificationForm
                  productName="Pit Type Weighbridge"
                  description="Connect with our structural engineers for custom pit layouts, reinforcement drawings, and quick quotations."
                  dropdownLabel="Application Environment"
                  dropdownOptions={["Mining, Crushers & Scrap Trade", "Heavy Logistics, Ports & Custom Hubs", "Sugar Mills, Grains & Mandis", "Chemical & Industrial Manufacturing"]}
                  textareaPlaceholder="Specify pit depth availability or foundation civil drawing requirements..."
                />

                  <div className="bg-slate-100 p-5 rounded-xl border border-slate-200">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">Deployment Environments:</h5>
                      <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs text-slate-600">
                              <i className="fa-solid fa-circle-check text-emerald-600"></i> High Traffic Maneuvering Yards
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-600">
                              <i className="fa-solid fa-circle-check text-emerald-600"></i> Low Space/No-Ramp Allowed Baseline
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-600">
                              <i className="fa-solid fa-circle-check text-emerald-600"></i> Multi-Axle Cross-Drive Formats
                          </div>
                      </div>
                  </div>

              </div>
          </div>

      </main>
    </div>
  );
}
