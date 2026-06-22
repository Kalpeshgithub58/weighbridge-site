import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: [
    "weighbridge",
    "electronic weighbridge",
    "truck weighing",
    "weighbridge near me",
    siteConfig.city,
    "Gujarat weighbridge",
    "100 ton weighbridge",
    "weight slip",
    "material weighing",
  ],
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: "website",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
        <MobileStickyCTA />
        {/* Spacer for mobile sticky CTA */}
        <div className="h-16 lg:hidden" />
      </body>
    </html>
  );
}
