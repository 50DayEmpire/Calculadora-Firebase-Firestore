// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0qsyR231H-9TyfuIwHsoLjlViZUwBUYo",
  authDomain: "crud-react-redux-84de0.firebaseapp.com",
  projectId: "crud-react-redux-84de0",
  storageBucket: "crud-react-redux-84de0.firebasestorage.app",
  messagingSenderId: "433562488747",
  appId: "1:433562488747:web:347f7d385c677cc8f10cee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

export { db, auth, googleAuthProvider };
