import Link from "next/link";
import styles from "./Footer.module.css";
import { site, navLinks } from "@/data/site";
import { services } from "@/data/services";
import { Icon, type IconName } from "@/components/ui/Icon/Icon";

const socialIcons: { name: IconName; label: string; href: string }[] = [
  { name: "linkedin", label: "LinkedIn", href: site.social.linkedin },
  { name: "twitter", label: "Twitter / X", href: site.social.twitter },
  { name: "instagram", label: "Instagram", href: site.social.instagram },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <Icon name="balance" size={24} />
            </span>
            <div>
              <strong>{site.name}</strong>
              <small>{site.tagline}</small>
            </div>
          </div>
          <p className={styles.about}>
            Estudio jurídico con más de 25 años de trayectoria. Defendemos tus
            derechos con estrategia, ética y cercanía en cada etapa del proceso.
          </p>
          <div className={styles.social}>
            {socialIcons.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.label}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name={item.name} size={19} />
              </a>
            ))}
          </div>
        </div>

        <nav className={styles.col} aria-label="Enlaces del sitio">
          <h3>Navegación</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <h3>Áreas de práctica</h3>
          <ul>
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link href={`/servicios#${service.id}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Contacto</h3>
          <ul className={styles.contactList}>
            <li>
              <Icon name="pin" size={18} />
              <span>
                {site.address}
                <br />
                {site.city}
              </span>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Icon name="clock" size={18} />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          &copy; {year} {site.name}. Todos los derechos reservados.
        </p>
        <p className={styles.legal}>
          La información de este sitio es de carácter general y no constituye
          asesoramiento jurídico.
        </p>
      </div>
    </footer>
  );
}