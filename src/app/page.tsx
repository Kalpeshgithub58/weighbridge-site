import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import SoftwareAndServices from "@/components/SoftwareAndServices";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Industries />
      <SoftwareAndServices />
      <AboutUs />
      <Contact />
    </main>
  );
}
