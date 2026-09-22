import { Hero } from "@/components/features/Hero/Hero";
import { StatsBar } from "@/components/features/StatsBar/StatsBar";
import { AboutPreview } from "@/components/features/AboutPreview/AboutPreview";
import { ServicesGrid } from "@/components/features/ServicesGrid/ServicesGrid";
import { ProcessSteps } from "@/components/features/ProcessSteps/ProcessSteps";
import { Testimonials } from "@/components/features/Testimonials/Testimonials";
import { CtaBanner } from "@/components/features/CtaBanner/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <ServicesGrid />
      <ProcessSteps />
      <Testimonials />
      <CtaBanner />
    </>
  );
}