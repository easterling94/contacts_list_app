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

export const removeLocalStorageUser = (key: TKey) => {
  localStorage.removeItem(key)
}