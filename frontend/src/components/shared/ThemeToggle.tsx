// "use client";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState, AppDispatch } from "@/redux/store";
// import { toggleTheme } from "@/redux/features/theme/themeSlice";
// import { FaLaptop, FaMoon, FaSun } from "react-icons/fa";

// const ThemeToggle = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const mode = useSelector((state: RootState) => state.theme.mode);

//   return (
//     <button
//       onClick={() => dispatch(toggleTheme())}
//       className="p-2 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-400"
//       aria-label="Toggle theme"
//     >
//       {mode === "dark" && (
//         <FaSun />
//       )}

//       {mode === "light" && (
//         <FaMoon />
//       )}

//       {mode === "system" && (
//         <FaLaptop />
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;































// src/components/shared/ThemeToggle.tsx
"use client";
import { useCallback, memo } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleTheme } from "@/redux/features/theme/themeSlice";
import { FaMoon, FaSun, FaLaptop } from "react-icons/fa";

const THEME_ICONS = {
  dark: <FaSun aria-hidden="true" />,
  light: <FaMoon aria-hidden="true" />,
  system: <FaLaptop aria-hidden="true" />,
} as const;

const THEME_LABELS = {
  dark: "Switch to light mode",
  light: "Switch to dark mode",
  system: "Using system theme",
} as const;

type ThemeMode = keyof typeof THEME_ICONS;

const ThemeToggle = memo(() => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode) as ThemeMode;

  const handleToggle = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  return (
    <button
      onClick={handleToggle}
      type="button"
      className="p-2 cursor-pointer border-2 border-gray-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-400 transition-colors duration-200"
      aria-label={THEME_LABELS[mode]}
    >
      {THEME_ICONS[mode]}
    </button>
  );
});

ThemeToggle.displayName = "ThemeToggle";

export default ThemeToggle;


