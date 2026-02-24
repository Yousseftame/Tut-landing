import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import OurVisionSection from "@/components/OurVisionSection";
import LocationSection from "@/components/LocationSection";
import TheStoreSection from "@/components/TheStoreSection";
import GallerySection from "@/components/GallerySection";
import BrandExperienceSection from "@/components/BrandExperienceSection";
import CustomerExperienceSection from "@/components/CustomerExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useScrollAnimation();
  return (
    <div className="bg-background">
      <HeroSection />
      <OurStorySection />
      <OurVisionSection />
      <LocationSection />
      <TheStoreSection />
      <GallerySection />
      <div className="space-y-4">
        <BrandExperienceSection />
        <CustomerExperienceSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
