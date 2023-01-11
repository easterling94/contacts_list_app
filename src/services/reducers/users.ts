import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from 'fs';

export interface IUserContacts {
  id: string,
  name: string;
  phone: string;
}

interface IData {
  userContacts: IUserContacts[] | null;

  userDataRequested: boolean;

  userFetchingSuccess: boolean;
  userFetchingError: boolean;

  contactAddingSuccess: boolean;
  contactAddingError: boolean;

  contactEditSuccess: boolean;
  contactEditError: boolean;

  contactDeleteSuccess: boolean;
  contactDeleteError: boolean;
}
const initialState: IData = {
  userContacts: null,

  userDataRequested: false,

  userFetchingSuccess: false,
  userFetchingError: false,

  contactAddingSuccess: false,
  contactAddingError: false,

  contactEditSuccess: false,
  contactEditError: false,

  contactDeleteSuccess: false,
  contactDeleteError: false,
}

export const UsersDataSlice = createSlice({
  name: "UsersData",
  initialState,
  reducers: {
    dataRequesting(state) {
      state.userDataRequested = true;

      state.userFetchingSuccess = false;
      state.userFetchingError = false;

      state.contactAddingSuccess = false;
      state.contactAddingError = false;

      state.contactEditSuccess = false;
      state.contactEditError = false;

      state.contactDeleteSuccess = false;
      state.contactDeleteError = false;
    },

    userFetchingSuccess(state, action: PayloadAction<IUserContacts[]>) {
      state.userDataRequested = false;
      state.userFetchingSuccess = true;
      state.userFetchingError = false;
      state.userContacts = action.payload;
    },
    userFetchingError(state) {
      state.userDataRequested = false;
      state.userFetchingError = true;
    },

    userAddingSuccess(state, action: PayloadAction<IUserContacts>) {
      state.userDataRequested = false;
      state.contactAddingSuccess = true;
      state.contactAddingError = false;
      if (state.userContacts) {
        state.userContacts = [...state.userContacts, action.payload];
      }
    },
    userAddingError(state) {
      state.userDataRequested = false;
      state.contactAddingError = true;
    },
    userEdditingSuccess(state, action: PayloadAction<IUserContacts>) {
      state.userDataRequested = false;
      state.contactEditSuccess = true;
      state.contactEditError = false;
      if (state.userContacts) {
        state.userContacts = state.userContacts?.map((el) => {
          if (el.id !== action.payload.id) return el;
          return action.payload;
        })
      } 
    },
    userEdditingError(state) {
      state.userDataRequested = false;
      state.contactEditError = true;
    },
    userDeletingSuccess(state, action: PayloadAction<any>) {
      state.userDataRequested = false;
      state.contactDeleteSuccess = true;
      state.contactDeleteError = false;
      if(state.userContacts) {
        state.userContacts = state.userContacts.filter((el) => {
          return el.id !== action.payload
        })
      }
    },
    userDeletingError(state) {
      state.userDataRequested = false;
      state.contactDeleteError = true;
    },
  }
})