import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from '@firebase/firestore';
import { db } from '../firebase-config';
import { getLocalStorage } from './storage';

const BASE_URL = 'http://localhost:5001';
const URL_CONTACTS = BASE_URL + '/contacts';
const usersCollection = collection(db, 'users');
const userId = getLocalStorage();

const checkResponse = (res: any) => {
  if (res.ok) {
    return res.json();
  } else {
  }
};

export const getUserAPIFirebase = async () => {
  const data = await getDocs(usersCollection);
  const fbResponse = data.docs[0].data();
  const result = data.docs.map((el) => ({
    name: fbResponse.name,
    contacts: fbResponse.contacts,
    id: el.id,
  }));
  return result[0]; // в будущем будет использоваться filter по id документа из куки, чтобы искать в массиве того юзера, который авторизовался, пока что берется 0-ой элемент
};

export const addUserAPIFirebase = async (newUser:any) => {
  await addDoc(usersCollection, newUser);
  return newUser;
}

export const addContactAPIFirebase = async (contacts: any) => {
  if (!userId) {
    alert('Пожалуйста, обновите приложение');
    return
  }
  const userDoc = doc(db, "users", userId);
  await updateDoc(userDoc, {"contacts": contacts})
}

export const deleteContactAPI = async (contacts: any) => {
  if (!userId) {
    alert('Пожалуйста, обновите приложение');
    return
  }
  const userDoc = doc(db, "users", userId);
  await updateDoc(userDoc, {"contacts": contacts})
}

export const editContactAPI = async (contacts: any) => {
  if (!userId) {
    alert('Пожалуйста, обновите приложение');
    return
  }
  const userDoc = doc(db, "users", userId);
  await updateDoc(userDoc, {"contacts": contacts})
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