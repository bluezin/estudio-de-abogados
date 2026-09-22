import styles from "./HistoryTimeline.module.css";
import { history } from "@/data/team";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";

export function HistoryTimeline() {
  return (
    <section className={styles.section} aria-label="Historia del estudio">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Historia"
          title="Hitos de nuestra trayectoria"
          description="Más de dos décadas de trabajo constante, construidas caso a caso con rigor y vocación."
        />
        <ol className={styles.timeline}>
          {history.map((item, index) => (
            <li
              className={`${styles.item} ${index % 2 ? styles.alt : ""}`}
              key={item.year}
            >
              <span className={styles.year}>{item.year}</span>
              <div className={styles.node} aria-hidden="true" />
              <div className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}