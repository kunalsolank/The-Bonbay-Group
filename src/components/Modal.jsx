import React from "react";

export default function Modal({
  isOpen,
  onClose,
  children,
  panelClassName = "bg-white p-6 max-w-md",
  closeButtonClassName = "text-gray-400 hover:text-gray-600",
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2 transition-opacity duration-300 sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className={`relative w-full transform overflow-hidden rounded-xl shadow-2xl transition-all ${panelClassName}`}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          className={`absolute right-4 top-4 transition-colors ${closeButtonClassName}`}
          aria-label="Close modal"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
