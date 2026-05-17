export const siteConfig = {
  businessName: "Shree Ganesh Weighbridge",
  subtitle: "Certified Electronic Weighing",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  address: "Near Highway, Your City, Gujarat",
  city: "Your City",
  capacity: "100 Ton",
  workingHours: "Open 24×7",
  mapQuery: "Shree Ganesh Weighbridge Near Highway Your City Gujarat",
  whatsappMessage: "Hello, I want to know about weighbridge services.",
  seo: {
    title:
      "Shree Ganesh Weighbridge | Certified Electronic Weighbridge in Your City",
    description:
      "Accurate 100 Ton electronic weighbridge service with printed weight slips for trucks, transporters, farmers, construction suppliers and local businesses.",
  },
} as const;

export const links = {
  call: `tel:+${siteConfig.phoneRaw}`,
  whatsapp: `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`,
  direction: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapQuery)}`,
} as const;
