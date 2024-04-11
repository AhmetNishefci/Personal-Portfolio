"use client";

import { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

import { useTheme } from "@/hooks/useTheme";
import type { Theme } from "@/hooks/useTheme";

export const ThemeSwitch = () => {
  const { theme, toggleTheme, setTheme } = useTheme();

  useEffect(() => {
    const savedTheme =
      (window.localStorage.getItem("theme") as Theme) || "dark";
    setTheme(savedTheme);
  }, [setTheme]);

  console.log("theme", theme);

  return (
    <button
      className="fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-2 border-black/100 hover:bg-gray-950 hover:text-white border-opacity-40 shadow-xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all transform duration-500 ease-in-out dark:bg-gray-950 dark:hover:bg-white dark:hover:text-gray-950 dark:border dark:border-white"
      onClick={toggleTheme}
      style={{
        transition: "all 0.5s ease",
        transform: `rotate(${theme === "dark" ? 180 : 0}deg)`,
      }}
    >
      {theme === "dark" ? (
        <BsSun className="w-5 h-5  " />
      ) : (
        <BsMoon className="w-5 h-5 " />
      )}
    </button>
  );
};
