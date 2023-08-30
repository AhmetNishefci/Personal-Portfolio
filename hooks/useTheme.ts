import { create } from 'zustand';

export type Theme = "light" | "dark";

type ThemeStore = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void
};

export const useTheme = create<ThemeStore>((set) => ({
  theme: "dark",
  setTheme: (newTheme) => {
    window.localStorage.setItem("theme", newTheme);
    
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    set({ theme: newTheme });
  },
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      window.localStorage.setItem("theme", newTheme);

      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return { theme: newTheme };
    });
  },
}));
