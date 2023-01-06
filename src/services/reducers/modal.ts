import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  isModalOpened: true,
  modalData: null,
}

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<any>) {
      state.isModalOpened = true;
      state.modalData = action.payload;
    },
    closeModal(state) {
      state.isModalOpened = false;
      state.modalData = null;
    }
  }
})