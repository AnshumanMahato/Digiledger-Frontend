import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import DateTime from "./DateTime";
import classNames from "classnames";

const Input = forwardRef(
  (
    { label, type, id, name, errors, control, rules, options, ...rest },
    ref
  ) => {
    const inputClasses = classNames(
      "block w-full px-2 py-1.5 sm:px-4",
      "bg-accent-dark resize-none",
      "border-x-0 border-y-[3px] border-transparent rounded",
      "focus:outline-none focus:border-b-primary focus:invalid:border-b-red-400",
      "transition-all duration-[0.3s]",
      "text-white placeholder:text-slate-500 text-xs sm:text-base"
    );

    const labelClasses = classNames(
      "block mb-3",
      "text-base sm:text-lg font-bold"
    );

    return (
      <>
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
        {type === "textarea" && (
          <textarea
            name={name}
            id={id}
            className={inputClasses}
            ref={ref}
            {...rest}
          />
        )}
        {type === "date" && (
          <Controller
            name={name}
            render={({ field }) => (
              <DateTime className={inputClasses} field={field} {...rest} />
            )}
            control={control}
            rules={rules}
          />
        )}
        {type === "select" && (
          <select
            id={id}
            name={name}
            className={inputClasses}
            ref={ref}
            {...rest}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
        {type !== "textarea" && type !== "date" && type !== "select" && (
          <input
            type={type}
            id={id}
            name={name}
            className={inputClasses}
            ref={ref}
            {...rest}
          />
        )}
        {errors[name] && <p>{errors[name].message}</p>}
      </>
    );
  }
);

export default Input;
