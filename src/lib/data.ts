import {
  Scale,
  Truck,
  HardHat,
  Wheat,
  Factory,
  Pill,
  ShoppingCart,
  Package,
  Utensils,
  Recycle,
  ShieldCheck,
  Cpu,
  Smartphone,
  Server,
  Wrench,
  Activity,
  ThumbsUp,
  Settings,
  Users,
  Pickaxe
} from "lucide-react";

export const products = [
  {
    title: "Pitless Weighbridge",
    slug: "pitless-weighbridge",
    description: "Surface-mounted weighbridge ideal for areas with high water tables or rocky terrain.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    longDescription: "Our Pitless Weighbridges are designed for surface mounting, eliminating the need for extensive civil foundation work. They are the perfect solution for sites where excavation is difficult, such as rocky terrains or areas with high water tables. Because they are elevated, they offer excellent natural ventilation, easy maintenance access, and no waterlogging issues.",
    features: [
      "No civil excavation required, saving time and cost.",
      "Elevated design prevents water accumulation and rusting.",
      "Easy access to load cells and junction boxes for maintenance.",
      "Quick installation and easy to relocate if required.",
    ],
    specifications: [
      { label: "Capacity", value: "10 Ton to 150 Ton" },
      { label: "Platform Size", value: "7.5m x 3m up to 24m x 3m" },
      { label: "Structure", value: "Heavy-duty I-Beam / U-Beam steel" },
      { label: "Platform", value: "Anti-skid chequered steel plate" },
    ]
  },
  {
    title: "Pit Type Weighbridge",
    slug: "pit-type-weighbridge",
    description: "Flush-mounted weighbridge saving space and allowing easy vehicle turning.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80",
    longDescription: "Pit Type Weighbridges are installed flush with the ground level. This design is highly recommended for locations with space constraints, as vehicles can approach the platform from any direction. The flat surface ensures that the weighbridge does not obstruct the flow of traffic in busy industrial environments.",
    features: [
      "Flush with ground level for smooth, multi-directional vehicle access.",
      "Requires minimal approach ramp space.",
      "Ideal for congested industrial sites and tight layouts.",
      "Highly stable and aesthetically seamless with the road.",
    ],
    specifications: [
      { label: "Capacity", value: "10 Ton to 150 Ton" },
      { label: "Platform Size", value: "7.5m x 3m up to 18m x 3m" },
      { label: "Structure", value: "Robust steel girders with RCC foundation" },
      { label: "Clearance", value: "Zero surface obstruction" },
    ]
  },
  {
    title: "Automatic Unmanned Weighbridge",
    slug: "automatic-weighbridge",
    description: "Operator-free weighing integrated with RFID, boom barriers, CCTV, and traffic lights.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    longDescription: "The Automatic Unmanned Weighbridge system modernizes your logistics by eliminating the need for a manual operator. Vehicles are identified via RFID tags, guided by automated traffic lights, and secured by boom barriers. Live CCTV captures imagery during weight capture, sending data instantly to your ERP systems—preventing theft and ensuring 100% accuracy.",
    features: [
      "24/7 operator-free weighing operations.",
      "Integrated CCTV for live image capturing during weighing.",
      "RFID card reading for fast vehicle identification.",
      "Automated Boom Barriers and Traffic Lights for queue management.",
    ],
    specifications: [
      { label: "Integration", value: "SAP, Oracle, Tally, Custom ERP" },
      { label: "Sensors", value: "Infrared Vehicle Positioning Sensors" },
      { label: "Security", value: "Anti-theft photo-logging system" },
      { label: "Operation", value: "Fully unmanned / Semi-manned switchable" },
    ]
  },
  {
    title: "Industrial & Commercial Scales",
    slug: "industrial-commercial-scales",
    description: "Table Top, Platform Scale, retail counterscale, billing and pos scale, bench scales.",
    icon: Scale,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    longDescription: "From heavy-duty floor scales for warehouses to compact bench scales for retail billing, our commercial weighing solutions are engineered for durability and precise measurements. Built with high-quality stainless steel and advanced digital indicators, they ensure your daily trading is accurate and legally compliant.",
    features: [
      "High-accuracy digital indicators with bright LED/LCD displays.",
      "Rugged construction for harsh industrial environments.",
      "Legal-for-trade approved for commercial billing.",
      "Battery backup functionality for uninterrupted operation.",
    ],
    specifications: [
      { label: "Capacity Range", value: "10kg up to 5 Ton" },
      { label: "Material", value: "Mild Steel / Stainless Steel (SS304)" },
      { label: "Display", value: "Pole-mounted or separate indicator" },
      { label: "Connectivity", value: "RS-232 / USB for PC and Printer integration" },
    ]
  },
  {
    title: "Lab and Jewellery Scales",
    slug: "lab-jewellery-scales",
    description: "High-precision balances for formulation, quality control, and retail jewelry.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
    longDescription: "Our laboratory and jewellery balances deliver milligram-level precision. Whether you are formulating critical pharmaceutical batches or weighing precious metals in a retail showroom, these balances offer draft-shield protection, electromagnetic force compensation, and lightning-fast stabilization times.",
    features: [
      "Sub-milligram precision for exact measurements.",
      "Enclosed glass draft shields to prevent air-current interference.",
      "Built-in internal calibration mechanisms.",
      "Unit conversion (grams, carats, ounces, etc.) and piece counting.",
    ],
    specifications: [
      { label: "Readability", value: "0.1mg (0.0001g) to 1mg" },
      { label: "Capacity", value: "50g to 1000g" },
      { label: "Technology", value: "Electromagnetic Force Restoration" },
      { label: "Windshield", value: "3-door sliding glass" },
    ]
  },
];

export const industries = [
  {
    title: "Logistics & Transportation",
    description: "Weighbridges for trucks, fleet management, and freight billing — built for high-volume, daily operations.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Agriculture & Mandis",
    description: "Fast, accurate weighing for grain, produce, and commodity trade — designed for high-traffic mandi environments.",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Construction & Cement",
    description: "Heavy-duty weighing for raw materials, aggregates, and bulk cement dispatch.",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mining & Quarries",
    description: "Rugged weighbridges built to handle dust, vibration, and continuous heavy loads.",
    icon: Pickaxe,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Manufacturing & Steel",
    description: "Inbound raw material checks and outbound finished goods weighing — integrated with your production line.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pharmaceuticals",
    description: "Precision lab balances for formulation, quality control, and regulatory compliance.",
    icon: Pill,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Retail & Trade",
    description: "Legal-for-trade commercial scales for shops, wholesalers, and billing counters.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Warehousing & Logistics Hubs",
    description: "Platform and floor scales for inventory checks, dispatch, and pallet weighing.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Food Processing",
    description: "Hygienic, accurate scales for raw material intake and packaged goods verification.",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Recycling & Scrap",
    description: "Heavy-capacity weighbridges for scrap metal, waste, and recyclable material trade.",
    icon: Recycle,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
  },
];

export const softwareFeatures = [
  {
    title: "Security & Anti-Theft",
    description: "Live CCTV image capture, automatic weight logging, and secure operator logins to prevent tampering and ensure every vehicle is recorded.",
    icon: ShieldCheck,
  },
  {
    title: "Unmanned Automation",
    description: "Integration with RFID card readers, boom barriers, and traffic lights for fast, operator-free weighing operations.",
    icon: Cpu,
  },
  {
    title: "Smart Alerts & Reporting",
    description: "Automated ticket dispatch via WhatsApp, SMS, and Email, along with customizable daily or monthly Excel export reports.",
    icon: Smartphone,
  },
  {
    title: "Seamless ERP Integration",
    description: "Ready-to-connect software architectures that push weighing data directly into SAP, Oracle, and government portals (eNAM, FCI).",
    icon: Server,
  },
];

export const technicalServices = [
  {
    title: "Component-Level Hardware Repair",
    description: "Unlike standard dealers who only replace entire boards, we diagnose and repair faults down to the micro-component and circuit level. We handle motherboards, segment displays, and multi-PCB intelligent terminals in-house.",
    icon: Settings,
  },
  {
    title: "Precision On-Site Calibration",
    description: "Executing rigorous on-site calibration for all scales and heavy weighbridges to ensure strict accuracy and legal metrology compliance.",
    icon: Activity,
  },
  {
    title: "Advanced Troubleshooting",
    description: "Rapid, accurate diagnostics for communication drops, analog and digital load cell errors, and complex junction box balancing (handling up to 8 load cells).",
    icon: Wrench,
  },
  {
    title: "Comprehensive AMC",
    description: "Proactive, scheduled maintenance plans designed to identify wear and tear before it causes a breakdown, ensuring near-zero downtime for your business.",
    icon: ShieldCheck,
  },
];

export const coreValues = [
  {
    title: "Absolute Precision",
    description: "We understand that every milligram and every ton translates to your business's bottom line.",
  },
  {
    title: "Reliability & Trust",
    description: "Transparent dealings, high-quality products, and a commitment to long-term partnerships.",
  },
  {
    title: "Service-First Approach",
    description: "Selling a scale is just the beginning; our true strength lies in our rapid, expert after-sales support.",
  },
];

export const technicalExpertise = [
  {
    title: "Manufacturing & R&D DNA",
    description: "Our team doesn’t just understand how to operate a weighing scale; we understand how it is built. With extensive experience in designing hardware architectures, developing intelligent terminals, and optimizing junction PCBs (up to 8 load cells), we know weighing technology down to the circuit level.",
  },
  {
    title: "Industrial-Grade Troubleshooting",
    description: "From executing high-stake, on-site calibrations at mega-refineries to troubleshooting complex multi-PCB networks in heavy machinery, we have hands-on experience in solving the toughest technical challenges.",
  },
  {
    title: "Unmatched After-Sales Support",
    description: "Standard dealers rely on third-party technicians. We bring OEM-level (Original Equipment Manufacturer) service capabilities directly to you. Our background in training service engineers ensures that your equipment faces near-zero downtime.",
  },
  {
    title: "Future-Ready Solutions",
    description: "We continuously evolve with technology, moving from traditional mechanical/analog systems to advanced digital load cells and modern Android-based intelligent weighing software integrations.",
  },
];

export const links = {
  phone: "+919876543210",
  whatsapp: "https://wa.me/919876543210",
  email: "sales@aveerascales.com",
};
