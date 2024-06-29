import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type State = {
  openModal: boolean
}
type Actions = {
  toggleModal: (open: boolean) => void
}

export const useModalState = create<State & Actions>()(
  immer((set) => ({
    openModal: false,
    toggleModal: (openModal) =>
      set((state) => {
        state.openModal = openModal
      }),
  }))
)
