import React, { useMemo } from "react";
import { RadioGroup as HLRadioGroup } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

export type RadioGroupItem = {
  key: React.Key;
  name: string;
};

export type RadioGroupItems = RadioGroupItem[];

interface RadioGroupProps {
  label?: string;
  labelClass?: string;
  optionsClass?: string;
  radioGroupItems: RadioGroupItems;
  selected?: React.Key;
  changeSelected?: (key: React.Key) => void;
}

export function RadioGroup({
  label,
  labelClass,
  optionsClass,
  radioGroupItems,
  selected,
  changeSelected,
}: RadioGroupProps) {
  const selectedValue = useMemo(
    () => radioGroupItems.find((item) => item.key === selected) ?? null,
    [selected, radioGroupItems]
  );

  return (
    <HLRadioGroup
      value={selectedValue}
      onChange={(v: RadioGroupItem) => {
        changeSelected?.(v.key);
      }}
    >
      <HLRadioGroup.Label className={twMerge("fieldHeading", labelClass)}>
        Please select one {label}:
      </HLRadioGroup.Label>
      <div className="relative mt-6 -space-y-px bg-white">
        {radioGroupItems.map((item, index) => (
          <HLRadioGroup.Option
            key={item.name}
            // { checked } is available
            className={() =>
              twMerge(
                index % 2 && "bg-[#F3F3F3]",
                "relative cursor-pointer border-0 px-3 py-3.5 focus:outline-none"
              )
            }
            value={item}
          >
            {/* { active, checked } is available */}
            {({ checked }) => (
              <>
                <span className="flex items-center">
                  <span
                    aria-hidden="true"
                    className={twMerge(
                      checked
                        ? "border-transparent bg-gray-medium"
                        : "border-gray-medium bg-white",
                      "flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border"
                    )}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <HLRadioGroup.Label
                    as="span"
                    className={twMerge("fieldText ml-3", optionsClass)}
                  >
                    {item.name}
                  </HLRadioGroup.Label>
                </span>
              </>
            )}
          </HLRadioGroup.Option>
        ))}
      </div>
    </HLRadioGroup>
  );
}
