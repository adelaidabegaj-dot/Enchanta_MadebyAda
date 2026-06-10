import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Summer from "@/components/sections/Summer";
import Collections from "@/components/sections/Collections";
import Moodboard from "@/components/sections/Moodboard";
import PreOrder from "@/components/sections/PreOrder";
import Editorial from "@/components/sections/Editorial";
import CustomMade from "@/components/sections/CustomMade";
import RisingMoon from "@/components/sections/RisingMoon";
import Artistry from "@/components/sections/Artistry";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Summer />
        <Collections />
        <Moodboard />
        <PreOrder />
        <Editorial />
        <CustomMade />
        <RisingMoon />
        <Artistry />
      </main>
      <Footer />
    </>
  );
}
