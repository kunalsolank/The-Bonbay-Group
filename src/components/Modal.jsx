import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { twMerge } from "tailwind-merge";
export default function Modal({
  isOpen,
  onClose,
  children,
  panelClassName = "",
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={twMerge(
          `
            w-[calc(100vw-1.5rem)]
            max-w-[95vw]
            sm:max-w-[500px]
            md:max-w-[540px]
            h-auto
            max-h-[calc(100dvh-2rem)]
            max-h-[calc(100vh-2rem)]
            overflow-y-auto
            overscroll-contain
            rounded-2xl
            p-0
          `,
          panelClassName
        )}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}
