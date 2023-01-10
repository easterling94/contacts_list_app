import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserContacts {
  id: string,
  name: string;
  phone: string;
}

interface IUser {
  id: string;
  name: string;
  contacts: IUserContacts[];
}

interface IData {
  user: IUser | null;

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
  user: null,

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

    userFetchingSuccess(state, action: PayloadAction<IUser>) {
      state.userDataRequested = false;
      state.userFetchingSuccess = true;
      state.userFetchingError = false;
      state.user = action.payload;
    },
    userFetchingError(state) {
      state.userDataRequested = false;
      state.userFetchingSuccess = false;
      state.userFetchingError = true;
    },

    userAddingSuccess(state, action: PayloadAction<IUserContacts>) {
      state.userDataRequested = false;
      state.contactAddingSuccess = true;
      state.contactAddingError = false;
      if (state.user) {
        state.user.contacts = [...state.user.contacts, action.payload];
      }
    }
  }
})