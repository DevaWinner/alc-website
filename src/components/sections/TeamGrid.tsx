import Image from "next/image";
import { TeamMember } from "@/data/team";

type TeamGridProps = {
  items: TeamMember[];
};

export function TeamGrid({ items }: TeamGridProps) {
  return (
    <div className="card-grid card-grid-3">
      {items.map((member, index) => (
        <article key={member.name} className={`content-card team-card reveal-up reveal-delay-${(index % 3) + 1}`}>
          <Image src={member.image} alt={member.name} width={360} height={360} />
          <div>
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p>{member.bio}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
