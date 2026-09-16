export function validateForm(values, fields) {
  const errors = {};

  fields.forEach((field) => {
    const value = values[field.name];
    const rules = field.validation || {};

    // Required
    if (
      rules.required &&
      (!value || String(value).trim() === "")
    ) {
      errors[field.name] =
        rules.requiredMessage ||
        `${field.label} is required.`;

      return;
    }

    // If optional and empty, skip other validations
    if (!value) {
      return;
    }

    // Email
    if (rules.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(String(value))) {
        errors[field.name] =
          rules.emailMessage ||
          "Enter a valid email address.";
      }
    }

    // Minimum length
    if (
      rules.minLength &&
      String(value).length < rules.minLength
    ) {
      errors[field.name] =
        rules.minLengthMessage ||
        `${field.label} must be at least ${rules.minLength} characters.`;
    }

    // Maximum length
    if (
      rules.maxLength &&
      String(value).length > rules.maxLength
    ) {
      errors[field.name] =
        rules.maxLengthMessage ||
        `${field.label} must not exceed ${rules.maxLength} characters.`;
    }

    // Pattern
    if (rules.pattern && !rules.pattern.test(value)) {
      errors[field.name] =
        rules.patternMessage ||
        `${field.label} is invalid.`;
    }
  });

  return errors;
}