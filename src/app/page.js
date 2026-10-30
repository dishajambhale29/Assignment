import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Customizer from "@/components/Customizer";
import Craftsmanship from "@/components/Craftsmanship";
import Statistics from "@/components/Statistics";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Customizer />
        <Craftsmanship />
        <Statistics />
        <Consultation />
      </main>
      <Footer />
    </>
  );
}
