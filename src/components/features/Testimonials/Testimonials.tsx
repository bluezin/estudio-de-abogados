import styles from "./Testimonials.module.css";
import { testimonials } from "@/data/stats";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Icon } from "@/components/ui/Icon/Icon";

export function Testimonials() {
  return (
    <section className={styles.section} aria-label="Testimonios">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Testimonios"
          title="La confianza de quienes nos respaldan"
          description="Historias reales de personas y empresas que atravesaron sus procesos legales con nuestro acompañamiento."
          align="center"
        />
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <figure className={styles.card} key={testimonial.id}>
              <span className={styles.icon}>
                <Icon name="balance" size={28} />
              </span>
              <blockquote className={styles.quote}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className={styles.author}>
                <span>{testimonial.name}</span>
                <small>{testimonial.detail}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}