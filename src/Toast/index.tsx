// App.tsx
"use client";
import React from "react";
import { ToastProvider, useToast } from "./Provider";

const ToastDemo = () => {
  const { showToast } = useToast();

  return (
    <div className="flex flex-col gap-4 p-5">
      <button
        onClick={() => showToast("This is a success!", "success")}
        className="bg-green-500 px-4 py-2 rounded text-white"
      >
        Show Success
      </button>

      <button
        onClick={() => showToast("Something went wrong!", "error")}
        className="bg-red-500 px-4 py-2 rounded text-white"
      >
        Show Error
      </button>

      <button
        onClick={() => showToast("This is some information.", "info")}
        className="bg-blue-500 px-4 py-2 rounded text-white"
      >
        Show Info
      </button>
    </div>
  );
};

export default function Toast() {
  return (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  );
}
