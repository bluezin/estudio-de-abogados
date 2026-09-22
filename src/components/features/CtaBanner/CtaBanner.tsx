import styles from "./CtaBanner.module.css";
import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";

export function CtaBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <span className={styles.icon}>
          <Icon name="handshake" size={34} />
        </span>
        <h2 className={styles.title}>
          ¿Necesitás asesoramiento legal profesional?
        </h2>
        <p className={styles.text}>
          Agenda una consulta inicial sin costo y conocé qué opciones tenés para
          tu caso concreto. Respondemos dentro de las 24 horas hábiles.
        </p>
        <div className={styles.actions}>
          <Button href="/contacto" variant="gold" size="lg">
            Agendar consulta gratuita
          </Button>
          <Button href="tel:+541145556789" variant="outline-onDark" size="lg">
            <Icon name="phone" size={18} />
            +54 11 4555-6789
          </Button>
        </div>
      </div>
    </section>
  );
}