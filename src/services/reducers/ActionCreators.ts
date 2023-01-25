import { AppDispatch } from "../store";
import { UserDataSlice } from "./user";
import { LoaderSlice } from './loader';
import { 
  getUserAPI,
  firestoreAPI,
  logoutAPI,
  createUserAPI,
} from "../../utils/api";
import { setLocalStorageArr } from '../../utils/storage';

export const fetchUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(UserDataSlice.actions.dataRequesting());
    dispatch(LoaderSlice.actions.showLoader());
    const resFirebase = await getUserAPI();
    if (resFirebase) {
      dispatch(UserDataSlice.actions.userFetchingSuccess(resFirebase))
    }
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

export const logout = () => async(dispatch: AppDispatch)=> {
  try {
    dispatch(UserDataSlice.actions.dataRequesting());
    dispatch(LoaderSlice.actions.showLoader());
    await logoutAPI();
    dispatch(UserDataSlice.actions.userLogoutSuccess())
  }
  catch {
    dispatch(UserDataSlice.actions.userLogoutError)
  }
}

export const createUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(UserDataSlice.actions.dataRequesting());
    dispatch(LoaderSlice.actions.showLoader());
    const newUserId = await createUserAPI(email, password);
    if(newUserId) {
      const test = {
        'userId': newUserId
      }
      setLocalStorageArr([test]);
    }
  }
  catch {

  }
}