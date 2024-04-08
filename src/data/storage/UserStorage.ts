import { create } from 'zustand'

interface BearState {
  logged: boolean;
}

export const userStorage = create<BearState>()((set) => ({
  logged: true,
}));


export const setUserLogged = () => {
  userStorage.setState((prev) => ({
    ...prev,
    logged: !prev.logged,
  }))
}