import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
  isModalOpened: false,
  modalData: null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<any>) {
      state.isModalOpened = true,
      state.modalData = action.payload
    }
  }
})