import styles from "./TeamCard.module.css";
import type { TeamMember } from "@/data/team";

type Props = {
  member: TeamMember;
};

export function TeamCard({ member }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.avatar} aria-hidden="true">
        {member.initials}
      </div>
      <h3 className={styles.name}>{member.name}</h3>
      <p className={styles.role}>{member.role}</p>
      <ul className={styles.specialties}>
        {member.specialties.map((specialty) => (
          <li key={specialty}>{specialty}</li>
        ))}
      </ul>
    </article>
  );
}