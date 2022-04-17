import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDSk8_TyT1wtO0qfvqZPhKoN9o93rfZSrA',

  authDomain: 'disneyplus-pro.firebaseapp.com',

  projectId: 'disneyplus-pro',

  storageBucket: 'disneyplus-pro.appspot.com',

  messagingSenderId: '1057958194050',

  appId: '1:1057958194050:web:839d8cd7ac79ca8bfdfd9b',
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
