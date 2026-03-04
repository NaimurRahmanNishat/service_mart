// "use client";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";

// const ThemeApplier = () => {
//   const mode = useSelector((state: RootState) => state.theme.mode);

//   useEffect(() => {
//     const root = document.documentElement;

//     const applyTheme = (isDark: boolean) => {
//       root.classList.toggle("dark", isDark);
//     };

//     if (mode === "system") {
//       const media = window.matchMedia("(prefers-color-scheme: dark)");

//       applyTheme(media.matches);

//       const listener = (e: MediaQueryListEvent) => {
//         applyTheme(e.matches);
//       };

//       media.addEventListener("change", listener);
//       return () => media.removeEventListener("change", listener);
//     } else {
//       applyTheme(mode === "dark");
//     }
//   }, [mode]);

//   return null;
// };

// export default ThemeApplier;

















// src/components/shared/ThemeApplier.tsx
"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";

const ThemeApplier = () => {
  const mode = useAppSelector((state) => state.theme.mode);

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (isDark: boolean) => {
      if (isDark !== root.classList.contains("dark")) {
        root.classList.toggle("dark", isDark);
      }
    };

    if (mode === "system") {
      const media = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(media.matches);
      const listener = (e: MediaQueryListEvent) => applyTheme(e.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    } else {
      applyTheme(mode === "dark");
    }
  }, [mode]);

  return null;
};

export default ThemeApplier;
