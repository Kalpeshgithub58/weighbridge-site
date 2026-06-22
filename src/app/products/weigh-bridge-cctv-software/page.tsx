import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function WeighBridgeCctvSoftwarePage() {
  return (
    <div className="pt-[72px] bg-slate-50 text-slate-800 antialiased min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#products" className="hover:text-amber-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Weigh Bridge CCTV Software</span>
        </div>
      </div>



    {/*  Premium Product Hero Banner  */}
    <header className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_45%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Industrial Automation & Intelligence</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                Data Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Software</span>
            </h1>
            <p className="text-slate-400 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
                Transform raw weights into actionable business intelligence. Our multi-platform weighing ERP software drives absolute data security, real-time sync, and anti-theft automation down to your production control layer.
            </p>
        </div>
    </header>

    {/*  Main Dynamic Layout  */}
    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/*  Left & Center Content: Advanced Software Subsystems  */}
        <div className="lg:col-span-2 space-y-12">
            
            {/*  Section 1: Security & Anti-Theft Features  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Malpractice Protection & Security Protocols</h2>
                    <p className="text-slate-500 text-sm mt-1">Zero-compromise automated loops designed to block manual data alteration completely.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/*  Feature 1  */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-video text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Dual-Stage CCTV Snapshot Loop</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Automatically triggers front and rear IP network cameras the exact millisecond a weight stabilizes. The live snapshots of the vehicle and license plate are permanently bound with the transaction slip in the relational database, making audit trails unalterable.
                        </p>
                    </div>

                    {/*  Feature 2  */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-ban text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">IR Positioning Sensor Barrier</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Interfaces directly with hardware infrared (IR) beam barriers at both ends of the platform deck. The software actively blocks weight ticket logging if a vehicle is standing off-center, halting fraudulent structural positioning scams instantly.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Section 2: Core Hardware & ERP Integration Architecture  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Direct Hardware Interfacing & Cloud Sync</h2>
                    <p className="text-slate-500 text-sm mt-1">Robust serial data parsing engines mapped straight to enterprise accounting clusters.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/*  Feature 3  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-plug text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Direct Serial Parsing</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Continuous background listener threads capture indicator strings via RS-232 / RS-485 serial communication, blocking manual keyboard entry hacks completely.</p>
                    </div>

                    {/*  Feature 4  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-network-wired text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Native ERP Webhooks</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Equipped with standard API gateways to push finalized weighment matrices directly to SAP, Oracle, Microsoft Dynamics, or customized database server arrays.</p>
                    </div>

                    {/*  Feature 5  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-cloud-arrow-up text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Automatic Cloud Sync</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Maintains an isolated offline transactional cache at the local cabin PC, auto-merging secure logs with a cloud web dashboard as soon as network data links restore.</p>
                    </div>
                </div>
            </section>

            {/*  Section 3: Value Added Capabilities  */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-sm border border-slate-800">
                <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight"><i className="fa-solid fa-sliders text-amber-500 mr-2"></i>Operational Reporting & Notification Matrix</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Automated SMS & WhatsApp Alerts
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Dispatches direct transaction telemetry (Net Weight, Supplier Name, Vehicle Number) to owners and material managers the second the truck leaves the deck, ensuring complete multi-location transparency.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Dynamic Filter Generation
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Generate detailed material metrics, supplier logs, and vehicle performance audits over customizable chronological indices. Export multi-format spreadsheets or PDF reports inside a single click.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Section 4: Software Compatibility & Feature Matrix Table  */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="border-l-4 border-amber-500 pl-4 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">System Versions & Architectural Modules</h2>
                    <p className="text-slate-500 text-sm mt-1">Choose the optimal software suite depth matching your operational facility configuration.</p>
                </div>
                
                <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase">
                                <th className="p-4 rounded-tl-xl">Software Edition</th>
                                <th className="p-4 text-center">Database Type</th>
                                <th className="p-4 text-center">CCTV / IR Integration</th>
                                <th className="p-4 text-center">ERP / API Push</th>
                                <th className="p-4 text-center rounded-tr-xl">Target Application</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">Standard Desk-Lite</td>
                                <td className="p-4 text-center text-slate-600">Local SQLite / Access</td>
                                <td className="p-4 text-center text-rose-500"><i className="fa-solid fa-circle-xmark"></i> Not Supported</td>
                                <td className="p-4 text-center text-slate-500">Manual Excel Export</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">Retail / Single Scales</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">Pro-Secure Secure</td>
                                <td className="p-4 text-center text-slate-600">Local MySQL Server</td>
                                <td className="p-4 text-center text-emerald-600"><i className="fa-solid fa-circle-check"></i> Dual Camera Loop</td>
                                <td className="p-4 text-center text-slate-500">Local ODBC Linking</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">Mandi / Regular Plants</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">Enterprise Cloud Connect</td>
                                <td className="p-4 text-center text-slate-600">MS SQL / PostgreSQL</td>
                                <td className="p-4 text-center text-emerald-600"><i className="fa-solid fa-circle-check"></i> 4-Cam + IR Barriers</td>
                                <td className="p-4 text-center text-emerald-600"><i className="fa-solid fa-circle-check"></i> Native Live JSON API</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">Multi-Yard Cement / Mines</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                {/*  Fine Print Disclaimer Policy  */}
                <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400 italic">
                    <i className="fa-solid fa-circle-info text-amber-500/80"></i>
                    <span>System builds support Windows 10/11 platforms and interface with all leading intelligent indicators via custom hardware protocol parameters.</span>
                </div>
            </section>

        </div>

        {/*  Right Sidebar: Conversion Mechanics  */}
        <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
                
                {/*  Advanced Lead Capture Widget  */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Request Software Demo</h3>
                    <p className="text-xs text-slate-500 mb-6">Connect with our automation engineers for a remote software screen demo, custom system architectures, and pricing models.</p>
                    
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
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Existing Indicator Brand</label>
                            <input type="text" placeholder="e.g. Avery, Matrix, Custom Microcontroller" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" />
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Automation Requirements</label>
                            <textarea rows={3} placeholder="Specify third-party ERP names, local accounting systems, or requested number of linked camera feeds..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold py-2.5 rounded-lg text-xs tracking-wider transition-colors shadow-xs cursor-pointer">
                            REQUEST LIVE DEMO <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i>
                        </button>
                    </form>
                </div>

                {/*  Industrial Fitment Parameters  */}
                <div className="bg-slate-100 p-5 rounded-xl border border-slate-200">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">System Features:</h5>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Secure Tamper-Proof Log Audits
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Seamless RS-232 Indicator Parsing
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Multi-Scale Cloud Dashboard Sync
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </main>


    </div>
  );
}
