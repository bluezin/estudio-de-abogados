import styles from "./SectionHeading.module.css";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: Props) {
  const classNames = [
    styles.heading,
    styles[`align-${align}`],
    styles[`tone-${tone}`],
  ].join(" ");

  return (
    <div className={classNames}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 className={styles.title}>{title}</h2>
      {description ? (
        <p className={styles.description}>{description}</p>
      ) : null}
    </div>
  );
}