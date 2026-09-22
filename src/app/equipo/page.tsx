import type { Metadata } from "next";
import { PageHero } from "@/components/features/PageHero/PageHero";
import { TeamSection } from "@/components/features/TeamSection/TeamSection";
import { CtaBanner } from "@/components/features/CtaBanner/CtaBanner";

export const metadata: Metadata = {
  title: "Equipo",
  description:
    "Conocé a los abogados y profesionales de Mendoza & Asociados, especialistas en cada rama del derecho.",
};

export default function EquipoPage() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Profesionales que hablan tu idioma"
        description="Abogados con sólida formación, trayectoria en litigios complejos y un compromiso real con cada cliente que confía en nosotros."
      />
      <TeamSection
        title="Nuestros profesionales"
        description="Un equipo multidisciplinario que colabora de forma integrada para ofrecer estrategias completas."
      />
      <CtaBanner />
    </>
  );
}