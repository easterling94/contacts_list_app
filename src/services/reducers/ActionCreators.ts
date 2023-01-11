import { AppDispatch } from "../store";
import { UsersDataSlice } from "./users";
import { 
  getUserAPI,
  addContactAPI,
  editContactAPI,
  deleteContactAPI
} from "../../utils/api";

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(UsersDataSlice.actions.dataRequesting());
    const res = await getUserAPI();
    dispatch(UsersDataSlice.actions.userFetchingSuccess(res))
  }
  catch {
    dispatch(UsersDataSlice.actions.userFetchingError())
  }
}

export const addUser = (contact: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(UsersDataSlice.actions.dataRequesting());
    const res = await addContactAPI(contact);
    dispatch(UsersDataSlice.actions.userAddingSuccess(res))
  }
  catch {
    dispatch(UsersDataSlice.actions.userAddingError())
  }
}

export const editUser = (contactID: any, contact: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(UsersDataSlice.actions.dataRequesting());
    const res = await editContactAPI(contactID, contact);
    dispatch(UsersDataSlice.actions.userEdditingSuccess(res))
  }
  catch {
    dispatch(UsersDataSlice.actions.userEdditingError)
  }
}

export const deleteUser = (contactID: any) => async(dispatch: AppDispatch) => {
  try {
    dispatch(UsersDataSlice.actions.dataRequesting());
    const res = await deleteContactAPI(contactID);
    dispatch(UsersDataSlice.actions.userDeletingSuccess(contactID))
  }
  catch {

  }
}