import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ContactList {
  width: number; 
}

const initialState: ContactList = {
  width: 300,
}

export const ContactListSlice = createSlice({
  name: "ContactList",
  initialState,
  reducers: {
    changeWidth(state, action: PayloadAction<number>) {
      state.width = action.payload
    }
  }
})