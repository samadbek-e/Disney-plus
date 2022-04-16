import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD_yYGnUR6lln64AYYcLj09QIaI3xSnL8g",
  authDomain: "disneyplus-clone-pro.firebaseapp.com",
  projectId: "disneyplus-clone-pro",
  storageBucket: "disneyplus-clone-pro.appspot.com",
  messagingSenderId: "369113587583",
  appId: "1:369113587583:web:cbec73eaabeaaf2df3444a",
  measurementId: "G-H5SK28DFFL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db
