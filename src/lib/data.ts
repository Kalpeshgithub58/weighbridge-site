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
    title: 'Table Top Weighing Scales',
    slug: 'table-top-weighing-scales',
    category: 'Industrial Scales',
    description: 'Accurate Table Top Scales | Fast Weighing for Shops and Industries.',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Speed up your shop billing and light packing work with our very fast and accurate Table Top weighing scales.',
    features: [],
    specifications: []
  },
  {
    title: 'Platform Weighing Scales',
    slug: 'platform-weighing-scales',
    category: 'Industrial Scales',
    description: 'Strong Industrial Platform Scales | Made for Rough Factory Use.',
    icon: Package,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Made especially for tough factory conditions, our platform scales give perfect accuracy even with heavy loading and rough handling.',
    features: [],
    specifications: []
  },
  {
    title: 'Hopper Silo Weighing System',
    slug: 'hopper-silo-weighing-system',
    category: 'Industrial Scales',
    description: 'Live Inventory & Mixing Automation for raw materials.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Turn any simple hopper, tank, or silo into a highly accurate digital scale for easy mixing and stock checking.',
    features: [],
    specifications: []
  },
  {
    title: 'Pitless Weighbridge',
    slug: 'pitless-weighbridge',
    category: 'Heavy Weighbridges',
    description: 'Above-ground weighbridge. Best for areas with high water levels or hard rocky ground.',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Make transport and installation very fast with our strong bolt-on Modular weighing systems.',
    features: [],
    specifications: []
  },
  {
    title: 'Lab and Jewellery Scales',
    slug: 'lab-and-jewellery-scales',
    category: 'Lab Scales',
    description: 'Highly Accurate Jewellery Balances | Perfect for Gold & Diamonds.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80',
    longDescription: 'Made for the toughest industrial work, our Compression Load Cells are the best choice for heavy weighbridges and huge storage silos.',
    features: [],
    specifications: []
  },
  {
    title: 'Double Ended Load Cell',
    slug: 'double-ended-load-cell',
    category: 'Load Cells',
    description: 'Accurate Double Ended Shear Beam Load Cells | For Medium and Heavy use.',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1555861496-0666c8981751?auto=format&fit=crop&w=800&q=80',
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
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Farming & Mandis",
    description: "Fast and exact weighing for grains and crops — perfect for busy APMC mandis.",
    icon: Wheat,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Building & Cement",
    description: "Strong weighing systems for raw materials, stones, and cement loading.",
    icon: HardHat,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mining & Stone Crushers",
    description: "Heavy-duty weighbridges made to easily handle dust, shocks, and non-stop work.",
    icon: Pickaxe,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Factories & Steel",
    description: "Check your incoming raw materials and outgoing products right at your factory gate.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Medicines & Labs",
    description: "Very highly accurate lab scales for checking chemical and medicine weights.",
    icon: Pill,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Shops & Trading",
    description: "Govt-approved commercial scales for shops, wholesale markets, and billing counters.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Scrap & Waste",
    description: "Heavy weighbridges for scrap metal, plastic waste, and recycling trades.",
    icon: Recycle,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
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
