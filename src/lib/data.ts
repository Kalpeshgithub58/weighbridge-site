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
    title: 'Pitless Weighbridge',
    slug: 'pitless-weighbridge',
    category: 'Heavy Weighbridges',
    description: 'Surface-mounted weighbridge ideal for areas with high water tables or rocky terrain.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Our Pitless Weighbridges are designed for surface mounting, eliminating the need for extensive civil foundation work...',
    features: ['No civil excavation required'],
    specifications: []
  },
  {
    title: 'Pit Type Weighbridge',
    slug: 'pit-type-weighbridge',
    category: 'Heavy Weighbridges',
    description: 'Flush-mounted weighbridge saving space and allowing easy vehicle turning.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Pit Type Weighbridges are installed flush with the ground level...',
    features: [],
    specifications: []
  },
  {
    title: 'Modular Weigh Bridge',
    slug: 'modular-weigh-bridge',
    category: 'Heavy Weighbridges',
    description: 'High-Performance Modular Weighbridge | Bolt-On Sectional Scales for easy global transport.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Streamline global transport and lightning-fast deployment with our precision bolt-on Modular weighing decks.',
    features: [],
    specifications: []
  },
  {
    title: 'Table Top Weighing Scales',
    slug: 'table-top-weighing-scales',
    category: 'Industrial Scales',
    description: 'Precision Commercial Table Top Scales | Rapid Retail & Industrial Weighing.',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Optimize your retail billing counters and light-industrial packaging lines with our ultra-fast Table Top weighing scales.',
    features: [],
    specifications: []
  },
  {
    title: 'Platform Weighing Scales',
    slug: 'platform-weighing-scales',
    category: 'Industrial Scales',
    description: 'Heavy-Duty Industrial Platform Scales | High-Impact Floor Weighing for harsh environments.',
    icon: Package,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Engineered specifically for unforgiving industrial environments, our high-impact platform scales provide unshakeable accuracy under heavy forklift loading, pallet-jack drops, and extreme warehouse temperatures.',
    features: [],
    specifications: []
  },
  {
    title: 'Hopper Silo Weighing System',
    slug: 'hopper-silo-weighing-system',
    category: 'Industrial Scales',
    description: 'Real-Time Inventory & Batching Automation for seamless raw material processing.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Transform any static hopper, tank, or silo into a high-precision digital scale.',
    features: [],
    specifications: []
  },
  {
    title: 'Lab and Jewellery Scales',
    slug: 'lab-and-jewellery-scales',
    category: 'Lab Scales',
    description: 'High-Precision Jewellery Balances | Milligram-Accurate Gold & Diamond Scales.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Our laboratory and jewellery balances deliver milligram-level precision.',
    features: [],
    specifications: []
  },
  {
    title: 'Compression Load Cell',
    slug: 'compression-load-cell',
    category: 'Load Cells',
    description: 'High-Capacity Compression Load Cells | Heavy-Duty Silo & Weighbridge Sensors.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Engineered for the most brutal industrial weighing applications, our canister/column type Compression Load Cells are the absolute gold standard for heavy-capacity weighbridges, massive bulk silos, and extreme-load testing machinery.',
    features: [],
    specifications: []
  },
  {
    title: 'Double Ended Load Cell',
    slug: 'double-ended-load-cell',
    category: 'Load Cells',
    description: 'Precision Double Ended Shear Beam Load Cells | Mid-to-Heavy Capacity Sensors.',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Engineered for high-stability multi-point weighing architectures. The Double Ended Shear Beam load cell is universally recognized as the workhorse of mid-to-heavy capacity industrial scales, offering superior resistance against side-loading and thermal expansion.',
    features: [],
    specifications: []
  },
  {
    title: 'Weigh Bridge CCTV Software',
    slug: 'weigh-bridge-cctv-software',
    category: 'Software',
    description: 'Intelligent CCTV & Boom Barrier Software | Automated Security & Anti-Theft Management.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1555861496-0666c8981751?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Transform your weighing operations into a fully secure, fraud-proof digital checkpoint. Our intelligent Weighbridge Management Software synchronizes live weight data with IP cameras, boom barriers, and ERP systems to completely eliminate operator manipulation and cargo theft.',
    features: [],
    specifications: []
  }
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
