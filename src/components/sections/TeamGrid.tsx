import Image from "next/image";
import { TeamMember } from "@/data/team";
import { defaultBlurDataURL } from "@/lib/image";

type TeamGridProps = {
  items: TeamMember[];
};

export function TeamGrid({ items }: TeamGridProps) {
  return (
    <div className="card-grid card-grid-3">
      {items.map((member, index) => (
        <article key={member.name} className={`content-card team-card reveal-up reveal-delay-${(index % 3) + 1}`}>
          <Image
            src={member.image}
            alt={member.name}
            width={360}
            height={360}
            sizes="(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={72}
            placeholder="blur"
            blurDataURL={defaultBlurDataURL}
          />
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
