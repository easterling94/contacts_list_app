import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from '@firebase/firestore';
import { db } from '../firebase-config';
import { getLocalStorageKey } from './storage';
import { getAuth, signOut, deleteUser, createUserWithEmailAndPassword } from 'firebase/auth';

export const getUserAPI = async () => {
  const usersCollection = collection(db, 'users');
  const userId = getLocalStorageKey('userId');
  console.log(userId)
  const data = await getDocs(usersCollection);
  const fbResponse = data.docs.filter(doc => doc.id === userId)[0].data();
  if (userId) {
    const result = {
      name: fbResponse.name,
      contacts: fbResponse.contacts,
      id: userId,
    }
    return result;
  }
};

export const addUserAPIFirebase = async (newUser:any) => {
  const usersCollection = collection(db, 'users');
  await addDoc(usersCollection, newUser);
  return newUser;
}

export const firestoreAPI = async (contacts: any) => {
  const userId = getLocalStorageKey('userId');
  if (!userId) {
    alert('Пожалуйста, обновите страницу');
    return
  }
  const userDoc = doc(db, "users", userId);
  await updateDoc(userDoc, {"contacts": contacts})
}

export const logoutAPI = async () => {
  const auth = getAuth();
  await signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        console.error(error);
      });
}

export const createUserAPI = async (email: string, password: string) => {
  const auth = getAuth();
  const userId = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return userCredential.user.uid
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage)
      return null
    });
  console.log(userId)
  return userId
}

export const deleteUserAPI = async () => {

}