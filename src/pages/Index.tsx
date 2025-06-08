
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import HowItWorks from "@/components/HowItWorks";
import ExpertGrid from "@/components/ExpertGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ExpertGrid />
      <HowItWorks />
      <TrustIndicators />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
