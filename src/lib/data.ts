import {
  Scale,
  Clock,
  MapPin,
  Receipt,
  Truck,
  Calculator,
  HardHat,
  Wheat,
  Factory,
  Users,
  ShieldCheck,
  ScanLine,
  ArrowRightLeft,
  Handshake,
} from "lucide-react";

export const quickInfoCards = [
  {
    icon: Scale,
    label: "Capacity",
    value: "100 Ton",
    description: "Electronic weighbridge",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Open 24×7",
    description: "Day and night service",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Near Highway",
    description: "Easy truck access",
  },
  {
    icon: Receipt,
    label: "Slip",
    value: "Printed Receipt",
    description: "Weight slip every time",
  },
];

export const services = [
  {
    icon: Truck,
    title: "Truck Weighing",
    description:
      "Accurate weighing for loaded and empty commercial vehicles.",
  },
  {
    icon: Calculator,
    title: "Material Weight",
    description:
      "Calculate net material weight using gross and tare weight.",
  },
  {
    icon: HardHat,
    title: "Construction Material",
    description:
      "Suitable for sand, stone, gravel, cement and crusher loads.",
  },
  {
    icon: Wheat,
    title: "Agriculture Goods",
    description:
      "Weigh tractors, goods vehicles and farm produce loads.",
  },
  {
    icon: Factory,
    title: "Scrap & Industrial",
    description:
      "Reliable weighing support for scrap dealers and factories.",
  },
  {
    icon: Users,
    title: "Monthly Customers",
    description:
      "Regular support for transporters and local businesses.",
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Vehicle Arrives",
    description: "Vehicle arrives at the weighbridge platform",
  },
  {
    step: 2,
    title: "Weight Measured",
    description: "Loaded or empty weight is measured electronically",
  },
  {
    step: 3,
    title: "Net Weight Calculated",
    description: "Net material weight is calculated from gross and tare",
  },
  {
    step: 4,
    title: "Slip Printed",
    description: "Printed weight slip is given instantly",
  },
];

export const capacityBullets = [
  "100 Ton electronic weighbridge capacity",
  "Suitable for trucks, tractors, trailers and dumpers",
  "Printed weight receipt after every weighing",
  "Easy entry and exit for heavy vehicles",
];

export const trustCards = [
  {
    icon: ScanLine,
    title: "Accurate Electronic Weighing",
    description: "Precision digital load cells for exact readings",
  },
  {
    icon: ShieldCheck,
    title: "Certified / Calibrated Machine",
    description: "Regularly calibrated and government certified",
  },
  {
    icon: ArrowRightLeft,
    title: "Easy Truck Entry & Exit",
    description: "Wide ramp with smooth approach road",
  },
  {
    icon: Handshake,
    title: "Trusted by Local Transporters",
    description: "Serving the local transport community for years",
  },
];

export const galleryItems = [
  {
    title: "Weighbridge Platform",
    description: "Heavy-duty steel platform built for commercial vehicles",
    image: "/weighbridge-site/images/platform.png",
  },
  {
    title: "Truck Weighing",
    description: "Daily operations with loaded commercial trucks",
    image: "/weighbridge-site/images/truck.png",
  },
  {
    title: "Operator Cabin",
    description: "Digital display and receipt printer setup",
    image: "/weighbridge-site/images/cabin.png",
  },
];

export const faqs = [
  {
    question: "What is your weighbridge capacity?",
    answer:
      "Our electronic weighbridge has a capacity of 100 Tons, suitable for all types of commercial vehicles including trucks, trailers, tractors and dumpers.",
  },
  {
    question: "Do you provide a printed weight slip?",
    answer:
      "Yes, we provide a printed weight receipt after every weighing that includes gross weight, tare weight, net weight, date, time and vehicle number.",
  },
  {
    question: "Can both empty and loaded vehicles be weighed?",
    answer:
      "Absolutely. We weigh both loaded and empty vehicles. The net material weight is calculated as the difference between loaded (gross) and empty (tare) weight.",
  },
  {
    question: "Is your weighbridge suitable for trucks and tractors?",
    answer:
      "Yes. Our platform is designed for trucks, trailers, tractor-trolleys, dumpers and other heavy commercial vehicles.",
  },
  {
    question: "What are your working hours?",
    answer:
      "We are open 24 hours a day, 7 days a week. You can visit anytime for weighing services.",
  },
  {
    question: "Where exactly is your location?",
    answer:
      "We are located near the highway for easy truck access. Use the 'Get Direction' button on this page to open the exact location in Google Maps.",
  },
];
