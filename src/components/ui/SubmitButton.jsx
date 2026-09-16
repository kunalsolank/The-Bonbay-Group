
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
        px-8
        py-3
        text-sm
        font-medium
        text-black
        transition
        hover:opacity-90
        disabled:cursor-not-allowed
        disabled:opacity-60
        sm:w-auto
      "
    >
      {pending ? "Sending..." : "Send message"}
    </button>
  );
}

export default SubmitButton;
