const BASE_URL = 'http://localhost:5001';
const URL_CONTACTS = BASE_URL + '/users';

const checkResponse = (res: any) => {
  if (res.ok) {
    return res.json();
  } else {
  }
};

export const getUserAPI = async () => {
  const data = await fetch(URL_CONTACTS, {
    method: "GET",
    headers: {
      'Content-type': 'application/json',
    }
  }).then(checkResponse);
  return data;
};

export const deleteContactAPI = async (contactID: any) => {
  const data = await fetch(`${URL_CONTACTS}/${contactID}`, {
    method: "DELETE",
    headers: {
      'Content-type': 'application/json',
    }
  }).then(checkResponse);
  return data;
}

export const editContactAPI = async (contactID: any, contact: any) => {
  const data = await fetch(`${URL_CONTACTS}/${contactID}`, {
    method: "PUT", 
    body: JSON.stringify(contact),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(checkResponse);
  return data;
}

export const addContactAPI = async (contact: any) => {
  const data = await fetch(URL_CONTACTS, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(contact)
  }).then(checkResponse);
  return data;
}