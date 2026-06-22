import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function JewelleryWeighingScalesPage() {
  return (
    <div className="pt-[72px] bg-slate-50 text-slate-800 antialiased min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#products" className="hover:text-amber-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Jewellery Weighing Scales</span>
        </div>
      </div>



    {/*  Premium Product Hero Banner  */}
    <header className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_45%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Micro-Metrological Precision</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                Jewellery & Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Scales</span>
            </h1>
            <p className="text-slate-400 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
                Secure every single milligram of your high-value assets. Engineered with advanced multi-shield sensors to deliver rock-solid stability, lightning-fast response times, and absolute compliance for luxury retail and research labs.
            </p>
        </div>
    </header>

    {/*  Main Dynamic Layout  */}
    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/*  Left & Center Content: Upgraded Technical Specifications  */}
        <div className="lg:col-span-2 space-y-12">
            
            {/*  Section 1: Core Technology & Stability  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Micro-Analytical Transducer Architecture</h2>
                    <p className="text-slate-500 text-sm mt-1">Advanced precision sensor cores configured to isolate absolute weight from draft or physical vibrations.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/*  Feature 1  */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-wind text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Anti-Draft Glass Shield Protection</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Sub-milligram gold and gemstone measurements are highly vulnerable to slight air currents and ceiling fan breeze. Our systems feature high-transparency glass draft chambers that surround the weighing pan, locking out environmental air ripples for an instant, steady weight reading.
                        </p>
                    </div>

                    {/*  Feature 2  */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-scale-balanced text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Internal Motorized Calibration</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Eliminate manual external weight block processes. The integrated internal calibration system automatically runs precision self-testing loops upon temperature variation or at scheduled intervals, keeping your balance 100% accurate without downtime.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Section 2: Smart Interfacing & Compliance Controls  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Enterprise Interfacing & Legal Verifications</h2>
                    <p className="text-slate-500 text-sm mt-1">Government-approved metrology metrics integrated with data-rich communication ports.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/*  Feature 3  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-certificate text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Class II Verification Ready</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Fully compliant with international OIML standards and Legal Metrology guidelines. Ready for immediate stamp and verify routines for commercial retail shops.</p>
                    </div>

                    {/*  Feature 4  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-print text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Carat & Tola Multi-Unit</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Instantly toggle across multiple weight baselines including Grams (g), Carats (ct), Tola, and Ounces (oz) via an ultra-bright, wide-angle green LED/LCD layout screen.</p>
                    </div>

                    {/*  Feature 5  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-desktop text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">POS Billing Data Link</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Equipped with a standard RS-232 serial connection port to feed stable weight strings directly into jewellery retail billing ERPs, removing typing mistakes completely.</p>
                    </div>
                </div>
            </section>

            {/*  Section 3: Value Added Material Advantages  */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-sm border border-slate-800">
                <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight"><i className="fa-solid fa-gem text-amber-500 mr-2"></i>Premium Retail Showroom & Laboratory Architecture</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Heavy Stainless Steel Pan
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            The removable weighing platform is punched from medical-grade, corrosion-proof SUS304 stainless steel. This prevents precious metals scratching, cross-contamination, or residual material scaling on the surface over decades of continuous use.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Dual Display Layout System
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Includes a dedicated auxiliary pole or rear customer-facing display interface. This builds high transactional transparency and solid trust directly between the showroom operator and the luxury asset buyer.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Section 4: Specifications & Configuration Matrix Table  */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="border-l-4 border-amber-500 pl-4 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Standard Models & Precision Metrics</h2>
                    <p className="text-slate-500 text-sm mt-1">Select the optimal balance resolution matched for your high-value bullion and gem tracking needs.</p>
                </div>
                
                <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase">
                                <th className="p-4 rounded-tl-xl">Model Number</th>
                                <th className="p-4 text-center">Maximum Capacity</th>
                                <th className="p-4 text-center">Readability / Resolution</th>
                                <th className="p-4 text-center">Pan Size Diameter / Dimensions</th>
                                <th className="p-4 text-center rounded-tr-xl">Draft Shield Included</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">MJS-300P</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">300 g</td>
                                <td className="p-4 text-center text-slate-500">0.001 g (1 mg)</td>
                                <td className="p-4 text-center text-slate-600">Ø 90 mm</td>
                                <td className="p-4 text-center text-emerald-600 font-bold bg-slate-50/50"><i className="fa-solid fa-circle-check"></i> Yes (Sliding Glass)</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">MJS-600P</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">600 g</td>
                                <td className="p-4 text-center text-slate-500">0.01 g (10 mg)</td>
                                <td className="p-4 text-center text-slate-600">120 mm x 120 mm</td>
                                <td className="p-4 text-center text-slate-400 font-normal bg-slate-50/50">Optional</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">MJS-1200P</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">1,200 g (1.2 kg)</td>
                                <td className="p-4 text-center text-slate-500">0.01 g (10 mg)</td>
                                <td className="p-4 text-center text-slate-600">140 mm x 140 mm</td>
                                <td className="p-4 text-center text-slate-400 font-normal bg-slate-50/50">Optional</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">MJS-3000P</td>
                                <td className="p-4 text-center text-amber-600 font-semibold">3,000 g (3 kg)</td>
                                <td className="p-4 text-center text-slate-500">0.1 g (100 mg)</td>
                                <td className="p-4 text-center text-slate-600">160 mm x 160 mm</td>
                                <td className="p-4 text-center text-rose-500 font-normal bg-slate-50/50"><i className="fa-solid fa-circle-xmark"></i> No</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                {/*  Fine Print Disclaimer Policy  */}
                <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400 italic">
                    <i className="fa-solid fa-circle-info text-amber-500/80"></i>
                    <span>All retail balances are verified ready and pre-calibrated baseline compliant with state weights & measures parameters before shipping.</span>
                </div>
            </section>

        </div>

        {/*  Right Sidebar: Conversion Mechanics  */}
        <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
                
                {/*  Advanced Lead Capture Widget  */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-gradient-to-r from-amber-400 to-amber-600"></div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Request Product Callback</h3>
                    <p className="text-xs text-slate-500 mb-6">Connect with our micro-metrology consultants for legal stamping queries, retail interface setups, and detailed bulk quotes.</p>
                    
                    <form action="#" method="POST" className="space-y-4">
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Showroom / Company Name</label>
                            <input type="text" placeholder="Enter name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" />
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Direct Contact Number</label>
                            <input type="tel" placeholder="+91 " required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" />
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Primary Application</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-600 focus:outline-none focus:border-amber-500 focus:bg-white transition-all">
                                <option>Gold Bullion & Retail Jewellery Showroom</option>
                                <option>Diamond & Precious Gemstone Grading</option>
                                <option>Chemical Analytical & Pharmaceutical Lab</option>
                                <option>Silverware & Industrial Precision Weight Check</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Custom Notes</label>
                            <textarea rows={3} placeholder="Specify if you require external secondary displays, POS system printer hooks, or customized calibration weights..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"></textarea>
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
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Elite Luxury Gold Showrooms
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> High-Precision Analytical Testing Labs
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Educational R&D Institutions
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </main>


    </div>
  );
}
