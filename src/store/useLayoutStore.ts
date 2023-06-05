import { create } from 'zustand'

export type LayoutStore = {
  isSidebarOpen: boolean
  toggleSidebar: () => void
  appTitle: string
  setAppTitle: (title: string) => void
}

const useLayoutStore = create<LayoutStore>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  appTitle: '',
  setAppTitle: (title: string) => set(() => ({ appTitle: title })),
}))

export default useLayoutStore;
