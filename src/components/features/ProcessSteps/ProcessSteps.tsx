import styles from "./ProcessSteps.module.css";
import { processSteps } from "@/data/stats";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Icon } from "@/components/ui/Icon/Icon";

export function ProcessSteps() {
  return (
    <section className={styles.section} aria-label="Cómo trabajamos">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Metodología"
          title="Cómo trabajamos contigo"
          description="Un proceso claro y ordenado para que sepas en qué punto estás en cada momento."
          align="center"
        />
        <ol className={styles.steps}>
          {processSteps.map((step, index) => (
            <li className={styles.step} key={step.id}>
              <div className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </div>
              <Icon name="check" size={18} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}