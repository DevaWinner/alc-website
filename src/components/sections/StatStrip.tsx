import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/lib/icons";

type Stat = {
  readonly value: string;
  readonly label: string;
  readonly icon?: IconName;
};

type StatStripProps = {
  items: readonly Stat[];
};

export function StatStrip({ items }: StatStripProps) {
  return (
    <div className="stat-strip">
      {items.map((item, index) => (
        <article key={item.label} className={`stat-item reveal-up reveal-delay-${(index % 3) + 1}`}>
          {item.icon ? (
            <span className="icon-badge icon-badge-soft">
              <Icon name={item.icon} size={18} />
            </span>
          ) : null}
          <p className="stat-value">{item.value}</p>
          <p className="stat-label">{item.label}</p>
        </article>
      ))}
    </div>
  );
}
