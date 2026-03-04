// src/components/shared/ClientProviders.tsx
"use client";
import dynamic from "next/dynamic";
const ThemeApplier = dynamic(() => import("@/components/shared/ThemeApplier"),{ ssr: false });
const ToastContainer = dynamic(() => import("react-toastify").then((m) => m.ToastContainer), { ssr: false });

export default function ClientProviders() {
  return (
    <>
      <ThemeApplier />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  );
}