import { AppDispatch } from "../store";
import { UsersDataSlice } from "./users";
import { getUserAPI, addContactAPI } from "../../utils/api";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(UsersDataSlice.actions.dataRequesting());
    const res = await getUserAPI('test');
    // пока что в стор передается первый объект, имитируя выдачу сервера исходя из кук
    dispatch(UsersDataSlice.actions.userFetchingSuccess(res.data[0]))
  }
  catch {

  }
}

export const addUser = (contact: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(UsersDataSlice.actions.dataRequesting());
    const res = await addContactAPI(contact);
    dispatch(UsersDataSlice.actions.userAddingSuccess(res))
  }
  catch {}
}