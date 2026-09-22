import styles from "./TeamSection.module.css";
import { team } from "@/data/team";
import { SectionHeading } from "@/components/ui/SectionHeading/SectionHeading";
import { TeamCard } from "@/components/features/TeamCard/TeamCard";

type Props = {
  title?: string;
  description?: string;
  showHeading?: boolean;
};

export function TeamSection({
  title = "Nuestro equipo",
  description = "Profesionales especializados que unen años de experiencia con una mirada moderna del derecho.",
  showHeading = true,
}: Props) {
  return (
    <section className={styles.section} aria-label={title}>
      <div className={styles.inner}>
        {showHeading ? (
          <SectionHeading
            eyebrow="Equipo"
            title={title}
            description={description}
            align="center"
          />
        ) : null}
        <div className={styles.grid}>
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}