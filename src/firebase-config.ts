import { initializeApp} from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAauc78trZ5fZRbwMIo4CwCCnVHrcZFRvY",
  authDomain: "contacts-list-prod.firebaseapp.com",
  projectId: "contacts-list-prod",
  storageBucket: "contacts-list-prod.appspot.com",
  messagingSenderId: "705010358205",
  appId: "1:705010358205:web:af7bcf7f74f5fc7b60e4d4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);