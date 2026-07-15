import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function HopperSiloWeighingSystemPage() {
  return (
    <div className="pt-[72px] bg-slate-50 text-slate-800 antialiased min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#products" className="hover:text-amber-600 transition-colors">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900">Hopper Silo Weighing System</span>
        </div>
      </div>



    {/*  Premium Product Hero Banner  */}
    <header className="bg-slate-950 text-white py-16 px-4 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_45%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">Process Plant Automation</span>
            <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight leading-tight">
                Hopper & Silo <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Weighing System</span>
            </h1>
            <p className="text-slate-400 mt-4 text-base md:text-lg max-w-3xl leading-relaxed">
                Monitor and control the weight of materials stored in hoppers, silos, and storage tanks with high accuracy. Our weighing system provides real-time inventory monitoring, precise batching, and reliable process control without interrupting production.
            </p>
        </div>
    </header>

    {/*  Main Dynamic Layout  */}
    <main className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/*  Left & Center Content: Upgraded Technical Specifications  */}
        <div className="lg:col-span-2 space-y-12">
            
            {/*  Section 1: Mechanical Stability & Thermal Compensation  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Handles Thermal Expansion</h2>
                    <p className="text-slate-500 text-sm mt-1">Specialized mechanics tailored to counter chemical plant heat variations and wind forces.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-arrows-left-right text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Handles Thermal Expansion</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Specially designed mounting assemblies allow the hopper or silo to expand and contract naturally due to temperature changes while maintaining accurate weighing performance.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs hover:shadow-md transition-all">
                        <div className="w-11 h-11 bg-slate-100 rounded-lg flex items-center justify-center text-slate-700 mb-4">
                            <i className="fa-solid fa-shield-halved text-xl"></i>
                        </div>
                        <h3 className="font-bold text-lg text-slate-900 mb-2">Anti-Overturn Safety</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                            Built-in safety restraints and anti-lift mechanisms protect the hopper or silo from strong winds, vibrations, and sudden movement, ensuring safe and stable operation.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Section 2: Electronics & Process Controls Integration  */}
            <section className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Control & Monitoring Features</h2>
                    <p className="text-slate-500 text-sm mt-1">Industrial hardware communication protocols configured straight for SCADA systems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-microchip text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Multi-Channel Weighing</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Supports multiple load cells with advanced weighing indicators that continuously monitor each support point, ensuring balanced load distribution and accurate weight measurement.</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-terminal text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">PLC & SCADA Integration</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Supports 4–20 mA, 0–10 V, RS-485 (Modbus RTU) and other industrial communication protocols for easy integration with PLC, SCADA, and automation systems.</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs">
                        <div className="text-amber-500 text-xl font-bold mb-3"><i className="fa-solid fa-fill-drip text-xl"></i></div>
                        <h4 className="font-bold text-slate-900 mb-2 text-base">Automatic Batching Control</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">Programmable set points enable automatic operation of feeders, valves, and conveyors, improving batching accuracy and reducing material wastage.</p>
                    </div>
                </div>
            </section>

            {/*  Section 3: Value Added Capabilities  */}
            <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl shadow-sm border border-slate-800">
                <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight"><i className="fa-solid fa-gears text-amber-500 mr-2"></i>Core Operations</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> True Weight Measurement
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Unlike level sensors that can be affected by dust, foam, or material build-up, the system measures the actual weight of the material, providing reliable inventory information regardless of material type or density.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2 text-sm uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Easy Installation & Maintenance
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Pre-engineered mounting kits are compatible with Shear Beam and Compression Load Cells, making installation, calibration, and maintenance quick and convenient.
                        </p>
                    </div>
                </div>
            </section>

            {/*  Applications Section  */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                <div className="border-l-4 border-amber-500 pl-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Ideal Applications</h2>
                    <p className="text-slate-500 text-sm mt-1">Perfectly suited for various heavy industrial process and storage configurations.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        "Cement Plants", "Chemical Industries", "Food Processing Units", "Batching Plants",
                        "Grain Silos", "Storage Tanks", "Feed Mills", "Pharmaceutical Industries"
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

            {/*  Section 4: Version Configuration Table  */}
            <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="border-l-4 border-amber-500 pl-4 mb-6">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight">System Capacities & Hardware Layouts</h2>
                    <p className="text-slate-500 text-sm mt-1">Select the optimal structural kit format configured for your process silo baseline weights.</p>
                </div>
                
                <div className="overflow-x-auto rounded-xl border border-slate-200/80 shadow-xs">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase">
                                <th className="p-4 rounded-tl-xl">Target Tank Capacity</th>
                                <th className="p-4 text-center">Compatible Sensor Type</th>
                                <th className="p-4 text-center">System Resolution</th>
                                <th className="p-4 text-center">Mounting Kit Material</th>
                                <th className="p-4 text-center rounded-tr-xl">Ingress Protection</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700 bg-white">
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">0.5 Ton to 5 Ton</td>
                                <td className="p-4 text-center text-slate-600">Single-Ended / Shear Beam</td>
                                <td className="p-4 text-center text-slate-500">200g - 500g</td>
                                <td className="p-4 text-center text-slate-600">Plated Alloy Steel / Stainless Steel</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">IP67 / IP68</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">5 Ton to 30 Ton</td>
                                <td className="p-4 text-center text-slate-600">Double-Ended Shear Beam</td>
                                <td className="p-4 text-center text-slate-500">1kg - 2kg</td>
                                <td className="p-4 text-center text-slate-600">Heavy Duty Powder Coated MS Frame</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">Hermetic IP68</td>
                            </tr>
                            <tr className="hover:bg-slate-50/80 transition-colors">
                                <td className="p-4 font-bold text-slate-900">30 Ton to 200 Ton +</td>
                                <td className="p-4 text-center text-slate-600">High-Capacity Compression Column</td>
                                <td className="p-4 text-center text-slate-500">5kg - 10kg</td>
                                <td className="p-4 text-center text-slate-600">Ultra-Rigid Structural Tool Steel</td>
                                <td className="p-4 text-center text-slate-900 font-semibold bg-slate-50/50">Laser Welded IP69K</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                {/*  Fine Print Disclaimer Policy  */}
                <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400 italic">
                    <i className="fa-solid fa-circle-info text-amber-500/80"></i>
                    <span>System calibration can be handled via standard dead-weight methods or fluid material mass transfer simulations during commissioning loops.</span>
                </div>
            </section>

        </div>

        {/*  Right Sidebar: Conversion Mechanics  */}
        <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
                
                {/*  Advanced Lead Capture Widget  */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Request Technical Specification</h3>
                    <p className="text-xs text-slate-500 mb-6">Connect with our process integration engineers for mounting hardware profiles, PLC connectivity schematics, and pricing blueprints.</p>
                    
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
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Number of Supports (Legs)</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-600 focus:outline-none focus:border-amber-500 focus:bg-white transition-all">
                                <option>3 Leg Structural Base</option>
                                <option>4 Leg Structural Base</option>
                                <option>6 or Hanging/Suspended Hopper Profile</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase font-bold tracking-wider text-slate-500 mb-1">Material Details</label>
                            <textarea rows={3} placeholder="Specify stored product details (e.g., Cement, Hot Liquid Acid, Fine Powder Grains) and required PLC output strings..." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-slate-950 hover:bg-slate-900 text-white font-semibold py-2.5 rounded-lg text-xs tracking-wider transition-colors shadow-xs cursor-pointer">
                            SUBMIT ENGINEERING REQ <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i>
                        </button>
                    </form>
                </div>

                {/*  Industrial Fitment Parameters  */}
                <div className="bg-slate-100 p-5 rounded-xl border border-slate-200">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">Compatible Environments:</h5>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Concrete Batching Plant Silos
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Chemical Storage Tanks & Reactors
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-600">
                            <i className="fa-solid fa-circle-check text-emerald-600"></i> Bulk Food-Grain Powder Hoppers
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </main>


    </div>
  );
}
