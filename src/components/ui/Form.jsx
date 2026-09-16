import React from "react";
import { PhoneInput } from "react-international-phone";

import "react-international-phone/style.css";

export default function ReusableForm({
  fields = [],
  values = {},
  errors = {},
  onChange,
}) {
  const handleChange = (name, value) => {
    onChange(name, value);
  };

  const renderField = (field) => {
    const {
      name,
      type = "text",
      placeholder = "",
      options = [],
      rows = 3,
      autoComplete,
      defaultCountry = "ae",
    } = field;

    const value = values[name] ?? "";

    const inputClassName = `
      mt-2 w-full
      border-b
      bg-transparent
      pb-2
      text-black
      placeholder-black/30
      outline-none
      transition-colors
      ${
        errors[name]
          ? "border-red-400/70"
          : "border-black/15 focus:border-emerald-500"
      }
    `;

    switch (type) {
      case "textarea":
        return (
          <textarea
            name={name}
            rows={rows}
            value={value}
            placeholder={placeholder}
            autoComplete={autoComplete}
            onChange={(e) =>
              handleChange(name, e.target.value)
            }
            className={`
              ${inputClassName}
              resize-none
            `}
          />
        );

      case "select":
        return (
          <select
            name={name}
            value={value}
            onChange={(e) =>
              handleChange(name, e.target.value)
            }
            className={`
              ${inputClassName}
              appearance-none
              bg-white
              pr-8
            `}
          >
            <option value="" disabled>
              {placeholder || "Select an option"}
            </option>

            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        );

      case "phone":
        return (
          <PhoneInput
            defaultCountry={defaultCountry}
            value={value}
            onChange={(phone) =>
              handleChange(name, phone)
            }
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className="contact-phone-input mt-2"
            inputClassName="contact-phone-field"
            countrySelectorStyleProps={{
              buttonClassName:
                "contact-phone-selector",
            }}
          />
        );

      default:
        return (
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            autoComplete={autoComplete}
            onChange={(e) =>
              handleChange(name, e.target.value)
            }
            className={inputClassName}
          />
        );
    }
  };

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
      {fields.map((field) => (
        <label
          key={field.name}
          className={
            field.fullWidth
              ? "block sm:col-span-2"
              : "block"
          }
        >
          <span className="block text-xs font-medium tracking-[0.15em] text-black/50">
            {field.label}
          </span>

          {renderField(field)}

          {errors[field.name] && (
            <span className="mt-2 block text-xs text-red-500">
              {errors[field.name]}
            </span>
          )}
        </label>
      ))}
    </div>
  );
}