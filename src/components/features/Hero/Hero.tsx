import styles from "./Hero.module.css";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";

const highlights = [
  "Defensa penal",
  "Derecho laboral",
  "Sociedades y empresas",
  "Sucesiones",
];

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.pattern} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>
            <Icon name="shield" size={16} />
            Más de 25 años defendiendo tus derechos
          </span>

          <h1 className={styles.title}>
            Derechos bien defendidos, <em>con estrategia y confianza</em>
          </h1>

          <p className={styles.subtitle}>
            Somos un estudio jurídico de alto nivel que combina experiencia,
            técnica y trato cercano. Acompañamos a personas y empresas en cada
            etapa de sus asuntos legales.
          </p>

          <div className={styles.actions}>
            <Button href="/contacto" variant="gold" size="lg">
              Consulta gratuita inicial
              <Icon name="arrow-right" size={18} />
            </Button>
            <Button
              href="/servicios"
              className={styles.actions__know}
              variant="outline"
              size="lg"
            >
              Conoce nuestros servicios
            </Button>
          </div>

          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item}>
                <Icon name="check" size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
