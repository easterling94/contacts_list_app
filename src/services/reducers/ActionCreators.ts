import { AppDispatch } from "../store";
import { UsersDataSlice } from "./users";
import { getUsers } from "../../utils/api";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(UsersDataSlice.actions.dataRequesting());
    const res = await getUsers('test');
    // пока что в стор передается первый объект, имитируя выдачу сервера исходя из кук
    dispatch(UsersDataSlice.actions.dataRequestingSuccess(res.data[0]))
  }
  catch {

  }
}