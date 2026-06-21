import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyARiders from "@/components/WhyARiders";
import VisionMission from "@/components/VisionMission";
import TrustBanner from "@/components/TrustBanner";
import Highlights from "@/components/Highlights";
import Pricing from "@/components/Pricing";
import RevenueSharing from "@/components/RevenueSharing";
import WhyPricingWorks from "@/components/WhyPricingWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main className="flex-grow pt-10">
        <Hero />
        <About />
        <WhyARiders />
        <VisionMission />
        <TrustBanner />
        <Highlights />
        <Pricing />
        <RevenueSharing />
        <WhyPricingWorks />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

