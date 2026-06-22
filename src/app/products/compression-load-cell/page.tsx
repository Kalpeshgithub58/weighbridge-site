import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function CompressionLoadCellPage() {
  return (
    <div className="pt-[72px] bg-slate-50 text-slate-800 antialiased min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#products" className="hover:text-amber-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Compression Load Cell</span>
        </div>
      </div>



    {/*  Premium Product Hero Banner  */}
    <header className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_45%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">High-Precision Electronic Sensors</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                Compression <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Load Cell</span>
            </h1>
            <p className="text-slate-400 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
                Achieve rock-solid metrological stability with our compact, ultra-rugged Canister-style Compression Load Cells. Optimized for high-capacity heavy industrial weighbridges, silos, and bulk-material testing complexes.
            </p>
        </div>
    </header>

    {/*  Main Dynamic Layout  */}
    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/*  Left & Center Content: Upgraded Technical Specifications  */}
        <div className="lg:col-span-2 space-y-12">
            
            {/*  Section 1: Metrological Performance  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Pure Vertical Precision & Axial Alignment</h2>
                    <p className="text-slate-500 text-sm mt-1">High-density hardened core structure engineered to isolate true vertical gravity vectors.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/*  Feature 1  */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-arrows-to-line text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Advanced Anti-Rotation Locks</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Equipped with custom integrated anti-rotation mechanisms. This stops the core sensor column from twisting or shifting axially during extreme multi-directional vehicle braking cycles, ensuring identical calibration parameters over years.
                        </p>
                    </div>

                    {/*  Feature 2  */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-compress-arrows-to-box text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Compact High-Capacity Baseline</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            The space-efficient canister design houses multiple internal shear micro-bridges. This allows the assembly to absorb heavy compressive loads with absolute ease, taking up far less layout room compared to alternative sensors.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Section 2: Shielding & Durability  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Environmental Armor & Structural Isolation</h2>
                    <p className="text-slate-500 text-sm mt-1">Industrial-grade tool steel outer casing matched with hermetic laser seals.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/*  Feature 3  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-sheet-plastic"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Laser Welded IP68</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">The internal strain element core is hermetically enclosed inside a heavy stainless steel protective cover jacket, preventing sub-grade pit mud and water seeping.</p>
                    </div>

                    {/*  Feature 4  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-up-down text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Self-Aligning Upper Cup</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Pairs perfectly with top rocker receiving hardened cups, automatically centering uneven platform weight straight onto the vertical load center axis line.</p>
                    </div>

                    {/*  Feature 5  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-bolt-lightning text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Transient Voltage Defense</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Equipped with customized low-impedance copper ground straps to bypass dangerous lightning currents and static warehouse discharge away from terminal PCBs.</p>
                    </div>
                </div>
            </section>

            {/*  Section 3: Performance Metrics  */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-sm border border-slate-800">
                <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight"><i className="fa-solid fa-wave-square text-amber-500 mr-2"></i>Signal Resolution & Core Engineering Specs</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> High Sensitivity Output
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Features a premium calibrated 2.0 mV/V voltage scaling format. This translates to ultra-clear analog signals traveling smoothly down junction boxes over extended multi-PCB digital indicator configurations.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Minimal Hysteresis Curve
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Guarantees near-zero structural creep errors (below ±0.025% of total scale capacity limits). Ideal for continuous high-speed industrial weighing, scrap load handling, and material batching control.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Section 4: Specifications Table  */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="border-l-4 border-amber-500 pl-4 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Standard Capacity & Operational Limits</h2>
                    <p className="text-slate-500 text-sm mt-1">Select the ideal compression sensor metrics for heavy manufacturing structures and hoppers.</p>
                </div>
                
                <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase">
                                <th className="p-4 rounded-tl-xl">Rated System Range</th>
                                <th className="p-4 text-center">Combined Hysteresis Error</th>
                                <th className="p-4 text-center">Bridge Impedance</th>
                                <th className="p-4 text-center">Ultimate Structural Safety</th>
                                <th className="p-4 text-center rounded-tr-xl">Enclosure Rating</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">10 Ton (10,000 kg)</td>
                                <td className="p-4 text-center text-slate-600">≤ ±0.023% FS</td>
                                <td className="p-4 text-center text-slate-500">700Ω ± 7Ω Baseline</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">200% FS</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">Hermetic IP68</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">20 Ton (20,000 kg)</td>
                                <td className="p-4 text-center text-slate-600">≤ ±0.023% FS</td>
                                <td className="p-4 text-center text-slate-500">700Ω ± 7Ω Baseline</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">200% FS</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">Hermetic IP68</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">30 Ton (30,000 kg)</td>
                                <td className="p-4 text-center text-slate-600">≤ ±0.025% FS</td>
                                <td className="p-4 text-center text-slate-500">700Ω ± 7Ω Baseline</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">200% FS</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">Hermetic IP68</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">40 Ton (40,000 kg)</td>
                                <td className="p-4 text-center text-slate-600">≤ ±0.025% FS</td>
                                <td className="p-4 text-center text-slate-500">700Ω ± 7Ω Baseline</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">200% FS</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">Hermetic IP68</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">50 Ton (50,000 kg)</td>
                                <td className="p-4 text-center text-slate-600">≤ ±0.030% FS</td>
                                <td className="p-4 text-center text-slate-500">700Ω ± 7Ω Baseline</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">200% FS</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">Hermetic IP68</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                {/*  Fine Print Disclaimer Policy  */}
                <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400 italic">
                    <i className="fa-solid fa-circle-info text-amber-500/80"></i>
                    <span>All compression metrics align perfectly with global standard weighing tolerances.</span>
                </div>
            </section>

        </div>

        {/*  Right Sidebar: Conversion Mechanics  */}
        <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
                
                {/*  Advanced Lead Capture Widget  */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Request Technical Datasheet</h3>
                    <p className="text-xs text-slate-500 mb-6">Connect with our structural engineers for custom load calibration baselines, dimensional metrics, and quick pricing variants.</p>
                    
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
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Target Device / Purpose</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-600 focus:outline-none focus:border-amber-500 focus:bg-white transition-all">
                                <option>Weighbridge Upgrades / System Retrofitting</option>
                                <option>Heavy Tank / Silo Level Automation</option>
                                <option>New Weighbridge System Integration</option>
                                <option>Damaged Cell Replacement Maintenance</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Custom Notes</label>
                            <textarea rows={3} placeholder="Specify upper cup installation measurements or existing digital indicators interface details..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold py-2.5 rounded-lg text-xs tracking-wider transition-colors shadow-xs cursor-pointer">
                            SUBMIT ENQUIRY <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i>
                        </button>
                    </form>
                </div>

                {/*  Industrial Fitment Parameters  */}
                <div className="bg-slate-100 p-5 rounded-xl border border-slate-200">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">Compatible Environments:</h5>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> High-Frequency Cyclic Weighing Decks
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> High-Capacity Batching Plant Silos
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Heavy Chemical Storage Containers
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </main>


    </div>
  );
}
