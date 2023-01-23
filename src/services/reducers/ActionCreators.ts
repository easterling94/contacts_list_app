import { AppDispatch } from "../store";
import { UserDataSlice } from "./user";
import { LoaderSlice } from './loader';
import { 
  getUserAPIFirebase,
  addContactAPIFirebase,
  addContactAPI,
  editContactAPI,
  deleteContactAPI,
} from "../../utils/api";
import { setLocalStorage } from '../../utils/storage';

export const fetchUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(UserDataSlice.actions.dataRequesting());
    dispatch(LoaderSlice.actions.showLoader());
    const resFirebase = await getUserAPIFirebase();
    setLocalStorage(resFirebase.id)
    dispatch(UserDataSlice.actions.userFetchingSuccess(resFirebase))
  }
  catch {
    dispatch(UserDataSlice.actions.userFetchingError())
  }
}

export const addContact = (contact: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(UserDataSlice.actions.dataRequesting());
    dispatch(LoaderSlice.actions.showLoader());
    await addContactAPIFirebase(contact);
    dispatch(UserDataSlice.actions.userAddingSuccess(contact))
  }
  catch {
    dispatch(UserDataSlice.actions.userAddingError())
  }
}

export const editContact = (contact: any) => async (dispatch: AppDispatch) => {
  try {
    dispatch(UserDataSlice.actions.dataRequesting());
    dispatch(LoaderSlice.actions.showLoader());
    await editContactAPI(contact);
    dispatch(UserDataSlice.actions.userEdditingSuccess(contact))
  }
  catch {
    dispatch(UserDataSlice.actions.userEdditingError)
  }
}

export const deleteContact = (contact: any) => async(dispatch: AppDispatch) => {
  try {
    dispatch(UserDataSlice.actions.dataRequesting());
    dispatch(LoaderSlice.actions.showLoader());
    await deleteContactAPI(contact);
    dispatch(UserDataSlice.actions.userDeletingSuccess(contact))
  }
  catch {

  }
}