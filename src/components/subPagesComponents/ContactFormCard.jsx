import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_FIELDS } from "../../constant/contact";
import { validateForm } from "../../lib/formValidator";
import submitContactForm from "../../services/contact";
import ReusableForm from "../ui/Form";

export default function ContactFormCard() {
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldInput = (event) => {
    const { name } = event.target;
    if (!name || (!formErrors[name] && !formErrors.form)) return;

    setFormErrors((previous) => {
      const next = { ...previous };
      delete next[name];
      delete next.form;
      return next;
    });
  };

  const handleSubmit = async (payload) => {
    const values = payload?.values || payload;

    try {
      await submitContactForm(values);
      return { errors: {}, success: true, values };
    } catch (error) {
      return {
        errors: {
          form: error?.message || "Something went wrong. Please try again.",
        },
        success: false,
        values,
      };
    }
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(
      CONTACT_FIELDS.map(({ name }) => [name, formData.get(name) ?? ""]),
    );
    const validationErrors = validateForm(values, CONTACT_FIELDS);

    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    try {
      const result = await handleSubmit({ values });
      setFormErrors(result.errors);
      if (result.success) setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1114] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.28)] md:p-10 lg:p-12"
    >
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#00ff87]/8 blur-[100px]"
        aria-hidden="true"
      />

      {!submitted ? (
        <form
          onSubmit={onFormSubmit}
          onInput={handleFieldInput}
          className="relative space-y-7"
        >
          <div className="mb-10 flex items-start justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#00ff87]">
                Inquiry
              </p>
              <h3 className="mt-3 text-2xl font-medium">
                Start a conversation
              </h3>
            </div>

            <span className="font-mono text-xs text-white/40">01 — 04</span>
          </div>

          <ReusableForm
            fields={CONTACT_FIELDS}
            errors={formErrors}
            theme="dark"
            columns={2}
            nativeValidation
            uncontrolled
          />

          <div className="flex flex-col gap-5 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xs">
              {formErrors.form ? (
                <p role="alert" className="text-xs leading-5 text-red-400">
                  {formErrors.form}
                </p>
              ) : (
                <p className="text-[11px] leading-5 text-white/45">
                  By submitting this form, you agree to be contacted by our
                  team regarding your enquiry.
                </p>
              )}
            </div>

            <motion.button
              whileHover={isSubmitting ? undefined : { scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSubmitting}
              className="inline-flex shrink-0 items-center justify-center gap-4 rounded-2xl bg-linear-to-r from-[#00ff87] to-[#1fa864] px-7 py-4 text-sm font-semibold text-[#07110b] shadow-[0_10px_40px_rgba(0,255,135,0.12)] transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send message"}
              {!isSubmitting && <span>↗</span>}
            </motion.button>
          </div>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex min-h-125 flex-col items-center justify-center text-center"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#00ff87]/40 bg-[#00ff87]/10 text-3xl text-[#00ff87]">
            ✓
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[#00ff87]">
            Message received
          </p>
          <h3 className="mt-4 text-3xl font-medium">
            Thank you for reaching out.
          </h3>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
            Your enquiry has been submitted successfully. A member of our team
            will get back to you shortly.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 text-sm text-white/60 transition-colors hover:text-[#00ff87]"
          >
            Send another message →
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
