import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatItIs } from "@/components/WhatItIs";
import { KeyBenefits } from "@/components/KeyBenefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="what-it-is">
          <WhatItIs />
        </div>
        <div id="benefits">
          <KeyBenefits />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;