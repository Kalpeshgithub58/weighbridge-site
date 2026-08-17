"use client";

import {
  ShieldCheck,
  Cpu,
  Smartphone,
  Server,
  Scale,
  FileCheck,
  Zap,
  RefreshCw,
  HeartHandshake,
  Wrench
} from "lucide-react";

export default function SoftwareAndServices() {
  const softwareFeatures = [
    {
      title: "Security & Theft Prevention",
      description: "Live camera photos, auto weight saving, and safe logins to make sure no one can cheat or change the weights.",
      icon: ShieldCheck,
    },
    {
      title: "Auto Weighing",
      description: "Connects with smart cards, boom barriers, and lights so trucks can weigh themselves without a man sitting there.",
      icon: Cpu,
    },
    {
      title: "SMS & WhatsApp Alerts",
      description: "Automatically sends weight slips via WhatsApp, SMS, and Email, plus gives you daily Excel reports.",
      icon: Smartphone,
    },
    {
      title: "Easy Software Linking",
      description: "Our software easily sends weight data directly to your company software like SAP, Tally, or Govt portals.",
      icon: Server,
    },
  ];

  const technicalServices = [
    {
      title: "Standard Dead-Weight Calibration",
      description: "We deploy heavy mobile test weights to perform precise multi-point linearity and hysteresis tests. Our structural corner-load mapping verifies that every single load cell channel streams uniform digital outputs.",
      icon: Scale,
    },
    {
      title: "Legal Metrology Stamping Liaison",
      description: "Avoid regulatory penalties and trading stops. Our team handles complete end-to-end documentation, scheduling, and physical testing synchronization with inspectors from the Legal Metrology Department.",
      icon: FileCheck,
    },
    {
      title: "Component PCB Repair",
      description: "Unlike typical dealers who push expensive unit replacements, we specialize in component-level troubleshooting for intelligent weight indicators, correcting analog-to-digital converter faults down to the PCB layer.",
      icon: Wrench,
    },
    {
      title: "Surge & Lightning Fixes",
      description: "Protect your electronic investments against severe seasonal lightning strikes. We design and install high-fidelity 5-wire RS-485 surge protection networks, incorporating gas discharge tubes and TVS diodes.",
      icon: Zap,
    },
    {
      title: "System Conversions",
      description: "Upgrade decaying, erratic mechanical weighing decks into ultra-stable digital architectures. We retrofit modern rocker-pin load cell chains and clean software arrays, saving up to 60% of new deck infrastructure costs.",
      icon: RefreshCw,
    },
    {
      title: "Annual Maintenance Contracts (AMC & CMC)",
      description: "Our plans include sub-deck flushing, girder deflection checks, and junction box terminal waterproofing, backed by a priority emergency field breakdown SLA to keep downtime to a minimum.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(29,78,216,0.12)_0%,_transparent_50%)]" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 bg-brand-blue/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-blue-300 text-sm font-semibold tracking-wide uppercase">Software & Technical Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            Connecting Heavy Machines with Smart Software & Services
          </h2>
          <p className="text-blue-100/80 text-base sm:text-lg leading-relaxed">
            We provide custom automation software to track weight logs, alongside certified on-field engineering calibration, stamping support, and fast maintenance.
          </p>
        </div>

        {/* Software Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
            <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg shadow-brand-blue/20">
              <Cpu className="w-5.5 h-5.5 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Unattended Auto Weighing & Software</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {softwareFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-blue-100/70 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Services Section */}
        <div>
          <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
            <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center shadow-lg shadow-brand-orange/20">
              <Wrench className="w-5.5 h-5.5 text-white" />
            </div>
            <h3 className="text-2xl font-bold">On-Field Calibration & Technical Maintenance</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-brand-orange/20 rounded-lg flex items-center justify-center shrink-0 mb-5">
                    <Icon className="w-6 h-6 text-orange-300" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{service.title}</h4>
                  <p className="text-blue-100/70 text-sm leading-relaxed flex-1">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
