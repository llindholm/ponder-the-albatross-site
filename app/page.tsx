import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import StorySection from "@/components/StorySection";
import TourSection from "@/components/TourSection";

export default function Home() {
  return (
    <div className="site">
      <Hero />
      <IntroSection />
      <StorySection />
      <TourSection />
    </div>
  );
}