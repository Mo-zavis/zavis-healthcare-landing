import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import MeetHumble from "@/components/MeetHumble";
import OneTruth from "@/components/OneTruth";
import EdgeCases from "@/components/EdgeCases";
import Comparison from "@/components/Comparison";
import Waterfall from "@/components/Waterfall";
import Features from "@/components/Features";
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
        <SocialProof />
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
