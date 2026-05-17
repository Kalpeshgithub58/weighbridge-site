import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CapacityTrust from "@/components/CapacityTrust";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickInfo />
        <Services />
        <Process />
        <CapacityTrust />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileStickyCTA />
      {/* Spacer for mobile sticky CTA */}
      <div className="h-16 lg:hidden" />
    </>
  );
}
