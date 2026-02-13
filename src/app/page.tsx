import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoWeServe from "@/components/WhoWeServe";
import Outcomes from "@/components/Outcomes";
import CoreServices from "@/components/CoreServices";
import Workflows from "@/components/Workflows";
import Security from "@/components/Security";
import Proof from "@/components/Proof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeServe />
        <Outcomes />
        <CoreServices />
        <Workflows />
        <Security />
        <Proof />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
