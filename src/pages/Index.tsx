import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import TeamSection from "@/components/TeamSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SpecialtiesSection />
        <TeamSection />
        <WhyUsSection />
        <TestimonialsSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
};

export default Index;
