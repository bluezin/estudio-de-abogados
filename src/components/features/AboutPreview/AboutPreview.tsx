import styles from "./AboutPreview.module.css";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";

const pillars = [
  "Estrategia a medida para cada caso",
  "Comunicación clara y constante",
  "Honorarios transparentes",
];

export function AboutPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.visual} aria-hidden="true">
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Icon name="balance" size={28} />
              <span>Mendoza & Asociados</span>
            </div>
            <p>
              &ldquo;La justicia no es dar a cada uno lo suyo, sino cada cosa
              debe ocupar su lugar.&rdquo;
            </p>
            <small>— Nuestra ética profesional</small>
          </div>
          <span className={styles.stamp}>
            <Icon name="scale" size={36} />
            Est. 1998
          </span>
        </div>

        <div className={styles.content}>
          <span className={styles.eyebrow}>Nuestro estudio</span>
          <h2 className={styles.title}>
            Excelencia jurídica con un trato <em>cercano y humano</em>
          </h2>
          <p className={styles.text}>
            En {`Mendoza & Asociados`} combinamos más de 25 años de experiencia
            con un enfoque moderno del derecho. Cada caso es único, por eso
            diseñamos estrategias específicas y acompañamos a nuestros clientes
            en todo el proceso con absoluta transparencia.
          </p>
          <ul className={styles.list}>
            {pillars.map((pillar) => (
              <li key={pillar}>
                <Icon name="check" size={20} />
                {pillar}
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <Button href="/nosotros" variant="primary">
              Conocé más sobre nosotros
              <Icon name="arrow-right" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}