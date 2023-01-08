import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IModalNew {
  title: string,
  data: {
    name: string,
    phone: string,
  }
}

export interface IModalDelete {
  title: string,
  data: null,
};

export interface IModalEdit {
  title: string,
  data: {
    name: string | undefined,
    phone: string | undefined,
  }
}

interface IInitialState {
  isModalOpened: boolean,
  modalData: null | IModalDelete | IModalEdit | IModalNew,
}

const initialState: IInitialState = {
  isModalOpened: false,
  modalData: null,
}

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<IModalEdit | IModalDelete | IModalNew>) {
      state.isModalOpened = true;
      state.modalData = action.payload;
    },
    closeModal(state) {
      state.isModalOpened = false;
      state.modalData = null;
    }
  }
})