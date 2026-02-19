import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={`section ${className ?? ""}`.trim()}>
      <div className="container">
        <header className="section-head reveal-up">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </header>
        {children}
      </div>
    </section>
  );
}
