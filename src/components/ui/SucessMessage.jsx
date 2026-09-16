function SuccessMessage({ onClose }) {
  return (
    <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-blue-500">
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 text-black"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M5 13l4 4L19 7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h3 className="mt-6 text-xl font-medium text-black">
        Message sent
      </h3>

      <p className="mt-2 max-w-sm text-sm text-black/50">
        Thanks for reaching out. Our team will get
        back to you shortly.
      </p>

      <button
        type="button"
        onClick={onClose}
        className="
          mt-8
          rounded-full
          border
          border-black/15
          px-6
          py-2.5
          text-sm
          text-black/70
          transition
          hover:bg-black/5
          hover:text-black
        "
      >
        Close
      </button>
    </div>
  );
}

export default SuccessMessage;