import styles from "./MissionValues.module.css";
import { values } from "@/data/team";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon/Icon";

const icons: IconName[] = ["shield", "scale", "handshake", "users"];

export function MissionValues() {
  return (
    <section className={styles.section} aria-label="Misión y valores">
      <div className={styles.inner}>
        <div className={styles.mission}>
          <SectionHeading
            eyebrow="Nuestra misión"
            title="Un estudio creado para acompañar, no solo representar"
            description="Nacimos con la convicción de que la calidad jurídica no tiene por qué estar reñida con el trato humano. Por eso cada cliente recibe la atención directa de un especialista, nunca de un call center."
          />
          <p className={styles.extra}>
            Trabajamos con un modelo de equipo multidisciplinario: ante casos
            que tocan varias ramas del derecho, reunimos a nuestros
            especialistas para construir una estrategia integral en lugar de
            soluciones aisladas.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <article className={styles.value} key={value.title}>
              <span className={styles.valueIcon}>
                <Icon name={icons[index] ?? "shield"} size={26} />
              </span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}