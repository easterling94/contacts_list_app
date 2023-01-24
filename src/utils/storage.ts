type TKey = 'userId';

interface IUserData {
  [key: string]: string,
}

const setLocalStorage = (el: IUserData) => {
  const userField = Object.keys(el);
  localStorage.setItem(userField[0], el[userField[0]])
}

export const setLocalStorageArr = (arr: IUserData[]) => {
  arr.forEach(el => {
    setLocalStorage(el)
  })
}

export const getLocalStorageKey = (key: TKey) => {
  return localStorage.getItem(key)
}

export const removeLocalStorageUser = () => {
  localStorage.removeItem('userId')
}

export const setCookie = (): void => {
  const today = new Date(Date());
  const expDate = new Date(today.getFullYear(),today.getMonth() + 1,today.getDate())
  window.document.cookie = 'user=user; expires=' + expDate;
}

export const getCookie = (): void => {
  // let cookie = document.cookie;
  // cookie.match('user')
  // return document.cookie
}

