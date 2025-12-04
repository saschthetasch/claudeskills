"use client";

import { useEffect, useState } from "react";
import { CheckCircle, XCircle, Info, X } from "lucide-react";
import { type Toast as ToastType } from "@/lib/useToast";
import { cn } from "@/lib/utils";

interface ToastProps {
  toast: ToastType;
  onRemove: (id: string) => void;
}

const icons = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
};

const styles = {
  success: "bg-green-900/90 border-green-700 text-green-100",
  error: "bg-red-900/90 border-red-700 text-red-100",
  info: "bg-blue-900/90 border-blue-700 text-blue-100",
};

const iconStyles = {
  success: "text-green-400",
  error: "text-red-400",
  info: "text-blue-400",
};

export function Toast({ toast, onRemove }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  const Icon = icons[toast.type];

  useEffect(() => {
    // Trigger enter animation
    const enterTimer = setTimeout(() => setIsVisible(true), 10);

    // Start exit animation after 2.7s (leaving 300ms for exit animation)
    const exitTimer = setTimeout(() => {
      setIsLeaving(true);
    }, 2700);

    // Remove toast after 3s
    const removeTimer = setTimeout(() => {
      onRemove(toast.id);
    }, 3000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [toast.id, onRemove]);

  const handleClose = () => {
    setIsLeaving(true);
    setTimeout(() => onRemove(toast.id), 300);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg backdrop-blur-sm",
        "transform transition-all duration-300 ease-out",
        styles[toast.type],
        isVisible && !isLeaving
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0"
      )}
    >
      <Icon className={cn("w-5 h-5 flex-shrink-0", iconStyles[toast.type])} />
      <p className="text-sm font-medium flex-1">{toast.message}</p>
      <button
        onClick={handleClose}
        className="p-1 rounded hover:bg-white/10 transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
