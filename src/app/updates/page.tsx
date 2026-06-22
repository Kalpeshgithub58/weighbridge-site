import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function UpdatesPage() {
  return (
    <div className="pt-[72px] bg-slate-50 text-slate-800 antialiased min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Technical Updates</span>
        </div>
      </div>



    <header className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_45%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Engineering Intelligence Hub</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Updates & Insights</span>
            </h1>
            <p className="text-slate-400 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
                Comprehensive engineering logs, metrological compliance breakdowns, and hardware optimization protocols compiled by our process plant integration specialists.
            </p>
        </div>
    </header>

    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-16">
            
            <article className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                <div className="p-6 md:p-8 space-y-4">
                    <div className="flex items-center gap-3 text-xs font-semibold text-amber-600 uppercase tracking-wider">
                        <span><i className="fa-solid fa-industry"></i> Industrial Strategy</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-normal">Technical Log #01</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight hover:text-amber-600 transition-colors">
                        Why Indian Industries Need High-Quality Weighbridges
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        In rapid developing sectors like mining, cement, infrastructure, and heavy manufacturing across India, material tracking directly dictates commercial bottom lines. Substandard, non-rigid structural weighbridges deflect under repeated wheel cycling, causing silent calibration drops that leak thousands of kilograms over continuous monthly logistics blocks.
                    </p>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
                        <strong>Key Takeaway:</strong> Investing in heavy structural C-channel under-frames and high-thickness deck platings guarantees uniform weight vectors on load cells, ensuring precise government stamping compliance and absolute revenue security during massive 100-Ton cargo dispatches.
                    </div>
                </div>
            </article>

            <article className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                <div className="p-6 md:p-8 space-y-4">
                    <div className="flex items-center gap-3 text-xs font-semibold text-amber-600 uppercase tracking-wider">
                        <span><i className="fa-solid fa-microchip"></i> Transducer Technology</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-normal">Technical Log #02</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight hover:text-amber-600 transition-colors">
                        The Shift from Analogue to Smart Digital Load Cells
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Traditional analogue load cells stream delicate millivolt signals that are highly vulnerable to cable distance resistance, moisture ingress inside junction boxes, and external electromagnetic interference (EMI). Upgrading infrastructure to intelligent Digital Load Cells addresses these issues down to the source.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs text-slate-600">
                        <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <i className="fa-solid fa-circle-check text-emerald-600 mt-0.5"></i>
                            <span><strong>Internal A/D Conversion:</strong> Signals are converted directly into digital bits inside the stainless-steel hermetic load cell pod, completely removing signal drop over multi-meter tracking lines.</span>
                        </div>
                        <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i>
                            <span><strong>Anti-Tamper Protocol:</strong> Advanced encrypted digital strings block external data manipulation via illegal remote falsification modules, locking down transactional security.</span>
                        </div>
                    </div>
                </div>
            </article>

            <article className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                <div className="p-6 md:p-8 space-y-4">
                    <div className="flex items-center gap-3 text-xs font-semibold text-amber-600 uppercase tracking-wider">
                        <span><i className="fa-solid fa-bolt"></i> Circuit Protection</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-normal">Technical Log #03</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight hover:text-amber-600 transition-colors">
                        Designing 5-Wire RS-485 Surge Protection for Industrial Sensors
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Seasonal lightning surges and rapid high-voltage switching spikes in process plant grids can easily fry expensive electronic indicators and scale sensors. Implementing an absolute 5-wire layout configuration (including **VCC, GND, A, B, and a dedicated Shield wire**) isolates vulnerable digital networks.
                    </p>
                    <div className="bg-slate-900 text-slate-300 p-5 rounded-xl border border-slate-800 font-mono text-xs space-y-2">
                        <div className="text-amber-400 font-semibold mb-1">// Advanced Surge Arrestor Schematics</div>
                        <div>1. Gas Discharge Tubes (GDT) dump heavy high-voltage transients straight to earth links.</div>
                        <div>2. Transient Voltage Suppressor (TVS) diodes clamp micro-residual surges under 5V lines instantly.</div>
                        <div>3. High-integrity continuous copper shields eliminate electrostatic coupling on RS-485 arrays.</div>
                    </div>
                </div>
            </article>

            <article className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                <div className="p-6 md:p-8 space-y-4">
                    <div className="flex items-center gap-3 text-xs font-semibold text-amber-600 uppercase tracking-wider">
                        <span><i className="fa-solid fa-screwdriver-wrench"></i> Field Troubleshooting</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-normal">Technical Log #04</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight hover:text-amber-600 transition-colors">
                        Resolving Weighbridge Corner Errors & Structural Deflections
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        A frequent operational tracking challenge occurs when a scale shows consistent weights in the center but reveals severe discrepancies (e.g., up to a 1-Ton corner error when testing a massive 100-Ton capacity kanta with a 25-Ton test load). This is primarily driven by unequal resting posture on mechanical rocker-pins or uneven load cell resistance calibration settings.
                    </p>
                    <div className="bg-amber-500/5 border border-amber-500/20 p-4 rounded-xl text-xs md:text-sm text-slate-700 leading-relaxed">
                        <span className="font-bold text-slate-900 block mb-1"><i className="fa-solid fa-circle-exclamation text-amber-600 mr-1"></i>Systematic Diagnostics Routine:</span>
                        First, inspect for sub-deck structural obstructions or tight mechanical bumper-bolt spaces that restrict natural platform movement. Next, use a precision digital multimeter to track individual millivolt outputs across the junction box terminals, matching potentiometer balances to unify cell resistance lines.
                    </div>
                </div>
            </article>

            <article className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
                <div className="p-6 md:p-8 space-y-4">
                    <div className="flex items-center gap-3 text-xs font-semibold text-amber-600 uppercase tracking-wider">
                        <span><i className="fa-solid fa-cloud-arrow-up"></i> Automation & IoT</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-normal">Technical Log #05</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight hover:text-amber-600 transition-colors">
                        Unmanned Weighbridges & Cloud Enterprise ERP Integration
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        Modern industrial logistics facilities are removing human errors from weighbridge booths completely. Integrating intelligent multi-channel indicators with RFID card readers, automated positioning loop detectors, traffic barrier gates, and high-resolution optical character recognition (OCR) camera arrays enables continuous 24/7 unmanned terminal weighing operations.
                    </p>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                        Furthermore, weight logs are instantly synced into central cloud networks via secured APIs. This grants corporate stakeholders real-time visibility into raw material movements, inventory patterns, and supply chain timelines straight from custom mobile interfaces.
                    </p>
                </div>
            </article>

        </div>

        <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
                
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Consult with Our Engineers</h3>
                    <p className="text-xs text-slate-500 mb-6">Need assistance with micro-controller calibration setups, RS-485 circuit line tracking, or customized industrial automation blueprints?</p>
                    
                    <form action="#" method="POST" className="space-y-4">
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Company / Contact Name</label>
                            <input type="text" placeholder="Enter name" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" />
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Direct Contact Number</label>
                            <input type="tel" placeholder="+91 " required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all" />
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Target Interest Field</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-600 focus:outline-none focus:border-amber-500 focus:bg-white transition-all">
                                <option>Upgrading Analogue to Digital Cells</option>
                                <option>Surge Protection Circuit Engineering</option>
                                <option>Resolving System Corner Errors / Deflections</option>
                                <option>Unmanned Software ERP Integration</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Custom Notes</label>
                            <textarea rows={3} placeholder="Describe your industrial plant capacity, error patterns, or specific custom firmware requests..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold py-2.5 rounded-lg text-xs tracking-wider transition-colors shadow-xs cursor-pointer">
                            GET TECHNICAL ASSISTANCE <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i>
                        </button>
                    </form>
                </div>

                <div className="bg-slate-100 p-5 rounded-xl border border-slate-200">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">Resource Access Privileges:</h5>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-file-pdf text-amber-600"></i> Government Stamping Checklists
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-file-pdf text-amber-600"></i> 5-Wire PCB Shielding Manuals
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-file-pdf text-amber-600"></i> Unmanned Automation API Specs
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </main>


    </div>
  );
}
