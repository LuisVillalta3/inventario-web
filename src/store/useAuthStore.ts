import { create } from 'zustand'

export type AuthStore = {
  token: string
  setToken: (token: string) => void
}

const useAuthStore = create<AuthStore>((set) => ({
  token: localStorage.getItem('token') || '',
  setToken: (token) => set({ token })
}))

export default useAuthStore;
