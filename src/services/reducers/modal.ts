import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type TModalType = null | 'add' | 'edit' | 'delete';

export interface IModalData {
  data: {
    name: string | undefined,
    phone: string | undefined,
  }
}


interface IInitialState {
  isModalOpened: boolean,
  title: string | null,
  modalType: TModalType,
  modalData: null | IModalData,
}

const initialState: IInitialState = {
  isModalOpened: false,
  title: null,
  modalType: null,
  modalData: null,
}

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<{title: string, modalType: TModalType}>) {
      state.isModalOpened = true;
      state.title = action.payload.title;
      state.modalType = action.payload.modalType;
    },
    fillModal(state, action: PayloadAction<null | IModalData>) {
      state.modalData = action.payload;
    },
    closeModal(state) {
      state.isModalOpened = false;
      state.modalData = null;
    }
  }
})