import { Hero } from "@/components/home/Hero";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { AboutIntro } from "@/components/home/AboutIntro";
import { Showreel } from "@/components/home/Showreel";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <AboutIntro />
      <Showreel />
      <ContactCTA />
    </>
  );
}
