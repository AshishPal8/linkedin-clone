import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXvK27L7Z4jtXpq8ElyGG9RuiChFAo9dY",
  authDomain: "linkedin-clone-1cfe0.firebaseapp.com",
  projectId: "linkedin-clone-1cfe0",
  storageBucket: "linkedin-clone-1cfe0.appspot.com",
  messagingSenderId: "597437981580",
  appId: "1:597437981580:web:edfe522a4b84271c436ca9",
  measurementId: "G-P5JTWL346T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
