import styles from "./ServiceCard.module.css";
import type { Service } from "@/data/services";
import { Icon, type IconName } from "@/components/ui/Icon/Icon";

const iconByService: Record<string, IconName> = {
  civil: "handshake",
  penal: "gavel",
  laboral: "briefcase",
  corporativo: "building",
  familia: "family",
  tributario: "receipt",
  inmobiliario: "home",
  sucesiones: "suit",
  mediacion: "balance",
};

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  return (
    <article className={styles.card} id={service.id}>
      <span className={styles.icon}>
        <Icon name={iconByService[service.id] ?? "balance"} size={26} />
      </span>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.text}>{service.description}</p>
      <ul className={styles.tags}>
        {service.keywords.map((keyword) => (
          <li key={keyword}>{keyword}</li>
        ))}
      </ul>
    </article>
  );
}