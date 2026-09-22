import styles from "./ServicesGrid.module.css";
import { services } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { ServiceCard } from "@/components/features/ServiceCard/ServiceCard";

type Props = {
  title?: string;
  description?: string;
  showHeading?: boolean;
};

export function ServicesGrid({
  title = "Áreas de práctica",
  description = "Cobertura legal integral para personas y empresas, con especialistas en cada rama del derecho.",
  showHeading = true,
}: Props) {
  return (
    <section className={styles.section} aria-label={title}>
      <div className={styles.inner}>
        {showHeading ? (
          <SectionHeading eyebrow="Servicios" title={title} description={description} />
        ) : null}
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}