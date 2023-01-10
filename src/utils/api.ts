const BASE_URL = 'http://localhost:5001';
const URL_USERS = BASE_URL + '/users';

const checkResponse = (res: any) => {
  if (res.ok) {
    return res.json();
  } else {
  }
};

export const getUserAPI = async (cookie: string) => {
  /*
    Куки используются для авторизации и отправке персонафицированных данных на клиент
  */
  const data = await fetch(URL_USERS, {
    method: "GET",
    headers: {
      'Content-type': 'application/json',
      authorization: cookie,
    }
  }).then(checkResponse);
  return data;
};

/*
___________________________________________
*/

export const deleteContactAPI = async (user: any) => {
  const data = await fetch(`${URL_USERS} / ${user}`, {
    method: "DELETE",
    headers: {
      'Content-type': 'application/json',
    }
  }).then(checkResponse);
  return data;
}

export const editContactAPI = async (user: string) => {
  const data = await fetch(`${URL_USERS} / ${user}`, {
    method: "PUT", 
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(checkResponse);
  return data;
}

export const addContactAPI = async (contact: any) => {
  const data = await fetch(URL_USERS, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(contact)
  }).then(checkResponse);
  return data;
}