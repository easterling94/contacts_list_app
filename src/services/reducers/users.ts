import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../../types/data";
import { IUser } from "../../types/data";

const initialState: IData = {
  user: null,
  contactChosen: null,
  userDataRequested: false,
  userDataSuccess: false,
  userDataError: false,
}

export const UsersDataSlice = createSlice({
  name: "UsersData",
  initialState,
  reducers: {
    dataRequesting(state) {
      state.userDataRequested = true;
    },
    dataRequestingSuccess(state, action: PayloadAction<IUser>) {
      state.userDataRequested = false;
      state.userDataSuccess = true;
      state.userDataError = false;
      state.user = action.payload;
    },
    dataRequestingError(state, action: PayloadAction) {
      state.userDataRequested = false;
      state.userDataSuccess = false;
      state.userDataError = true;
    }
  }
})