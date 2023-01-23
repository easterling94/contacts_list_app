import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from '@firebase/firestore';
import { db } from '../firebase-config';
import { getLocalStorageUser } from './storage';

const usersCollection = collection(db, 'users');
const userId = getLocalStorageUser();

export const getUserAPIFirebase = async () => {
  const data = await getDocs(usersCollection);
  const fbResponse = data.docs.filter(doc => doc.id === userId)[0].data();
  const result = data.docs.map((el) => ({
    name: fbResponse.name,
    contacts: fbResponse.contacts,
    id: el.id,
  }));
  console.log(result)
  return result[0];
};

export const addUserAPIFirebase = async (newUser:any) => {
  await addDoc(usersCollection, newUser);
  return newUser;
}

export const firestoreAPI = async (contacts: any) => {
  if (!userId) {
    alert('Пожалуйста, обновите приложение');
    return
  }
  const userDoc = doc(db, "users", userId);
  await updateDoc(userDoc, {"contacts": contacts})
}