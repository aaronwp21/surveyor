import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  setUser: (person) => set({ user: person }),
}));

export default useStore;

export const selectUser = (state) => state.user;

export const setUser = (state) => state.setUser;
