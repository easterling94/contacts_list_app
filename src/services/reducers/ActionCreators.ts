import { AppDispatch } from "../store";
import { UserDataSlice } from "./user";
import { LoaderSlice } from './loader';
import { 
  getUserAPI,
  firestoreAPI,
  logoutAPI,
  loginAPI,
  createUserAPI,
  getUserOtherInfoAPI,
  updateUserAPI,
  deleteUserAPI,
} from "../../utils/api";

export const fetchUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(UserDataSlice.actions.dataRequesting());
    dispatch(LoaderSlice.actions.showLoader());
    const resFirebase = await getUserAPI();
    if (resFirebase) {
      dispatch(UserDataSlice.actions.userFetchingSuccess(resFirebase))
      dispatch(fetchUserOtherInfo());
    }
    return true
  }
  catch {
    dispatch(UserDataSlice.actions.userFetchingError())
    return false
  }
}

export const fetchUserOtherInfo = () => async (dispatch: AppDispatch) => {
  const userOtherInfo = await getUserOtherInfoAPI();
  if(userOtherInfo) {
    dispatch(UserDataSlice.actions.userFetchOtherInfoSuccess(userOtherInfo))
  }
}

export const updateUser = (name: string, email: string) => async (dispatch: AppDispatch) => {
  const newUserInfo = {
    displayName: name,
    email: email,
  }
  await updateUserAPI(name, email);
  dispatch(UserDataSlice.actions.userFetchOtherInfoSuccess(newUserInfo))
  dispatch(LoaderSlice.actions.showLoader());
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

export const login = (email: string, password: string) => async (dispatch:AppDispatch) => {
  try {
    dispatch(UserDataSlice.actions.dataRequesting());
    dispatch(LoaderSlice.actions.showLoader());
    await loginAPI(email, password);
    dispatch(UserDataSlice.actions.userLoginSuccess());
    dispatch(fetchUser());
  }
  catch {
    dispatch(UserDataSlice.actions.userLoginError());
  }
}

export const createUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(UserDataSlice.actions.dataRequesting());
    dispatch(LoaderSlice.actions.showLoader());
    await createUserAPI(email, password);
    dispatch(fetchUser());
  }
  catch {

  }
}

export const deleteUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(LoaderSlice.actions.showLoader());
    await deleteUserAPI();
    dispatch(UserDataSlice.actions.userDeleteSuccess())
  }
  catch {

  }

}