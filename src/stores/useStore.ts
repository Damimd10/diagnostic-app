import create from "zustand";

interface Store {
  selectedPatient: number | null;
  updateSelectedPatient: (hc: number) => void;
}

export const useStore = create<Store>((set) => ({
  selectedPatient: null,
  updateSelectedPatient: (hc: number) => set({ selectedPatient: hc }),
}));
