import { Program } from "@/data/programs";

type ProgramGridProps = {
  items: Program[];
};

export function ProgramGrid({ items }: ProgramGridProps) {
  return (
    <div className="card-grid card-grid-3">
      {items.map((program, index) => (
        <article key={program.id} className={`content-card reveal-up reveal-delay-${(index % 3) + 1}`}>
          <p className="card-kicker">
            {program.level} · {program.duration}
          </p>
          <h3>{program.title}</h3>
          <p>{program.summary}</p>
        </article>
      ))}
    </div>
  );
}
