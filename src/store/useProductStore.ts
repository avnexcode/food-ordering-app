import { create } from 'zustand';

export const useProductStore = create(set => ({
    bears: 0,
    increasePopulation: () =>
        set((state: { bears: number }) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears: number) => set({ bears: newBears }),
}));
