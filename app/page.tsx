import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import DeferredMount from "@/components/DeferredMount";

const TimelineSection = dynamic(() => import("@/components/TimelineSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080810]" style={{ overflowX: "clip" }}>
      <Navbar />
      <HeroSection />
      <DeferredMount anchorId="services" placeholderClassName="min-h-[3600px] w-full scroll-mt-24">
        <TimelineSection />
      </DeferredMount>
      <DeferredMount anchorId="about" placeholderClassName="min-h-[640px] w-full scroll-mt-24">
        <AboutSection />
      </DeferredMount>
      <DeferredMount anchorId="why" placeholderClassName="min-h-[1500px] w-full scroll-mt-24">
        <WhyChooseUs />
      </DeferredMount>
      <footer className="border-t border-zinc-800 py-10 text-center text-sm text-zinc-600">
        <p>© 2026 Polestar Media Tech. All rights reserved.</p>
      </footer>
    </main>
  );
}
