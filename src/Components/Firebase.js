import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
  const firebaseConfig = {
  apiKey: "AIzaSyDQz6XSzkEn-rn8wc5WXW8LC-5WVzkSaTs",
  authDomain: "react-9a27e.firebaseapp.com",
  projectId: "react-9a27e",
  storageBucket: "react-9a27e.firebasestorage.app",
  messagingSenderId: "992456428534",
  appId: "1:992456428534:web:aaef8caaadf1706cf1d5d7",
  measurementId: "G-2X46YVKW7V"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {auth,db}