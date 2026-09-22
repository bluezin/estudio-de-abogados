import type { CSSProperties } from "react";
import styles from "./Container.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  as?: "div" | "section" | "footer" | "nav" | "header" | "main";
  id?: string;
  style?: CSSProperties;
};

export function Container({
  children,
  className = "",
  size = "lg",
  as: Tag = "div",
  id,
  style,
}: Props) {
  const base = `${styles.container} ${styles[`size-${size}`]} ${className}`.trim();
  if (Tag === "section") {
    return (
      <section id={id} className={base} style={style}>
        {children}
      </section>
    );
  }
  return (
    <Tag id={id} className={base} style={style}>
      {children}
    </Tag>
  );
}