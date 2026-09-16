export const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Technical Support",
  "Sales",
  "Partnership",
  "Other",
];

export const CONTACT_FIELDS = [
  {
    name: "fullName",
    label: "FULL NAME",
    type: "text",
    placeholder: "Your name",
    autoComplete: "name",

    validation: {
      required: true,
      requiredMessage: "Enter your name.",
    },
  },

  {
    name: "email",
    label: "EMAIL ADDRESS",
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",

    validation: {
      required: true,
      requiredMessage: "Enter your email.",
      email: true,
      emailMessage: "Enter a valid email.",
    },
  },

  {
    name: "phone",
    label: "PHONE NUMBER",
    type: "phone",
    placeholder: "Phone number",
    autoComplete: "tel",
    defaultCountry: "ae",

    validation: {
      required: false,
    },
  },

  {
    name: "phone",
    label: "PHONE NUMBER",
    type: "phone",
    placeholder: "Phone number",
    autoComplete: "tel",
    defaultCountry: "ae",

    validation: {
      required: false,
    },
  },
  {
    name: "subject",
    label: "SUBJECT",
    type: "select",
    placeholder: "Select an option",

    options: SUBJECT_OPTIONS.map((option) => ({
      label: option,
      value: option,
    })),

    validation: {
      required: true,
      requiredMessage: "Choose a subject.",
    },
  },

  {
    name: "message",
    label: "MESSAGE",
    type: "textarea",
    placeholder: "How can we help?",
    rows: 3,
    fullWidth: true,

    validation: {
      required: true,
      requiredMessage: "Add a short message.",
      minLength: 5,
      minLengthMessage:
        "Message must be at least 5 characters.",
    },
  },
];

