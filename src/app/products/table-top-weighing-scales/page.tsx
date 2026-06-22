import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function TableTopWeighingScalesPage() {
  return (
    <div className="pt-[72px] bg-slate-50 text-slate-800 antialiased min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#products" className="hover:text-amber-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Table Top Weighing Scales</span>
        </div>
      </div>



    {/*  Premium Product Hero Banner  */}
    <header className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_45%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">High-Durability Retail Logistics</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                Table Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Weighing Scales</span>
            </h1>
            <p className="text-slate-400 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
                Empower your commercial operations with our compact, heavy-duty Table Top scales. Engineered to endure continuous daily weight cycles while providing long-lasting battery configurations and ultra-clear billing display readouts.
            </p>
        </div>
    </header>

    {/*  Main Dynamic Layout  */}
    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/*  Left & Center Content: Upgraded Technical Specifications  */}
        <div className="lg:col-span-2 space-y-12">
            
            {/*  Section 1: Mechanical Stability & Overload Safeguards  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Rugged Retail Framework & Core Rigidity</h2>
                    <p className="text-slate-500 text-sm mt-1">Industrial-strength internal design calibrated to absorb sudden drop shocks on shop counters.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/*  Feature 1  */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-shield text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Integrated Mechanical Overload Stops</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Commercial shop counters often experience rough use and accidental overweight dumps. Our structures integrate precision mechanical down-stops that protect the sensitive internal single-point load cell from permanent deformation, absorbing up to 200% of the rated scale limit.
                        </p>
                    </div>

                    {/*  Feature 2  */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-battery-three-quarters text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Ultra-Low Power Microcontroller Engine</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Equipped with high-performance operational power-saving software chips. The balance enters an automatic sleep/standby state when the scale is empty, providing an extended battery backup run-time of over 50 hours on a single charge loop.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Section 2: Component Materials & Visual Interfacing  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Premium Architecture & Dual-Sided Displays</h2>
                    <p className="text-slate-500 text-sm mt-1">Government-approved legal metrology parameters optimized for intense retail trading.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/*  Feature 3  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-sheet-plastic text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">SUS304 Stainless Pan</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">The wide weighing platform is pressed from anti-corrosion, food-grade stainless steel sheets. Super easy to clean, highly sanitary, and resistant to oil, moisture, and salt stains.</p>
                    </div>

                    {/*  Feature 4  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-eye text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Dual Bright Display</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Features high-intensity red/green LED display windows on both the operator side and customer side, ensuring absolute billing transparency during rapid weight tracking loops.</p>
                    </div>

                    {/*  Feature 5  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-circle-nodes text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Piece Counting Mode</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">The internal terminal software supports dual operational modes, allowing operators to instantly switch between standard weighing and high-accuracy piece-counting for uniform hardware parts.</p>
                    </div>
                </div>
            </section>

            {/*  Section 3: Value Added Capabilities  */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-sm border border-slate-800">
                <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight"><i className="fa-solid fa-store text-amber-500 mr-2"></i>Built to Secure Daily Retail Returns</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> High-Impact ABS Housing Casing
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            The outer structural shell is injection-molded from premium, tough ABS polymer plastic. This provides high impact isolation, protecting the internal electronics motherboard and battery links from daily wear, chemical splashes, and heavy impacts.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Legal Metrology Approved Ready
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Every single scale build is configured to meet strict Class III accuracy standards. Precision-engineered calibration parameters ensure trouble-free government verification routines and complete compliance for commercial trading.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Section 4: Specifications & Dimensions Table  */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="border-l-4 border-amber-500 pl-4 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Standard Commercial Scale Variants</h2>
                    <p className="text-slate-500 text-sm mt-1">Select the optimal platform size and tracking graduation tailored for your store inventory profiles.</p>
                </div>
                
                <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase">
                                <th className="p-4 rounded-tl-xl">Model Reference</th>
                                <th className="p-4 text-center">Maximum Capacity</th>
                                <th className="p-4 text-center">Readability / Resolution</th>
                                <th className="p-4 text-center">Standard Pan Dimensions</th>
                                <th className="p-4 text-center rounded-tr-xl">Battery Backup Included</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">MTS-10R</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">10 kg</td>
                                <td className="p-4 text-center text-slate-500">1 g</td>
                                <td className="p-4 text-center text-slate-600">250 mm x 300 mm</td>
                                <td className="p-4 text-center text-emerald-600 font-bold bg-slate-50/50"><i className="fa-solid fa-circle-check"></i> Built-in 6V/4.5Ah</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">MTS-20R</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">20 kg</td>
                                <td className="p-4 text-center text-slate-500">2 g</td>
                                <td className="p-4 text-center text-slate-600">250 mm x 300 mm</td>
                                <td className="p-4 text-center text-emerald-600 font-bold bg-slate-50/50"><i className="fa-solid fa-circle-check"></i> Built-in 6V/4.5Ah</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">MTS-30R</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">30 kg</td>
                                <td className="p-4 text-center text-slate-500">2 g / 5 g</td>
                                <td className="p-4 text-center text-slate-600">250 mm x 300 mm</td>
                                <td className="p-4 text-center text-emerald-600 font-bold bg-slate-50/50"><i className="fa-solid fa-circle-check"></i> Built-in 6V/4.5Ah</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">MTS-40R</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">40 kg</td>
                                <td className="p-4 text-center text-slate-500">5 g</td>
                                <td className="p-4 text-center text-slate-600">250 mm x 300 mm</td>
                                <td className="p-4 text-center text-emerald-600 font-bold bg-slate-50/50"><i className="fa-solid fa-circle-check"></i> Built-in 6V/4.5Ah</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                {/*  Fine Print Disclaimer Policy  */}
                <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400 italic">
                    <i className="fa-solid fa-circle-info text-amber-500/80"></i>
                    <span>All commercial counter balances come with an active internal transformer module supporting wide 150V-270V AC input operations.</span>
                </div>
            </section>

        </div>

        {/*  Right Sidebar: Conversion Mechanics  */}
        <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
                
                {/*  Advanced Lead Capture Widget  */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Request Trade Callback</h3>
                    <p className="text-xs text-slate-500 mb-6">Connect with our retail integration specialists for custom dealership pricing models, stamping certifications, and active volume discounts.</p>
                    
                    <form action="#" method="POST" className="space-y-4">
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Store / Business Name</label>
                            <input type="text" placeholder="Enter shop or company name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" />
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Direct Contact Number</label>
                            <input type="tel" placeholder="+91 " required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" />
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Target Retail Segment</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-600 focus:outline-none focus:border-amber-500 focus:bg-white transition-all">
                                <option>Kirana, Grocery & Provisions Shop</option>
                                <option>Sweet Showroom & Bakery Outlets</option>
                                <option>Industrial Packaging & Courier Logistics</option>
                                <option>Wholesale Grain / Commercial Marts</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Custom Notes</label>
                            <textarea rows={3} placeholder="Specify if you require deep pan designs, stainless steel outer poles, or specific regional language display settings..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold py-2.5 rounded-lg text-xs tracking-wider transition-colors shadow-xs cursor-pointer">
                            SUBMIT ENQUIRY <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i>
                        </button>
                    </form>
                </div>

                {/*  Industrial Fitment Parameters  */}
                <div className="bg-slate-100 p-5 rounded-xl border border-slate-200">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">Target Environments:</h5>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> High-Volume Retail Supermarkets
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Harsh Power-Cut Rural Districts
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Packaging & Logistics Checkpoints
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </main>


    </div>
  );
}
