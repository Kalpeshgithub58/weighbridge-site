import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="pt-[72px] bg-slate-50 text-slate-800 antialiased min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Services & Maintenance</span>
        </div>
      </div>



    {/*  Premium Product Hero Banner  */}
    <header className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_45%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">24/7 Field Support SLA</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Services & Support</span>
            </h1>
            <p className="text-slate-400 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
                Minimize terminal downtime and secure metrological compliance. From component-level micro-PCB tracking to heavy structural realignment and official stamp verifications, our certified field engineers ensure operational baseline continuity.
            </p>
        </div>
    </header>

    {/*  Main Dynamic Layout  */}
    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/*  Left & Center Content: Advanced Technical Services Modules  */}
        <div className="lg:col-span-2 space-y-12">
            
            {/*  Section 1: Core Calibration & Certification  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Metrological Calibration & Legal Verifications</h2>
                    <p className="text-slate-500 text-sm mt-1">Certified tracing processes to keep your heavy commercial scales legally verified and error-free.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/*  Service 1  */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-scale-balanced text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Standard Dead-Weight Calibration</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            We deploy heavy mobile test weights to perform precise multi-point linearity and hysteresis tests. Our structural corner-load mapping verifies that every single load cell channel streams uniform digital outputs, removing corner error discrepancies over massive 100-Ton baselines.
                        </p>
                    </div>

                    {/*  Service 2  */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-passport text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Legal Metrology Stamping Liaison</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Avoid regulatory penalties and trading stops. Our team handles complete end-to-end documentation, scheduling, and physical testing synchronization with inspectors from the Legal Metrology Department to secure active annual re-stamping certifications smoothly.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Section 2: Electronics & Mechanical Troubleshooting  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Hardware Troubleshooting & Structural Retrofitting</h2>
                    <p className="text-slate-500 text-sm mt-1">Deep diagnostics from component-level circuit level checks to total mechanical structure shifts.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/*  Service 3  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-microchip text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Component PCB Repair</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Unlike typical dealers who push expensive unit replacements, we specialize in component-level troubleshooting for intelligent weight indicators, correcting analog-to-digital converter faults down to the PCB layer.</p>
                    </div>

                    {/*  Service 4  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-bolt-lightning text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Surge & Lightning Fixes</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Protect your electronic investments against severe seasonal lightning strikes. We design and install high-fidelity 5-wire RS-485 surge protection networks, incorporating gas discharge tubes and TVS diodes.</p>
                    </div>

                    {/*  Service 5  */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-arrows-spin text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">System Conversions</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Upgrade decaying, erratic mechanical weighing decks into ultra-stable digital architectures. We retrofit modern rocker-pin load cell chains and clean software arrays, saving up to 60% of new deck infrastructure costs.</p>
                    </div>
                </div>
            </section>

            {/*  Section 3: Value Added SLA Capabilities  */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-sm border border-slate-800">
                <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight"><i className="fa-solid fa-handshake-angle text-amber-500 mr-2"></i>Annual Maintenance Contracts (AMC & CMC)</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Planned Preventive Operations
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Our systematic maintenance plans include full sub-deck pit mud flushing, structural girder deflection inspections, bumper clearance adjustments, and junction box terminal waterproofing. This prevents minor wear from ballooning into catastrophic system failures.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Priority Emergency Field Breakdown SLA
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            When a factory terminal breaks down, logistics stall completely. Our strategic placement allows mobile technical teams to deploy to your site with direct baseline test tools quickly, keeping commercial tracking downtime at a minimum.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Section 4: Service Matrix Plan Table  */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="border-l-4 border-amber-500 pl-4 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Structured Maintenance Service Tier Matrices</h2>
                    <p className="text-slate-500 text-sm mt-1">Select the ideal support tier scope to maintain continuous verification precision across your facility.</p>
                </div>
                
                <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase">
                                <th className="p-4 rounded-tl-xl">Service Level Tier</th>
                                <th className="p-4 text-center">Scheduled Visits</th>
                                <th className="p-4 text-center">Breakdown Response SLA</th>
                                <th className="p-4 text-center">Electronics/PCB Warranty</th>
                                <th className="p-4 text-center rounded-tr-xl">Target Infrastructure</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">Standard Preventive AMC</td>
                                <td className="p-4 text-center text-slate-600">4 Quarterly Visits / Year</td>
                                <td className="p-4 text-center text-slate-500">Within 24 Hours</td>
                                <td className="p-4 text-center text-rose-500"><i className="fa-solid fa-circle-xmark"></i> Excluded (Charged Extra)</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">Retail / Commercial Scales</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">Comprehensive Premium CMC</td>
                                <td className="p-4 text-center text-slate-600">6 Visits + Emergency Logs</td>
                                <td className="p-4 text-center text-emerald-600 font-bold">Priority Within 12 Hours</td>
                                <td className="p-4 text-center text-emerald-600"><i className="fa-solid fa-circle-check"></i> 100% Inclusions Included</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">Mandi / Regular Plant Kantas</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">Enterprise High-Frequency SLA</td>
                                <td className="p-4 text-center text-slate-600">Monthly Audits + Calibration</td>
                                <td className="p-4 text-center text-emerald-600 font-bold">Dedicated Under 4 Hours</td>
                                <td className="p-4 text-center text-emerald-600"><i className="fa-solid fa-circle-check"></i> 100% Inclusions + Hot Standbys</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">Continuous Cement, Mines, Ports</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                {/*  Fine Print Disclaimer Policy  */}
                <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400 italic">
                    <i className="fa-solid fa-circle-info text-amber-500/80"></i>
                    <span>Official government inspection staking fees are governed by state rules and handled on actual ledger bills during validation loops.</span>
                </div>
            </section>

        </div>

        {/*  Right Sidebar: Service Request Lead Intake  */}
        <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
                
                {/*  Advanced Lead Capture Widget  */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Book Emergency Service</h3>
                    <p className="text-xs text-slate-500 mb-6">Filing an urgent breakdown log routes details immediately to our active on-field calibration technicians.</p>
                    
                    <form action="#" method="POST" className="space-y-4">
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Company / Facility Name</label>
                            <input type="text" placeholder="Enter factory/plant name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" />
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Direct Contact Number</label>
                            <input type="tel" placeholder="+91 " required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" />
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Requested Service Type</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-600 focus:outline-none focus:border-amber-500 focus:bg-white transition-all">
                                <option>Urgent Breakdown / Error Diagnostics</option>
                                <option>Standard Weight Calibration Testing</option>
                                <option>Legal Metrology Annual Stamping Verification</option>
                                <option>AMC / CMC Contract Inquiries</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Fault Description / System Notes</label>
                            <textarea rows={3} placeholder="Specify error codes (e.g., erratic weight fluctuations, corner weight differences, dead terminal display) or structural size baseline details..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold py-2.5 rounded-lg text-xs tracking-wider transition-colors shadow-xs cursor-pointer">
                            LOG SERVICE TICKETS <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i>
                        </button>
                    </form>
                </div>

                {/*  Industrial Fitment Parameters  */}
                <div className="bg-slate-100 p-5 rounded-xl border border-slate-200">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">Service Guarantees:</h5>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Government Traceable Heavy Test Weights
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Fully Certified Metrology Engineers
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Authentic Component-Level Spare Stocks
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </main>


    </div>
  );
}
