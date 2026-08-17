export const siteConfig = {
  businessName: "Aveera Weighing Scales",
  subtitle: "Precision at Every Scale",
  phone: "+91 97237 94363",
  phoneRaw: "919723794363",
  address: "2nd floor, 222, Ronak Complex, Gondal road, Rajkot – 360002, Gujarat, India",
  city: "Rajkot",
  capacity: "Up to 200 Ton",
  workingHours: "Mon-Sat: 9 AM - 7 PM",
  mapQuery: "Aveera Weighing Scales",
  whatsappMessage: "Hello, I want to know about your weighing scales and services.",
  email: "info.aveerascales@gmail.com",
  seo: {
    title:
      "Aveera Weighing Scales | Trusted Dealer & Service Partner",
    description:
      "We supply, install, and maintain top-tier weighbridges and industrial scales. Get the best hardware, flawless software integration, and rapid maintenance services.",
  },
} as const;

export const links = {
  call: `tel:+${siteConfig.phoneRaw}`,
  whatsapp: `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`,
  direction: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.mapQuery)}`,
  email: `mailto:${siteConfig.email}`,
} as const;

