import { twMerge } from "tailwind-merge";

export type InputType = "email" | "password" | "text";

interface InputProps {
  className?: string;
  defaultValue?: string;
  id: string;
  label: string;
  labelDescription?: string;
  placeholder?: string;
  hasError?: boolean;
  readonly?: boolean;
  type?: InputType;
}

export function Input({
  className,
  defaultValue,
  id,
  label,
  labelDescription,
  placeholder,
  hasError,
  readonly,
  type = "text",
}: InputProps) {
  return (
    <div className={className}>
      <label
        className={twMerge(
          "fieldHeading",
          "block ",
          hasError ? "text-berry" : ""
        )}
        htmlFor={id}
      >
        {label}
        <small className="ml-1 text-coolGray-700">{labelDescription}</small>
      </label>
      <input
        autoComplete={id}
        className={twMerge(
          "fieldText",
          "mt-1 block w-full rounded-md bg-[#F5F5F5]  shadow-sm focus:border-[#CBB4EA] focus:ring-[#CBB4EA] disabled:bg-[#E2E7ED]",
          hasError ? "border-berry" : "border-indigo"
        )}
        defaultValue={defaultValue}
        disabled={readonly}
        id={id}
        name={id}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
