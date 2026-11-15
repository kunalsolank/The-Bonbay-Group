import { useState } from "react";
import { PhoneInput } from "react-international-phone";

import "react-international-phone/style.css";

function FormPhoneInput({
  name,
  value,
  onChange,
  defaultCountry,
  placeholder,
  autoComplete,
  required,
  isDark,
}) {
  const [uncontrolledValue, setUncontrolledValue] = useState(value);
  const phoneValue = onChange ? value : uncontrolledValue;

  return (
    <PhoneInput
      defaultCountry={defaultCountry}
      value={phoneValue}
      onChange={(phone) => {
        if (onChange) {
          onChange(name, phone);
        } else {
          setUncontrolledValue(phone);
        }
      }}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required={required}
      className={`contact-phone-input mt-1 ${isDark ? "contact-phone-input-dark" : ""}`}
      inputClassName={`contact-phone-field ${isDark ? "contact-phone-field-dark" : ""}`}
      countrySelectorStyleProps={{
        buttonClassName: `contact-phone-selector ${isDark ? "contact-phone-selector-dark" : ""}`,
      }}
    />
  );
}

export default function ReusableForm({
  fields = [],
  values = {},
  errors = {},
  onChange,
  theme = "light",
  columns = 1,
  nativeValidation = false,
  uncontrolled = false,
}) {
  const isDark = theme === "dark";
  const handleChange = (name, value) => {
    onChange?.(name, value);
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
      validation = {},
    } = field;

    const value = values[name] ?? "";
    const valueProps = uncontrolled
      ? { defaultValue: value }
      : { value };
    const changeProps = onChange
      ? { onChange: (event) => handleChange(name, event.target.value) }
      : {};

    const inputClassName = `
      mt-1 w-full
      border-b
      bg-transparent
      pb-1.5
      text-base sm:text-sm
      ${isDark ? "text-white placeholder-white/35" : "text-black placeholder-black/30"}
      outline-none
      transition-colors
      ${
        errors[name]
          ? "border-red-400/70"
          : isDark
            ? "border-white/15 focus:border-[#00ff87]"
            : "border-black/15 focus:border-emerald-500"
      }
    `;

    switch (type) {
      case "textarea":
        return (
          <textarea
            name={name}
            rows={rows || 3}
            {...valueProps}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required={nativeValidation && validation.required}
            {...changeProps}
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
            {...valueProps}
            required={nativeValidation && validation.required}
            {...changeProps}
            className={`
              ${inputClassName}
              appearance-none
              ${isDark ? "bg-[#0d1114] text-white scheme-dark" : "bg-white"}
              pr-8
              cursor-pointer
            `}
          >
            <option value="" disabled className={isDark ? "bg-[#0d1114] text-white" : ""}>
              {placeholder || "Select an option"}
            </option>

            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className={isDark ? "bg-[#0d1114] text-white" : ""}
              >
                {option.label}
              </option>
            ))}
          </select>
        );

      case "phone":
        return (
          <FormPhoneInput
            name={name}
            value={value}
            onChange={onChange}
            defaultCountry={defaultCountry}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required={nativeValidation && validation.required}
            isDark={isDark}
          />
        );

      default:
        return (
          <input
            type={type}
            name={name}
            {...valueProps}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required={nativeValidation && validation.required}
            {...changeProps}
            className={inputClassName}
          />
        );
    }
  };

  return (
    <div className={`grid grid-cols-1 gap-x-7 gap-y-2.5 sm:gap-y-4 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {fields.map((field) => (
        <label
          key={field.name}
          className={`block ${columns === 2 && field.fullWidth ? "sm:col-span-2" : ""}`}
        >
          <span className={`block text-[10px] font-medium uppercase tracking-[0.15em] sm:text-xs ${isDark ? "text-white/55" : "text-black/50"}`}>
            {field.label}
          </span>

          {renderField(field)}

          {errors[field.name] && (
            <span className="mt-1.5 block text-xs text-red-500">
              {errors[field.name]}
            </span>
          )}
        </label>
      ))}
    </div>
  );
}