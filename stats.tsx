import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type stat = {
  name: string;
  stat: string;
};

export type statItems = stat[];

interface StatProps {
  heading: ReactNode;
  stats: statItems;
  className?: string;
  statHeadingClass?: string;
  statsClass?: string;
}

export function Stats({
  heading,
  stats,
  className,
  statHeadingClass,
  statsClass,
}: StatProps) {
  return (
    <div className={className}>
      {heading}

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className={twMerge("sectionHeading", statHeadingClass)}>
              {item.name}
            </dt>
            <dd className={twMerge("bodyText mt-1", statsClass)}>
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
