import SpecificationForm from '@/components/SpecificationForm';
import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function DoubleEndedShearBeamLoadCellPage() {
  return (
    <div className="pt-[72px] bg-slate-50 text-slate-800 antialiased min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#products" className="hover:text-amber-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Double Ended Shear Beam Cup & Ball Load Cell</span>
        </div>
      </div>



    <header className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_45%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Metrological Core Technology</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                Double-Ended Shear Beam Cup & Ball <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Load Cell</span>
            </h1>
            <p className="text-slate-400 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
                Experience zero-compromise accuracy with our premium high-capacity Double-Ended Shear Beam Cup & Ball Load Cells. Specifically built for high-tonnage heavy industrial applications, providing superior resistance against harsh side-thrust forces.
            </p>
        </div>
    </header>

    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-12">
            
            {/*  Section 1: Types of Double-Ended Shear Beam Cup & Ball Load Cells  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Types of Double-Ended Shear Beam Cup & Ball Load Cells</h2>
                    <p className="text-slate-500 text-sm mt-1">Choose between robust analog and precision digital double-ended load cells.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-chart-line text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Analog Load Cell</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            The analog load cell produces a very small millivolt (mV/V) signal proportional to the applied load.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-signal text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Digital Load Cell</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            The strain gauges generate an analog signal proportional to the applied load same as analog loadcell. An Analog-to-Digital (A/D) converter converts it into digital data. A microprocessor processes and transmits the digital value to the indicator.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Section 2: General Typical Specifications Table  */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="border-l-4 border-amber-500 pl-4 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">General Typical Specifications</h2>
                    <p className="text-slate-500 text-sm mt-1">Comparison of core physical and electrical properties between analog and digital variants.</p>
                </div>
                
                <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase">
                                <th className="p-4 rounded-tl-xl">Parameter</th>
                                <th className="p-4">Analog</th>
                                <th className="p-4 rounded-tr-xl">Digital</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
                            {[
                                { param: "Capacity", analog: "10, 20, 25, 30, 40, 50 t (model-dependent)", digital: "10, 20, 25, 30, 40, 50 t (model-dependent)" },
                                { param: "Material", analog: "Alloy Steel", digital: "Alloy Steel" },
                                { param: "Protection", analog: "IP68 / IP69K (varies by model)", digital: "IP68 / IP69K (varies by model)" },
                                { param: "Accuracy", analog: "High", digital: "Very High" },
                                { param: "Output", analog: "mV/V", digital: "Digital communication" },
                                { param: "Junction Box", analog: "Required", digital: "Usually used for communication and power distribution, not signal trimming" },
                                { param: "Corner Calibration", analog: "Manual", digital: "Often software-assisted" },
                                { param: "Cable Noise", analog: "More susceptible", digital: "Highly resistant" }
                            ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="p-4 font-bold text-slate-900">{row.param}</td>
                                    <td className="p-4 font-normal text-slate-600">{row.analog}</td>
                                    <td className="p-4 font-normal text-slate-600 bg-slate-50/50">{row.digital}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/*  Section 3: Analog vs Digital Comparison Table  */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="border-l-4 border-amber-500 pl-4 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Analog vs Digital Comparison</h2>
                    <p className="text-slate-500 text-sm mt-1">Key operational features contrasted for decision support.</p>
                </div>
                
                <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase">
                                <th className="p-4 rounded-tl-xl">Feature</th>
                                <th className="p-4">Analog</th>
                                <th className="p-4 rounded-tr-xl">Digital</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
                            {[
                                { feat: "Price", analog: "Lower", digital: "Higher" },
                                { feat: "Accuracy", analog: "Excellent", digital: "Excellent to very high" },
                                { feat: "Electrical Noise", analog: "More susceptible", digital: "Much better immunity" },
                                { feat: "Fault Detection", analog: "Manual", digital: "Automatic diagnostics on many systems" },
                                { feat: "Long Cable Performance", analog: "Moderate", digital: "Better" },
                                { feat: "Maintenance", analog: "Easy", digital: "Easier fault identification" }
                            ].map((row, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                                    <td className="p-4 font-bold text-slate-900">{row.feat}</td>
                                    <td className="p-4 font-normal text-slate-600">{row.analog}</td>
                                    <td className="p-4 font-normal text-slate-600 bg-slate-50/50">{row.digital}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>



        </div>

        <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
                
                <SpecificationForm
                  productName="Double Ended Shear Beam Cup & Ball Load Cell"
                  description="Connect with our electronic hardware engineers for detailed wiring schematics, mounting link drawings, and quotation details."
                  dropdownLabel="Target Device / Purpose"
                  dropdownOptions={["New Weighbridge Manufacturing", "Faulty Load Cell Replacement/Repair", "Heavy Hopper / Silo Scale Integration", "Industrial Automation Project"]}
                  textareaPlaceholder="Specify connection cable lengths, custom capacity variants, or indicator compatibility specs..."
                />

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
