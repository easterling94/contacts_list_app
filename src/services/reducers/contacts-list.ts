import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TWhatToShow = 'all' | 'left' | 'right';

interface IContactListBehavior {
  whatToShow: TWhatToShow | null;
}

const initialState: IContactListBehavior = {
  whatToShow: null,
}

export const ContactsListSlicer = createSlice({
  name: 'contactsList',
  initialState,
  reducers: {
    changeContactsListBehavior (state, action: PayloadAction<TWhatToShow>) {
      state.whatToShow = action.payload
    },

  }
})