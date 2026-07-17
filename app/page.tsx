import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import StorySection from "@/components/StorySection";
import TourSection from "@/components/TourSection";
import Navigation from "@/components/Navigation";
import FellowshipSection from "@/components/FellowshipSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="site">
      <Navigation />
      <Hero />
      <IntroSection />
      <StorySection />
      <TourSection />
      <FellowshipSection />
      <ContactSection />
    </div>
  );
}