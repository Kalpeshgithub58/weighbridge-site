import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function DoubleEndedLoadCellPage() {
  return (
    <div className="pt-[72px] bg-slate-50 text-slate-800 antialiased min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#products" className="hover:text-amber-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Double Ended Load Cell</span>
        </div>
      </div>



    <header className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_45%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Metrological Core Technology</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                Double-Ended <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Load Cell</span>
            </h1>
            <p className="text-slate-400 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
                Experience zero-compromise accuracy with our premium high-capacity Double-Ended Shear Beam Load Cells. Specifically built for high-tonnage heavy industrial applications, providing superior resistance against harsh side-thrust forces.
            </p>
        </div>
    </header>

    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-12">
            
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Metrological Superiority & Structural Strength</h2>
                    <p className="text-slate-500 text-sm mt-1">High-alloy tool steel construction built for maximum continuous repeatable strain output.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-gauge-high text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Dual Shear Strain Optimization</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Unlike traditional compression sensors, our double-ended layout measures shear strain at both ends of the cell body. This effectively cancels out heavy eccentric, non-axial, and unexpected tilting loads caused by moving heavy vehicles.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-temperature-arrow-up text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Thermal Baseline Compensation</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Integrated with advanced internal foil-gauge bridges that dynamically counteract thermal variations. This ensures zero weight drift and flawless operational precision even when environmental temperatures fluctuate wildly across harsh Indian weather patterns.
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Heavy-Duty Isolation & Sealing Architecture</h2>
                    <p className="text-slate-500 text-sm mt-1">Complete structural shielding from underground water-logging and industrial dust.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-water-ladder text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">IP68/IP69K Hermetic Seal</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">The internal strain-gauge cavity is completely sealed using laser-welded stainless steel element sheets, ensuring complete water submersion protection in sub-grade pits.</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-arrows-to-dot text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Self-Centering Rocker</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Designed to pair perfectly with custom link-mounting hardware. The cell instantly resets to its true vertical balance point after receiving multi-directional braking stress.</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-shield-cat text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Surge & Lightning Protection</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Equipped with internal low-impedance protection baselines to divert sudden voltage spikes and static electrical charges away from sensitive electronics.</p>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-sm border border-slate-800">
                <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight"><i className="fa-solid fa-microchip text-amber-500 mr-2"></i>Advanced Operational Performance Parameters</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Near-Zero Hysteresis Output
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Our double-ended sensor design guarantees absolute repeatability margins of less than ±0.02% of the rated total load output. Perfect for extreme high-frequency multi-axle bulk weighing hubs.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> High Input Impedance Calibration
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Engineered with premium internal resistance configurations (700Ω baselines), resulting in minimal power dissipation, reduced connection cable errors, and better signal stability at the digital indicator.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="border-l-4 border-amber-500 pl-4 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Standard Capacity & Metrological Metrics</h2>
                    <p className="text-slate-500 text-sm mt-1">Select the optimal load cell range for custom weighbridge fabrication and industrial scales.</p>
                </div>
                
                <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase">
                                <th className="p-4 rounded-tl-xl">Rated Capacity per Cell</th>
                                <th className="p-4 text-center">Combined Error (%FS)</th>
                                <th className="p-4 text-center">Excitation Voltage</th>
                                <th className="p-4 text-center">Safe Overload Margin</th>
                                <th className="p-4 text-center rounded-tr-xl">Ingress Protection</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">10 Ton (10,000 kg)</td>
                                <td className="p-4 text-center text-slate-600">≤ ±0.020%</td>
                                <td className="p-4 text-center text-slate-500">5 ~ 12 V DC (Max 15V)</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">150% FS</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">IP68 / IP69K</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">20 Ton (20,000 kg)</td>
                                <td className="p-4 text-center text-slate-600">≤ ±0.020%</td>
                                <td className="p-4 text-center text-slate-500">5 ~ 12 V DC (Max 15V)</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">150% FS</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">IP68 / IP69K</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">30 Ton (30,000 kg)</td>
                                <td className="p-4 text-center text-slate-600">≤ ±0.025%</td>
                                <td className="p-4 text-center text-slate-500">5 ~ 12 V DC (Max 15V)</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">150% FS</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">IP68 / IP69K</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">40 Ton (40,000 kg)</td>
                                <td className="p-4 text-center text-slate-600">≤ ±0.025%</td>
                                <td className="p-4 text-center text-slate-500">5 ~ 12 V DC (Max 15V)</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">150% FS</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">IP68 / IP69K</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">50 Ton (50,000 kg)</td>
                                <td className="p-4 text-center text-slate-600">≤ ±0.030%</td>
                                <td className="p-4 text-center text-slate-500">5 ~ 12 V DC (Max 15V)</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">150% FS</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">IP68 / IP69K</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400 italic">
                    <i className="fa-solid fa-circle-info text-amber-500/80"></i>
                    <span>Calibration metrics and electrical output ratings match industrial standard high-capacity OIML baselines.</span>
                </div>
            </section>

        </div>

        <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
                
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Request Technical Datasheet</h3>
                    <p className="text-xs text-slate-500 mb-6">Connect with our electronic hardware engineers for detailed wiring schematics, mounting link drawings, and quotation details.</p>
                    
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
                                <option>New Weighbridge Manufacturing</option>
                                <option>Faulty Load Cell Replacement/Repair</option>
                                <option>Heavy Hopper / Silo Scale Integration</option>
                                <option>Industrial Automation Project</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Custom Notes</label>
                            <textarea rows={3} placeholder="Specify connection cable lengths, custom capacity variants, or indicator compatibility specs..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold py-2.5 rounded-lg text-xs tracking-wider transition-colors shadow-xs cursor-pointer">
                            SUBMIT ENQUIRY <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i>
                        </button>
                    </form>
                </div>

                <div className="bg-slate-100 p-5 rounded-xl border border-slate-200">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">Compatible Environments:</h5>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> High-Tonnage Electronic Weighbridges
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> High-Moisture Pit Deployments
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> High-Capacity Silos & Batching Plants
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </main>


    </div>
  );
}
