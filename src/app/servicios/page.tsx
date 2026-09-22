import type { Metadata } from "next";
import { PageHero } from "@/components/features/PageHero/PageHero";
import { ServicesGrid } from "@/components/features/ServicesGrid/ServicesGrid";
import { ProcessSteps } from "@/components/features/ProcessSteps/ProcessSteps";
import { CtaBanner } from "@/components/features/CtaBanner/CtaBanner";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Áreas de práctica del estudio Mendoza & Asociados: civil, penal, laboral, corporativo, familia, tributario y más.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Áreas de práctica especializadas"
        description="Cobertura legal integral. Cada área es liderada por un equipo de especialistas con experiencia probada en tribunales y en negociaciones."
      />
      <ServicesGrid
        title="Todo el derecho, en un solo estudio"
        description="Seleccioná el área con la que necesitás asistencia y ponete en contacto con un especialista."
      />
      <ProcessSteps />
      <CtaBanner />
    </>
  );
}