import { create } from "zustand";

export type Theme = "light" | "dark";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const useTheme = create<ThemeStore>((set) => ({
  theme: (window.localStorage.getItem("theme") as Theme) || "dark",
  setTheme: (newTheme) => {
    window.localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
    set({ theme: newTheme });
  },
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      window.localStorage.setItem("theme", newTheme);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(newTheme);
      return { theme: newTheme };
    });
  },
}));
