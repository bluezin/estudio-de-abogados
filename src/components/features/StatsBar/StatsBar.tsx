import styles from "./StatsBar.module.css";
import { stats } from "@/data/stats";

export function StatsBar() {
  return (
    <section className={styles.bar} aria-label="Cifras del estudio">
      <dl className={styles.grid}>
        {stats.map((stat) => (
          <div className={styles.item} key={stat.label}>
            <dt className={styles.label}>{stat.label}</dt>
            <dd className={styles.value}>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}