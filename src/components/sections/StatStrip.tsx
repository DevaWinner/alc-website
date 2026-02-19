type Stat = {
  readonly value: string;
  readonly label: string;
};

type StatStripProps = {
  items: readonly Stat[];
};

export function StatStrip({ items }: StatStripProps) {
  return (
    <div className="stat-strip">
      {items.map((item, index) => (
        <article key={item.label} className={`stat-item reveal-up reveal-delay-${(index % 3) + 1}`}>
          <p className="stat-value">{item.value}</p>
          <p className="stat-label">{item.label}</p>
        </article>
      ))}
    </div>
  );
}
