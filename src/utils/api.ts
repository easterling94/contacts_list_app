import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from '@firebase/firestore';
import { db } from '../firebase-config';
import { IUserContact } from '../services/reducers/users';

const BASE_URL = 'http://localhost:5001';
const URL_CONTACTS = BASE_URL + '/contacts';
const usersCollection = collection(db, 'users');

const checkResponse = (res: any) => {
  if (res.ok) {
    return res.json();
  } else {
  }
};


interface FirebaseResponse {
  contacts: IUserContact[],
  name: string,
  id: string,
}


export const getUserAPIFirebase = async () => {
  const data = await getDocs(usersCollection);
  const fbResponse = data.docs[0].data();
  const result = data.docs.map((el) => ({
    name: fbResponse.name,
    contacts: fbResponse.contacts,
    id: el.id,
  }));
  return result[0];
};

export const addUserAPIFirebase = async (newUser:any) => {
  await addDoc(usersCollection, newUser);
  return newUser;
}

export const addContactAPIFirebase = async (userId: string, contact: any) => 
{
  const userDoc = doc(db, "users", userId)
  await updateDoc(userDoc, contact)
  return contact;
}

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