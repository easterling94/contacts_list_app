import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TModalType = null | 'new' | 'edit' | 'delete';

export interface IModalNew {
  title: string,
  modalType: TModalType,
  data: {
    name: string,
    phone: string,
  }
}

export interface IModalDelete {
  title: string,
  modalType: TModalType,
  data: null,
};

export interface IModalEdit {
  title: string,
  modalType: TModalType,
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