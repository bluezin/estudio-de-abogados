import type { Metadata } from "next";
import { PageHero } from "@/components/features/PageHero/PageHero";
import { MissionValues } from "@/components/features/MissionValues/MissionValues";
import { HistoryTimeline } from "@/components/features/HistoryTimeline/HistoryTimeline";
import { TeamSection } from "@/components/features/TeamSection/TeamSection";
import { CtaBanner } from "@/components/features/CtaBanner/CtaBanner";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conocé la historia, la misión y los valores del estudio Mendoza & Asociados.",
};

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Un estudio fundado en la confianza"
        description="Desde 1998 defendemos los derechos de personas y empresas con un modelo de atención cercano y un equipo jurídico de primer nivel."
      />
      <MissionValues />
      <HistoryTimeline />
      <TeamSection
        title="El equipo que te va a acompañar"
        description="Conocé a los profesionales que lideran nuestras áreas de práctica."
      />
      <CtaBanner />
    </>
  );
}