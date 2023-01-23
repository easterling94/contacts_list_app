import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ContactListSlice } from "./reducers/contact-list";
import { UserDataSlice } from "./reducers/user";
import { ModalSlice } from './reducers/modal';
import { LoaderSlice } from './reducers/loader';

const rootReducer = combineReducers({
  drag: ContactListSlice.reducer,
  user: UserDataSlice.reducer,
  modal: ModalSlice.reducer,
  loader: LoaderSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
