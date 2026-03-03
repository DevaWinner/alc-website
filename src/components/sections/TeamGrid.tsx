import Image from "next/image";
import { TeamMember } from "@/data/team";
import { defaultBlurDataURL } from "@/lib/image";

type TeamGridProps = {
  items: TeamMember[];
  columns?: 2 | 3;
};

export function TeamGrid({ items, columns }: TeamGridProps) {
  const resolvedColumns = columns ?? (items.length === 2 ? 2 : 3);
  const gridClass = resolvedColumns === 2 ? "card-grid card-grid-2" : "card-grid card-grid-3";
  const imageSizes =
    resolvedColumns === 2
      ? "(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 44vw"
      : "(max-width: 760px) 100vw, (max-width: 1024px) 50vw, 33vw";

  return (
    <div className={gridClass}>
      {items.map((member, index) => (
        <article key={member.name} className={`content-card team-card reveal-up reveal-delay-${(index % 3) + 1}`}>
          <Image
            src={member.image}
            alt={member.name}
            width={360}
            height={360}
            sizes={imageSizes}
            quality={72}
            placeholder="blur"
            blurDataURL={defaultBlurDataURL}
          />
          <div>
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            {member.bio ? <p>{member.bio}</p> : null}
          </div>
        </article>
      ))}
    </div>
  );
}
