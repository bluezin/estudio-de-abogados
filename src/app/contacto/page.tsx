import type { Metadata } from "next";
import { PageHero } from "@/components/features/PageHero/PageHero";
import { ContactSection } from "@/components/features/ContactSection/ContactSection";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agendá tu primera consulta gratuita con Mendoza & Asociados. Estudio jurídico en Buenos Aires.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos para ayudarte"
        description="Contanos tu situación y coordiná una consulta inicial sin costo. Tu información está protegida por secreto profesional."
      />
      <ContactSection />
    </>
  );
}