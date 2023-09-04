"use client";

import { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

import { useTheme } from "@/hooks/useTheme";
import type { Theme } from "@/hooks/useTheme";

export const ThemeSwitch = () => {
  const { theme, toggleTheme, setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") as Theme;
    setTheme(savedTheme);
  }, [setTheme]);

  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-2 border-black/100 hover:bg-gray-950 hover:text-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:hover:bg-white dark:hover:text-gray-950 dark:border dark:border-white"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <BsSun /> : <BsMoon />}
    </button>
  );
};
