import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserContact {
  id: string,
  shortcut: string,
  name: string;
  phone: string;
}

export interface IUser {
  id: string,
  name: string,
  contacts: IUserContact[] | null,
}

interface IData {
  user: IUser | null,

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

export const UserDataSlice = createSlice({
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
      if (!state.user) {
        state.user = action.payload;
      }
    },
    userFetchingError(state) {
      state.userDataRequested = false;
      state.userFetchingError = true;
    },

    userAddingSuccess(state, action: PayloadAction<IUserContact[]>) {
      state.userDataRequested = false;
      state.contactAddingSuccess = true;
      state.contactAddingError = false;
      if (state.user) {
        state.user.contacts = action.payload;
      }
    },
    userAddingError(state) {
      state.userDataRequested = false;
      state.contactAddingError = true;
    },
    userEdditingSuccess(state, action: PayloadAction<IUserContact[]>) {
      state.userDataRequested = false;
      state.contactEditSuccess = true;
      state.contactEditError = false;
      if (state.user) {
        state.user.contacts = action.payload;
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
      if(state.user) {
        state.user.contacts = action.payload;
      }
    },
    userDeletingError(state) {
      state.userDataRequested = false;
      state.contactDeleteError = true;
    },
    userLogoutSuccess(state) {
      state.user = null;
      state.userDataRequested = false;
    },
    userLogoutError(state) {
      
    },
    userCreateSuccess(state) {
      console.log('user created')
    }
  }
})