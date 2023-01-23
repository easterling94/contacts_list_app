import { AppDispatch } from "../store";
import { UserDataSlice } from "./user";
import { LoaderSlice } from './loader';
import { 
  getUserAPIFirebase,
  firestoreAPI,
} from "../../utils/api";
import { setLocalStorageUser } from '../../utils/storage';

export const fetchUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(UserDataSlice.actions.dataRequesting());
    dispatch(LoaderSlice.actions.showLoader());
    const resFirebase = await getUserAPIFirebase();
    setLocalStorageUser(resFirebase.id)
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
    await firestoreAPI(contact);
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
    await firestoreAPI(contact);
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
    await firestoreAPI(contact);
    dispatch(UserDataSlice.actions.userDeletingSuccess(contact))
  }
  catch {

  }
}