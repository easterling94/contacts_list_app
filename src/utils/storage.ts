export const setLocalStorage = (userId: string): void => {
  localStorage.setItem('userId', userId)
}

export const getLocalStorage = () => {
  return localStorage.getItem("userId")
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