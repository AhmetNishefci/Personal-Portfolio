import { create } from 'zustand';

type ActiveSectionProps = {
    activeSection: string;
    setActiveSection: (section: string) => void;
    timeOfLastClick: number;
    setTimeOfLastClick: (time: number) => void;
}

export const useActiveSection = create<ActiveSectionProps>((set) => ({
  activeSection: 'Home',
  setActiveSection: (section) => set(() => ({ activeSection: section })),
  timeOfLastClick: 0,
  setTimeOfLastClick: (time) => set(() => ({ timeOfLastClick: time })),
}));
