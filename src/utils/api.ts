import { collection, getDocs , deleteDoc, updateDoc, doc, setDoc } from '@firebase/firestore';
import { db } from '../firebase-config';
import { getLocalStorageKey, setLocalStorageArr, removeLocalStorageUser } from './storage';
import { getAuth, signOut, deleteUser, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateEmail, updateProfile } from 'firebase/auth';

const ERROR_CODE_BAD_PASSWORD = 'auth/weak-password';
const ERROR_CODE_USER_NOT_FOUND = 'auth/user-not-found';
const ERROR_CODE_USER_IN_USE = 'auth/email-already-in-use';
const ERROR_CODE_WRONG_PASSWORD = 'auth/wrong-password';

const createUserCollection = async (userId: string) => {
  const usersCollection = doc(db, 'users', userId);
  const payload = {
    name: '',
    contacts: []
  }
  await setDoc(usersCollection, payload)
}

export const getUserAPI = async () => {
  const usersCollection = collection(db, 'users');
  const userId = getLocalStorageKey('userId');
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

export const getUserOtherInfoAPI = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    const displayName = user.displayName ? user.displayName : '';
    const email = user.email ? user.email : '';
    return {
      displayName: displayName,
      email: email,
    }
  }
  return {
    displayName: '',
    email: '',
  }
}

export const updateUserAPI = async (name: string, email: string) => {
  const auth = getAuth();
  if(auth.currentUser) {
    updateEmail(auth.currentUser, email).then(() => {
    }).catch((error) => {
      console.error(error.errorMessage)
    });
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
    }).catch((error) => {
      console.error(error.errorMessage)
    });
  }
  
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
  removeLocalStorageUser('userId');
}

export const loginAPI = async (email: string, password: string) => {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    if (user) {
      const uid = user.uid;
      const test = {
        userId: uid,
      };
      setLocalStorageArr([test]);
      }
    })
  .catch((error) => {
    const errorCode = error.code;
    if (errorCode === ERROR_CODE_WRONG_PASSWORD) {
      alert('Пожалуйста, проверьте пароль');
    }
    if (errorCode === ERROR_CODE_USER_NOT_FOUND) {
      removeLocalStorageUser('userId')
      alert('Такого пользователя не существует');
    }
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
      console.log(errorCode)
      if(errorCode === ERROR_CODE_BAD_PASSWORD) {
        alert('Пароль должен содержать хотя бы 6 символов!')
      }
      if(errorCode === ERROR_CODE_USER_IN_USE) {
        alert('Такой пользователь уже существует!')
      }
    });
  if(userId) {
    const test = {
      'userId': userId
    }
    setLocalStorageArr([test]);
    createUserCollection(userId);
  }
}

export const deleteUserAPI = async () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userId = getLocalStorageKey('userId');

  if(user && userId) {
  const usersCollection = doc(db, 'users', userId);
  await deleteDoc(usersCollection);
  await deleteUser(user).then(() => {
  }).catch((error) => {
    console.error(error.errorMessage)
  })
  removeLocalStorageUser('userId')
  }
}