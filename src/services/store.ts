import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ContactListSlice } from "./reducers/contact-list";
import { UsersDataSlice } from "./reducers/users";

const rootReducer = combineReducers({
  drag: ContactListSlice.reducer,
  user: UsersDataSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
