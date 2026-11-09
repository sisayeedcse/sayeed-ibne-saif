import Hero from "@/components/home/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import Roadmap from "@/components/home/Roadmap";
import Experience from "@/components/home/Experience";
import Education from "@/components/home/Education";
import Stack from "@/components/home/Stack";
import ActivitiesPreview from "@/components/home/ActivitiesPreview";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Roadmap />
      <Experience />
      <Education />
      <Stack />
      <ActivitiesPreview />
      <Contact />
    </>
  );
}
