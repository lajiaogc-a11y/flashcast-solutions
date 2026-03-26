/**
 * Reusable icon card grid component.
 * Used for: services, core values, team highlights, why-choose-us, etc.
 */

import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

interface IconCardItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  link?: string;
}

interface IconCardGridProps {
  items: IconCardItem[];
  columns?: 2 | 3 | 4;
  /** If true, cards are left-aligned (default). If false, cards are centered text. */
  alignLeft?: boolean;
}

const IconCardGrid = ({ items, columns = 2, alignLeft = true }: IconCardGridProps) => {
  const colClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid ${colClass} gap-4 md:gap-5`}>
      {items.map((item, i) => {
        const content = (
          <div
            className={`group relative p-6 md:p-7 rounded-lg border border-border bg-card hover-lift h-full transition-colors hover:border-accent/30 ${
              alignLeft ? "" : "text-center"
            }`}
          >
            <div
              className={`w-12 h-12 mb-4 rounded-full bg-accent/10 flex items-center justify-center transition-colors group-hover:bg-accent/20 ${
                alignLeft ? "" : "mx-auto"
              }`}
            >
              <item.icon className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h3 className="font-display font-semibold text-base md:text-lg mb-2 group-hover:text-accent transition-colors">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </div>
        );

        return (
          <Reveal key={item.title} delay={i * 80}>
            {item.link ? (
              <Link to={item.link} className="block h-full">
                {content}
              </Link>
            ) : (
              content
            )}
          </Reveal>
        );
      })}
    </div>
  );
};

export default IconCardGrid;
