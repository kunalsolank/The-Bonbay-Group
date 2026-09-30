
import { useFormStatus } from "react-dom";
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="
        w-full
        shrink-0
        rounded-full
        bg-gradient-to-r
        from-emerald-400
        to-blue-500
        px-6
        py-2.5
        sm:py-3
        text-xs
        sm:text-sm
        font-medium
        text-black
        cursor-pointer
        shadow-sm
        transition-all
        duration-200
        hover:opacity-95
        hover:shadow-md
        active:scale-[0.98]
        disabled:cursor-not-allowed
        disabled:opacity-60
        sm:w-auto
        sm:px-8
      "
    >
      {pending ? "Sending..." : "Send message"}
    </button>
  );
}

export default SubmitButton;
