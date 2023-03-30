import React, { ReactNode } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type stat = {
  id: React.Key;
  name: string;
  stat: string;
  icon: ReactNode;
  change?: string;
  changeType?: string;
  viewAll?: boolean;
  url?: string;
};

export type statIconItems = stat[];

interface StatIconProps {
  heading: ReactNode;
  stats: statIconItems;
  className?: string;
  statHeadingClass?: string;
  statsClass?: string;
}

export function IconStats({
  heading,
  stats,
  className,
  statHeadingClass,
  statsClass,
}: StatIconProps) {
  const defaultClasses =
    "relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6";
  const newClasses = twMerge(defaultClasses, className);

  return (
    <div>
      {heading}

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Iteration over stats */}
        {stats.map((item) => (
          <div
            key={item.id}
            className={newClasses}
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                {/* Stat Icon */}
                {item.icon}
              </div>
              <p className={twMerge("sectionHeading ml-16 ", statHeadingClass)}>
                {/* Stat name */}
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className={twMerge("bodyText ", statsClass)}>{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600",
                  "ml-2 flex items-baseline text-sm font-semibold"
                )}
              >
                {/* If change type is given then up, down arrows will show */}
                {item.changeType ? (
                  item.changeType === "increase" ? (
                    <ArrowUpIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                    />
                  ) : (
                    <ArrowDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                    />
                  )
                ) : (
                  ""
                )}

                <span className="sr-only">
                  {" "}
                  {item.changeType === "increase"
                    ? "Increased"
                    : "Decreased"}{" "}
                  by{" "}
                </span>
                {item.change}
              </p>
              {/* If viewAll is true then View All will show at the bottom of card */}
              {item.viewAll && (
                <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <a
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      href={item.url}
                    >
                      {" "}
                      View all
                      <span className="sr-only"> {item.name} stats</span>
                    </a>
                  </div>
                </div>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
