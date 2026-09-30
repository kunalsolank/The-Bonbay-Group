
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
        border
        border-black/10
        bg-white
        text-black
        shadow-[0_24px_80px_rgba(0,0,0,0.15)]
      "
    >
       <div className="px-5 py-5 sm:px-7 sm:py-7 md:px-8 md:py-8">
        {state.success ? (
          <SuccessMessage onClose={onClose} />
        ) : (
          <>
            <div className="mb-3.5 sm:mb-4 pr-8 sm:pr-10">
              <p className="text-[10px] font-medium tracking-[0.2em] text-emerald-500 uppercase">INQUIRY</p>
              <h2 className="mt-1 text-xl font-medium text-black sm:text-2xl tracking-tight">Start a conversation</h2>
            </div>
            <form action={formAction} className="space-y-3 sm:space-y-4">
              <ReusableForm
                fields={CONTACT_FIELDS}
                values={formValues}
                errors={state.errors}
                onChange={handleFieldChange}
              />

              {state.errors.form && (
                <p className="text-xs sm:text-sm text-red-500">
                  {state.errors.form}
                </p>
              )}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  w-full
                  pt-2
                  sm:pt-3
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <p className="text-[10px] sm:text-[11px] leading-relaxed text-black/45 sm:max-w-[55%]">
                  By submitting this form, you agree to be contacted by our team.
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
