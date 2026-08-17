import SpecificationForm from '@/components/SpecificationForm';
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
          <span className="text-slate-900">Lab and Jewellery Scales</span>
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
                Designed for jewellery shops, laboratories, and precision weighing applications, our Jewellery & Precision Scales deliver exceptional accuracy, fast response, and reliable performance for measuring gold, silver, gemstones, and other valuable materials.
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
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">High-Precision Weighing</h2>
                    <p className="text-slate-500 text-sm mt-1">Advanced precision sensor cores configured to isolate absolute weight from draft or physical vibrations.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-wind text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Glass Draft Shield</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            The transparent glass enclosure protects the weighing pan from air movement and external disturbances, ensuring fast and accurate measurements.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-scale-balanced text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Automatic Internal Calibration</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            The built-in calibration system automatically maintains weighing accuracy, reducing manual calibration and ensuring consistent performance.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Section 2: Smart Interfacing & Compliance Controls  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Interfacing & Durability</h2>
                    <p className="text-slate-500 text-sm mt-1">Government-approved metrology metrics integrated with data-rich communication ports.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-rotate text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Multiple Weighing Units</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Supports various weighing units, including Grams (g), Carats (ct), Tola, and Ounces (oz), making it suitable for jewellery and laboratory applications.</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-desktop text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">RS-232 Connectivity</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Equipped with an RS-232 communication port for easy connection to computers, POS billing systems, and printers for efficient data transfer.</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-sheet-plastic text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Food-Grade Stainless Steel Pan</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">The removable SUS304 stainless steel weighing pan is corrosion-resistant, easy to clean, and suitable for long-term use.</p>
                    </div>
                </div>
            </section>

            {/*  Section 3: Value Added Material Advantages  */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-sm border border-slate-800">
                <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight"><i className="fa-solid fa-gem text-amber-500 mr-2"></i>Transparency & Approval</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Dual Display
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Available with an additional customer display, allowing both the operator and customer to view the weight simultaneously, ensuring complete transparency during transactions.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Legal Metrology Approved
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Designed as per Class II OIML and Legal Metrology standards, making it suitable for commercial jewellery weighing and laboratory applications.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Applications Section  */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Ideal Applications</h2>
                    <p className="text-slate-500 text-sm mt-1">Highly reliable precision weighing suited for premium retail and laboratory settings.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        "Jewellery Shops", "Gold & Silver Showrooms", "Diamond & Gemstone Traders", "Hallmark Centres",
                        "Laboratories", "Research Institutes", "Pharmaceutical Industries"
                    ].map((app) => (
                        <div key={app} className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 flex items-center gap-3 hover:bg-white hover:shadow-xs transition-all">
                            <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-600">
                                <i className="fa-solid fa-circle-check text-sm"></i>
                            </div>
                            <span className="font-semibold text-xs text-slate-700">{app}</span>
                        </div>
                    ))}
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
                <SpecificationForm
                  productName="Lab and Jewellery Scales"
                  description="Connect with our micro-metrology consultants for legal stamping queries, retail interface setups, and detailed bulk quotes."
                  nameLabel="Showroom / Company Name"
                  dropdownLabel="Primary Application"
                  dropdownOptions={["Gold Bullion & Retail Jewellery Showroom", "Diamond & Precious Gemstone Grading", "Chemical Analytical & Pharmaceutical Lab", "Silverware & Industrial Precision Weight Check"]}
                  textareaPlaceholder="Specify if you require external secondary displays, POS system printer hooks, or customized calibration weights..."
                />

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
