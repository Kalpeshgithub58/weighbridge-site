import SpecificationForm from '@/components/SpecificationForm';
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PlatformWeighingScalesPage() {
  return (
    <div className="pt-[72px] bg-slate-50 text-slate-800 antialiased min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#products" className="hover:text-amber-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Platform Weighing Scales</span>
        </div>
      </div>



    {/*  Premium Product Hero Banner  */}
    <header className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_45%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Industrial Warehouse Systems</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Weighing Scales</span>
            </h1>
            <p className="text-slate-400 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
                Designed for heavy-duty industrial and warehouse applications, our Platform Weighing Scales provide accurate, reliable, and long-lasting performance for continuous material handling and weighing operations.
            </p>
        </div>
    </header>

    {/*  Main Dynamic Layout  */}
    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/*  Left & Center Content: Upgraded Technical Specifications  */}
        <div className="lg:col-span-2 space-y-12">
            
            {/*  Section 1: Mechanical Durability & Load Safeguards  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Heavy-Duty Structure</h2>
                    <p className="text-slate-500 text-sm mt-1">Built with strong C-channel steel frames and reinforced cross members to provide excellent strength and prevent bending or deformation under heavy loads.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-shield text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Load Cell Protection</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Integrated overload protection and shock-absorbing mechanisms help protect the load cells from accidental impacts and excessive loading, increasing the life of the scale.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-braille text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Anti-Skid Platform</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            The heavy-duty checker plate top provides a non-slip surface, ensuring safe loading and unloading of pallets, drums, and other heavy materials.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Section 2: Material Layout & Intelligent Indicators Integration  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Advanced Features</h2>
                    <p className="text-slate-500 text-sm mt-1">High-durability hardware components integrated with connectivity features.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-desktop text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">High-Visibility Indicator</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Supplied with a sturdy pole-mounted LED/LCD indicator featuring Zero, Tare, Accumulation, and Counting functions for easy and efficient operation.</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-network-wired text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Computer & Printer Connectivity</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Supports RS-232 communication for easy connection to computers, printers, and warehouse management systems for data recording and reporting.</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-droplet-slash text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Sealed Junction Box</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">The high-quality IP-rated junction box protects electrical connections from dust, moisture, and harsh industrial conditions, ensuring stable and accurate weighing performance.</p>
                    </div>
                </div>
            </section>

            {/*  Section 3: Operational Capacity Advantages  */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-sm border border-slate-800">
                <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight"><i className="fa-solid fa-warehouse text-amber-500 mr-2"></i>Legal Metrology Approved</h2>
                
                <div className="grid grid-cols-1 gap-8">
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Class III Accuracy Standards
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Manufactured as per Class III Legal Metrology standards, making it suitable for commercial weighing applications and government verification.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Applications Section  */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Ideal Applications</h2>
                    <p className="text-slate-500 text-sm mt-1">Perfectly suited for various heavy-duty industrial and commercial environments.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        "Warehouses", "Manufacturing Industries", "Logistics & Distribution Centres", "Scrap Yards",
                        "Packaging Units", "Chemical Industries", "Food Processing Plants", "Shipping & Receiving Areas"
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



        </div>

        {/*  Right Sidebar: Conversion Mechanics  */}
        <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
                
                {/*  Advanced Lead Capture Widget  */}
                <SpecificationForm
                  productName="Platform Weighing Scales"
                  description="Connect with our warehouse integration experts for custom platform deck engineering profiles, network connections, and active volume quotes."
                  dropdownLabel="Target Loading Environment"
                  dropdownOptions={["Heavy Steel & Pipe Fabrication Units", "Chemical, Feed & Plastic Granule Bagging Floor", "Courier Logistics & Distribution Warehouses", "Scrap Trade & Foundry Heavy Material Hubs"]}
                  textareaPlaceholder="Specify if you require full stainless steel SUS304 scales, customized pit framing hooks, or multi-scale remote weight display scoreboards..."
                />

                {/*  Industrial Fitment Parameters  */}
                <div className="bg-slate-100 p-5 rounded-xl border border-slate-200">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">Target Environments:</h5>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Continuous Heavy Forklift Loading Bays
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> High-Moisture Chemical Packaging Plants
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> High-Speed Logistics Cross-Dock Centres
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </main>


    </div>
  );
}
