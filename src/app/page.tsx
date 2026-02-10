import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MeetHumble from "@/components/MeetHumble";
import OneTruth from "@/components/OneTruth";
import Features from "@/components/Features";
import EdgeCases from "@/components/EdgeCases";
import Comparison from "@/components/Comparison";
import Waterfall from "@/components/Waterfall";
import Timeline from "@/components/Timeline";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MeetHumble />
        <OneTruth />
        <EdgeCases />
        <Comparison />
        <Waterfall />
        <Features />
        <Timeline />
        <Roadmap />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
