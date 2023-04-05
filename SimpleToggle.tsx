import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface ToggleProps {
  changeSelected?: () => void;
}

export function SimpleToggle({ changeSelected }: ToggleProps) {
  const [enabled, setEnabled] = useState(false);

  const handleChange = (value: boolean) => {
    setEnabled(value);
    changeSelected?.();
  };

  return (
    <Switch
      checked={enabled}
      className={classNames(
        enabled ? "bg-indigo-600" : "bg-gray-200",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      )}
      onChange={handleChange}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      />
    </Switch>
  );
}
