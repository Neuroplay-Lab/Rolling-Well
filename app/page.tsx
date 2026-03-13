import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Registration from "@/components/Registration";
import Speakers from "@/components/Speakers";
import Organisers from "@/components/Organisers";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Registration />
      <Speakers />
      <Organisers />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
