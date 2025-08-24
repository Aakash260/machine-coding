// ToastProvider.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
  duration: number;
}

interface ToastContextProps {
  showToast: (message: string, type: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (
    message: string,
    type: ToastType,
    duration: number = 3000
  ) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, duration }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-5 right-5 space-y-3 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`px-4 py-2 rounded-lg shadow-md text-white animate-fade-in-down
              ${toast.type === "success" ? "bg-green-500" : ""}
              ${toast.type === "error" ? "bg-red-500" : ""}
              ${toast.type === "info" ? "bg-blue-500" : ""}
            `}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
