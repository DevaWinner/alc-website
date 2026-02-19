export type WorkStep = {
  readonly step: string;
  readonly detail: string;
};

type WorkPathwayProps = {
  steps: readonly WorkStep[];
};

export function WorkPathway({ steps }: WorkPathwayProps) {
  return (
    <ol className="timeline">
      {steps.map((item, index) => (
        <li key={item.step} className={`timeline-item reveal-up reveal-delay-${(index % 3) + 1}`}>
          <span className="timeline-index">{index + 1}</span>
          <div>
            <h3>{item.step}</h3>
            <p>{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
