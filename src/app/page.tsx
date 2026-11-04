import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import ThemeOverview from "@/components/sections/ThemeOverview";
import ResearchSection from "@/components/sections/ResearchSection";
import ToolsSection from "@/components/sections/ToolsSection";
import EnvironmentsSection from "@/components/sections/EnvironmentsSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import HonoursSection from "@/components/sections/HonoursSection";
import LorSection from "@/components/sections/LorSection";
import ArtDanceSection from "@/components/sections/ArtDanceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <ThemeOverview />
      <ResearchSection />
      <ToolsSection />
      <EnvironmentsSection />
      <LeadershipSection />
      <HonoursSection />
      <LorSection />
      <ArtDanceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
