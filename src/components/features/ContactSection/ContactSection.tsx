import styles from "./ContactSection.module.css";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icon/Icon";
import { ContactForm } from "@/components/features/ContactForm/ContactForm";

const channels: { icon: IconName; title: string; body: string; href?: string }[] =
  [
    {
      icon: "phone",
      title: "Teléfono",
      body: site.phone,
      href: site.phoneHref,
    },
    {
      icon: "mail",
      title: "Email",
      body: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: "pin",
      title: "Estudio",
      body: `${site.address}\n${site.city}`,
    },
    {
      icon: "clock",
      title: "Horario",
      body: site.hours,
    },
  ];

export function ContactSection() {
  return (
    <section className={styles.section} aria-label="Contacto">
      <div className={styles.inner}>
        <div className={styles.info}>
          <SectionHeading
            eyebrow="Contacto"
            title="Agendá tu primera consulta"
            description="Escribinos y asesorá con un especialista. La primera consulta es sin cargo y sin compromiso."
          />
          <ul className={styles.channels}>
            {channels.map((channel) => (
              <li key={channel.title} className={styles.channel}>
                <span className={styles.channelIcon}>
                  <Icon name={channel.icon} size={22} />
                </span>
                <div>
                  <h3>{channel.title}</h3>
                  {channel.href ? (
                    <a href={channel.href}>{channel.body}</a>
                  ) : (
                    <p>{channel.body}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.response}>
            <span className={styles.responseIcon}>
              <Icon name="clock" size={18} />
            </span>
            <p>
              Respondemos todas las consultas en un plazo máximo de{" "}
              <strong>24 horas hábiles</strong>.
            </p>
          </div>
        </div>

        <div className={styles.formCard}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}