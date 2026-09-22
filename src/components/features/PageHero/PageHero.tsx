import styles from "./PageHero.module.css";
import { Icon } from "@/components/ui/Icon/Icon";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.pattern} aria-hidden="true" />
      <div className={styles.container}>
        <span className={styles.eyebrow}>
          <Icon name="balance" size={16} />
          {eyebrow}
        </span>
        <h1 className={styles.title}>{title}</h1>
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
      </div>
    </section>
  );
}