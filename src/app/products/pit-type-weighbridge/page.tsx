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
                  Maximize yard operational space with our ultra-rugged, flush-to-ground Pit Type weighing systems. Engineered specifically for high-frequency loading cycles and congested yards requiring multi-directional vehicular movement.
              </p>
          </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-12">
              
              <section className="space-y-6">
                  <div className="border-l-4 border-amber-500 pl-4">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Heavy Underground Reinforcement</h2>
                      <p className="text-slate-500 text-sm mt-1">Maximum lateral stiffness designed to handle massive cross-traffic impacts effortlessly.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                          <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                              <i className="fa-solid fa-compress text-xl"></i>
                          </div>
                          <h3 className="font-bold text-lg text-slate-900 mb-2">Flush Ground Integration</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                              Since the deck is mounted exactly level with the ground surface, it occupies zero extra airspace or ramp space. This permits heavy trucks to cross or turn from any angle, making it the perfect choice for compact factories and congested premises.
                          </p>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                          <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                              <i className="fa-solid fa-vector-square text-xl"></i>
                          </div>
                          <h3 className="font-bold text-lg text-slate-900 mb-2">Anti-Twist Structural Girder Layout</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                              Our underground framework features dense longitudinal main-girders cross-linked with high-thickness bracing plates. This prevents complex torsional warping or physical twisting caused by sudden brake applications from multi-axle dumpers.
                          </p>
                      </div>
                  </div>
              </section>

              <section className="space-y-6">
                  <div className="border-l-4 border-amber-500 pl-4">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Environmental Shielding & Alignment</h2>
                      <p className="text-slate-500 text-sm mt-1">Smart component sealing paired with precision dual-link load cell restraints.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                          <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-boxes-packing"></i></div>
                          <h4 className="font-bold text-slate-900 mb-2 text-base">Sectional Module Transport</h4>
                          <p className="text-slate-600 text-xs leading-relaxed">Engineered in heavy interlocking grid segments. Even our highest-tonnage pit frames can be dismantled down to standard sizes for regular transport and swift underground alignment mapping.</p>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                          <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-anchor"></i></div>
                          <h4 className="font-bold text-slate-900 mb-2 text-base">Restraint Assembly Locks</h4>
                          <p className="text-slate-600 text-xs leading-relaxed">High-clearance bumper checks and stay-rod mounting assemblies effectively isolate extreme structural shifting when bulk mining trucks aggressively back into the platform.</p>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                          <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-droplet-slash"></i></div>
                          <h4 className="font-bold text-slate-900 mb-2 text-base">Hermetic Load Cell Sealing</h4>
                          <p className="text-slate-600 text-xs leading-relaxed">To resist underground moisture and dust accumulation, we integrate premium IP68/IP69K stainless steel load cells with smart self-aligning rocker assemblies for long-term precision baseline stability.</p>
                      </div>
                  </div>
              </section>

              <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-sm border border-slate-800">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight"><i className="fa-solid fa-arrows-turn-to-dots text-amber-500 mr-2"></i>Operational Logistics Advantages</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                          <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Zero Ramp-Space Dependency
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                              Unlike pitless platforms, this system completely removes the requirement for long concrete approach ramps on either end, reclaiming significant square footage for active warehouse loading bays.
                          </p>
                      </div>
                      <div>
                          <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Optimal High-Traffic Flow
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                              Designed explicitly for heavy manufacturing plants and ports. The ground-flush profile maintains uniform yard speed baselines, facilitating non-stop commercial vehicle tracking with maximum safety margins.
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
              <div className="sticky top-24 space-y-6">
                  
                  <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                      
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Request Technical Specification</h3>
                      <p className="text-xs text-slate-500 mb-6">Connect with our structural engineers for custom pit layouts, reinforcement drawings, and quick quotations.</p>
                      
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
                                  <option>Mining, Crushers & Scrap Trade</option>
                                  <option>Heavy Logistics, Ports & Custom Hubs</option>
                                  <option>Sugar Mills, Grains & Mandis</option>
                                  <option>Chemical & Industrial Manufacturing</option>
                              </select>
                          </div>
                          <div>
                              <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Custom Notes</label>
                              <textarea rows={3} placeholder="Specify pit depth availability or foundation civil drawing requirements..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"></textarea>
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
