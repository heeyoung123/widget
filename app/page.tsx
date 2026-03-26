import HeroSection from "@/components/HeroSection";
import TimelineSection from "@/components/TimelineSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080810] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TimelineSection />
      <AboutSection />
      <WhyChooseUs />
      <footer className="border-t border-white/5 py-10 text-center text-sm text-white/30">
        <p>© 2026 Polestar Media Tech. All rights reserved.</p>
      </footer>
    </main>
  );
}
