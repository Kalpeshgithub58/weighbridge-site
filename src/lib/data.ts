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
    description: 'Above-ground weighbridge. Best for areas with high water levels or hard rocky ground.',
    icon: Truck,
    image: '/images/pitless_weighbridge.jpg',
    longDescription: 'Our Pitless Weighbridges are fitted above the ground, which means you do not need to dig a deep pit. Very easy to clean and maintain.',
    features: ['No deep digging required'],
    specifications: []
  },
  {
    title: 'Pit Type Weighbridge',
    slug: 'pit-type-weighbridge',
    category: 'Heavy Weighbridges',
    description: 'Ground-level weighbridge that saves space and allows easy truck turning.',
    icon: Truck,
    image: '/images/pit_type_weighbridge.jpg',
    longDescription: 'Pit Type Weighbridges are installed exactly at ground level. This is perfect if you have less space, as vehicles can easily drive over it from any side.',
    features: [],
    specifications: []
  },
  {
    title: 'Modular Weigh Bridge',
    slug: 'modular-weigh-bridge',
    category: 'Heavy Weighbridges',
    description: 'Strong Modular Weighbridge | Bolt-On sections for easy transport and fitting.',
    icon: Truck,
    image: '/images/modular_weighbridge.jpg',
    longDescription: 'Make transport and installation very fast with our strong bolt-on Modular weighing systems.',
    features: [],
    specifications: []
  },
  {
    title: 'Hopper Silo Weighing System',
    slug: 'hopper-silo-weighing-system',
    category: 'Commercial/Industrial Scales',
    description: 'Live Inventory & Mixing Automation for raw materials.',
    icon: Factory,
    image: '/images/hopper_silo.jpg',
    longDescription: 'Turn any simple hopper, tank, or silo into a highly accurate digital scale for easy mixing and stock checking.',
    features: [],
    specifications: []
  },
  {
    title: 'Table Top Weighing Scales',
    slug: 'table-top-weighing-scales',
    category: 'Commercial/Industrial Scales',
    description: 'Accurate Table Top Scales | Fast Weighing for Shops and Industries.',
    icon: ShoppingCart,
    image: '/images/table_top_scale.png',
    longDescription: 'Speed up your shop billing and light packing work with our very fast and accurate Table Top weighing scales.',
    features: [],
    specifications: []
  },
  {
    title: 'Platform Weighing Scales',
    slug: 'platform-weighing-scales',
    category: 'Commercial/Industrial Scales',
    description: 'Strong Industrial Platform Scales | Made for Rough Factory Use.',
    icon: Package,
    image: '/images/platform_scale.jpg',
    longDescription: 'Made especially for tough factory conditions, our platform scales give perfect accuracy even with heavy loading and rough handling.',
    features: [],
    specifications: []
  },
  /*
  {
    title: 'Crane Scale',
    slug: 'crane-scale',
    category: 'Commercial/Industrial Scales',
    description: 'Heavy-Duty Hanging Crane Scales | Safe and accurate lifting weights.',
    icon: Wrench,
    image: '/images/crane_scale.png',
    longDescription: 'Perfect for heavy industrial lifting and weighing at the same time. Strong, safe, and highly accurate crane scales for factories and warehouses.',
    features: [],
    specifications: []
  },
  */
  {
    title: 'Lab and Jewellery Scales',
    slug: 'lab-and-jewellery-scales',
    category: 'Lab Scales',
    description: 'Highly Accurate Jewellery Balances | Perfect for Gold & Diamonds.',
    icon: Activity,
    image: '/images/lab_scale.png',
    longDescription: 'Our laboratory and jewellery scales give perfect accuracy down to the milligram for highly valuable items.',
    features: [],
    specifications: []
  },
  {
    title: 'Compression Load Cell',
    slug: 'compression-load-cell',
    category: 'Load Cells',
    description: 'Heavy-Duty Compression Load Cells | Strong Sensors for Silos & Weighbridges.',
    icon: Wrench,
    image: '/images/compression_load_cell.jpg',
    longDescription: 'Made for the toughest industrial work, our Compression Load Cells are the best choice for heavy weighbridges and huge storage silos.',
    features: [],
    specifications: []
  },
  {
    title: 'Double Ended Shear Beam Load Cell',
    slug: 'double-ended-load-cell',
    category: 'Load Cells',
    description: 'Accurate Double Ended Shear Beam Load Cells | For Medium and Heavy use.',
    icon: Settings,
    image: '/images/double_ended_load_cell.jpg',
    longDescription: 'The Double Ended Shear Beam load cell is the most trusted sensor for heavy industrial scales because it handles side-shocks very well.',
    features: [],
    specifications: []
  },
  {
    title: 'Weigh Bridge CCTV Software',
    slug: 'weigh-bridge-cctv-software',
    category: 'Software',
    description: 'Smart CCTV & Boom Barrier Software | Stops Theft and Saves Time.',
    icon: ShieldCheck,
    image: '/images/weighbridge_software.jpg',
    longDescription: 'Make your weighing fully secure and fraud-proof. Our smart software connects the live weight with cameras and boom barriers to stop all cheating and theft.',
    features: [],
    specifications: []
  }
];

export const industries = [
  {
    title: "Logistics & Transport",
    description: "Weighbridges for trucks and heavy transport — built for daily rough use.",
    icon: Truck,
    image: "/images/logistics_transport.jpg",
  },
  {
    title: "Farming & Mandis",
    description: "Fast and exact weighing for grains and crops — perfect for busy APMC mandis.",
    icon: Wheat,
    image: "/images/farming_mandis.jpg",
  },
  {
    title: "Building & Cement",
    description: "Strong weighing systems for raw materials, stones, and cement loading.",
    icon: HardHat,
    image: "/images/building_cement.jpg",
  },
  {
    title: "Mining & Stone Crushers",
    description: "Heavy-duty weighbridges made to easily handle dust, shocks, and non-stop work.",
    icon: Pickaxe,
    image: "/images/mining_crushers.jpg",
  },
  {
    title: "Factories & Steel",
    description: "Check your incoming raw materials and outgoing products right at your factory gate.",
    icon: Factory,
    image: "/images/factories_steel.jpg",
  },
  {
    title: "Medicines & Labs",
    description: "Very highly accurate lab scales for checking chemical and medicine weights.",
    icon: Pill,
    image: "/images/medicines_labs.jpg",
  },
  {
    title: "Shops & Trading",
    description: "Govt-approved commercial scales for shops, wholesale markets, and billing counters.",
    icon: ShoppingCart,
    image: "/images/shops_trading.jpg",
  },
  {
    title: "Godowns & Warehouses",
    description: "Platform scales for checking goods, dispatch, and pallet weighing.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Food Packing",
    description: "Clean and exact scales for food items and packaged goods checking.",
    icon: Utensils,
    image: "/images/food_packing.jpg",
  },
  {
    title: "Scrap & Waste",
    description: "Heavy weighbridges for scrap metal, plastic waste, and recycling trades.",
    icon: Recycle,
    image: "/images/scrap_waste.jpg",
  },
];

export const softwareFeatures = [
  {
    title: "Security & Stops Theft",
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

export const technicalServices = [
  {
    title: "Deep Hardware Repair",
    description: "Unlike others who only change whole boards, we find and fix the exact small parts on the circuit board. We repair motherboards and displays in-house.",
    icon: Settings,
  },
  {
    title: "Perfect On-Site Checking",
    description: "We do exact checking and stamping (calibration) for all scales and big weighbridges at your site to follow all Govt rules.",
    icon: Activity,
  },
  {
    title: "Fast Problem Solving",
    description: "Quick and correct checking for wire cuts, load cell errors, and complex junction box problems.",
    icon: Wrench,
  },
  {
    title: "Yearly Service (AMC)",
    description: "Regular checking and maintenance plans to fix small problems before they become big, saving your time and money.",
    icon: ShieldCheck,
  },
];

export const coreValues = [
  {
    title: "Perfect Accuracy",
    description: "We know that every gram and every ton means money for your business.",
  },
  {
    title: "Trust & Honesty",
    description: "Clear deals, long-lasting products, and a promise to support you for years.",
  },
  {
    title: "Service Comes First",
    description: "Selling a scale is just the start; our real power is in our fast and expert after-sales service.",
  },
];

export const technicalExpertise = [
  {
    title: "Strong Technical Knowledge",
    description: "We don't just sell scales; we know exactly how they are made. With deep experience in repairing boards and load cells, we solve problems fast.",
  },
  {
    title: "Heavy Industry Experience",
    description: "From doing big calibrations at factories to fixing tough wire problems in heavy machines, we have real experience solving the hardest issues.",
  },
  {
    title: "Best After-Sales Support",
    description: "Normal dealers rely on outside mechanics. We bring direct company-level service to you, making sure your machine never stops working.",
  },
  {
    title: "Modern Tech Ready",
    description: "We always use the newest technology, moving from old systems to new digital load cells and smart mobile software.",
  },
];

export const links = {
  phone: "+919876543210",
  whatsapp: "https://wa.me/919876543210",
  email: "sales@aveerascales.com",
};
