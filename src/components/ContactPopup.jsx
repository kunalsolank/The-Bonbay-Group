import React, { useActionState, useEffect, useState } from "react";

import Modal from "./Modal";
import ReusableForm from "./ui/Form";

import { CONTACT_FIELDS } from "../constant/contact";
import { validateForm } from "../lib/formValidator";

import SubmitButton from "./ui/SubmitButton";
import SuccessMessage from "./ui/SucessMessage";

export default function ContactPopup({
  isOpen,
  onClose,
  onSubmit,
}) {
  const initialState = {
    errors: {},
    success: false,
    values: {},
  };

  const [formValues, setFormValues] = useState({});

  const handleFieldChange = (name, value) => {
    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  async function submitAction(previousState, formData) {
    const values = {
      ...Object.fromEntries(formData),
      ...formValues,
    };

    const errors = validateForm(values, CONTACT_FIELDS);

    if (Object.keys(errors).length > 0) {
      return {
        errors,
        success: false,
        values,
      };
    }

    try {
      if (onSubmit) {
        await onSubmit(values);
      }

      return {
        errors: {},
        success: true,
        values,
      };
    } catch (error) {
      return {
        errors: {
          form:
            error?.message ||
            "Something went wrong. Please try again.",
        },
        success: false,
        values,
      };
    }
  }

  const [state, formAction] = useActionState(
    submitAction,
    initialState
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      panelClassName="
        max-h-[calc(100vh-2rem)]
        max-w-4xl
        rounded-2xl
        border
        border-black/10
        bg-white
        p-0
        text-black
        shadow-[0_24px_80px_rgba(0,0,0,0.15)]
      "
      closeButtonClassName="
        text-black/40
        hover:text-black
      "
    >
      <div className="px-6 py-7 sm:px-10 sm:py-8">
        {state.success ? (
          <SuccessMessage onClose={onClose} />
        ) : (
          <>
            <div className="mb-5">
              <p className="text-xs font-medium tracking-[0.2em] text-emerald-500">
                INQUIRY
              </p>

              <h2 className="mt-2 text-2xl font-medium text-black sm:text-3xl">
                Start a conversation
              </h2>
            </div>

            <form
              action={formAction}
              className="space-y-5"
            >
              <ReusableForm
                fields={CONTACT_FIELDS}
                values={state.values}
                errors={state.errors}
                onChange={handleFieldChange}
              />

              {state.errors.form && (
                <p className="text-sm text-red-500">
                  {state.errors.form}
                </p>
              )}

              <div
                className="
                  flex
                  flex-col-reverse
                  items-start
                  gap-4
                  pt-1
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <p className="text-xs leading-relaxed text-black/40">
                  By submitting this form, you agree to be
                  contacted by our team.
                </p>

                <SubmitButton />
              </div>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
}