import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title: string;
}

export function BaseModal({ open, title="Modal", onOpenChange, children }: BaseModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                className="fixed left-1/2 top-1/2 w-[90%] max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-xl bg-surfase px-4 py-2 shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              >
                <header className="flex justify-between items-center border-b border-gray-200 py-2">
                  <h2 className="font-medium text-title">{title}</h2>
                <Dialog.Close asChild>
                  <button className="text-paragraph hover:text-title cursor-pointer">
                    <X size={20} />
                  </button>
                </Dialog.Close>
                </header>
                {children}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
