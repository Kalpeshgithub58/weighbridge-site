import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ModularWeighbridgePage() {
  return (
    <div className="pt-[72px] bg-slate-50 text-slate-800 antialiased min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#products" className="hover:text-amber-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Modular Weighbridge</span>
        </div>
      </div>

      <header className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_45%)]"></div>
          <div className="max-w-7xl mx-auto relative z-10">
              <span className="text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Advanced Export-Ready Engineering</span>
              <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                  Modular <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Weighbridge</span>
              </h1>
              <p className="text-slate-400 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
                  Simplify transportation and installation with our Modular Weighbridge. Designed in strong pre-engineered sections, it can be transported easily and assembled quickly without compromising on strength or weighing accuracy.
              </p>
          </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-12">
              
              <section className="space-y-6">
                  <div className="border-l-4 border-amber-500 pl-4">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Precision Modular Design</h2>
                      <p className="text-slate-500 text-sm mt-1">Industrial standard bolt-together architecture that matches the strength of fully welded decks.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                          <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                              <i className="fa-solid fa-puzzle-piece text-xl"></i>
                          </div>
                          <h3 className="font-bold text-lg text-slate-900 mb-2">Strong Bolt-On Construction</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                              The modular sections are connected using high-strength bolts, eliminating the need for on-site welding. Precision CNC-drilled holes ensure perfect alignment and uniform load distribution for long-lasting performance.
                          </p>
                      </div>

                      <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                          <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                              <i className="fa-solid fa-truck-moving text-xl"></i>
                          </div>
                          <h3 className="font-bold text-lg text-slate-900 mb-2">Easy Transportation</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                              The weighbridge is designed in standard modular sections that fit inside 20 ft or 40 ft shipping containers. This reduces transportation costs and makes it ideal for export projects and remote locations.
                          </p>
                      </div>
                  </div>
              </section>

              <section className="space-y-6">
                  <div className="border-l-4 border-amber-500 pl-4">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Quick Installation</h2>
                      <p className="text-slate-500 text-sm mt-1">Plug-and-play field setup paired with extreme environmental structural rigidities.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                          <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-clock text-xl"></i></div>
                          <h4 className="font-bold text-slate-900 mb-2 text-base">Quick Installation</h4>
                          <p className="text-slate-600 text-xs leading-relaxed">The modular parts are pre-engineered and factory-tested before dispatch. This allows fast and easy installation at the site, reducing installation time and minimizing project delays.</p>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                          <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-shuffle text-xl"></i></div>
                          <h4 className="font-bold text-slate-900 mb-2 text-base">Easy Relocation</h4>
                          <p className="text-slate-600 text-xs leading-relaxed">Perfect for leased premises, mining projects, and temporary installations. The weighbridge can be dismantled, transported, and reinstalled at another location without affecting its structural strength or weighing accuracy.</p>
                      </div>

                      <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                          <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-circle-nodes text-xl"></i></div>
                          <h4 className="font-bold text-slate-900 mb-2 text-base">Easy Module Replacement</h4>
                          <p className="text-slate-600 text-xs leading-relaxed">If any section is damaged due to an accident, there is no need to replace the complete weighbridge. Only the damaged module can be removed and replaced, saving both time and maintenance costs.</p>
                      </div>
                  </div>
              </section>

              <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-sm border border-slate-800">
                  <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight"><i className="fa-solid fa-globe text-amber-500 mr-2"></i>Logistics & Operational Benefits</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                          <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Lower Transportation Cost
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                              Unlike conventional weighbridges that require special trailers and transport permissions, modular sections can be transported using standard trucks or shipping containers. This makes transportation easier and more economical.
                          </p>
                      </div>
                      <div>
                          <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Factory-Tested Accuracy
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                              Every module is manufactured with high precision and tested at our factory before dispatch. This ensures accurate weighing, proper alignment, and reliable long-term performance even under continuous heavy-duty use.
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
                      <p className="text-xs text-slate-500 mb-6">Connect with our structural engineers for international freight packing metrics, container layouts, and quotations.</p>
                      
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
                                  <option>Export Markets & Cross-Border Projects</option>
                                  <option>Leased Commercial Yards & Infrastructure Contracts</option>
                                  <option>Remote/Hill Terrain Mining Deployments</option>
                                  <option>Standard Industrial Yards</option>
                              </select>
                          </div>
                          <div>
                              <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Custom Notes</label>
                              <textarea rows={3} placeholder="Specify destination port details or required modular segment limits..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"></textarea>
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
                              <i className="fa-solid fa-circle-check text-emerald-600"></i> Global Export / Remote Sites
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-600">
                              <i className="fa-solid fa-circle-check text-emerald-600"></i> Leased Plots (Rapid relocation needs)
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-600">
                              <i className="fa-solid fa-circle-check text-emerald-600"></i> Quick Bolt-On/Zero Welding Mandates
                          </div>
                      </div>
                  </div>

              </div>
          </div>

      </main>
    </div>
  );
}
