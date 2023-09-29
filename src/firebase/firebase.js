// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyBGZJspS0LXwImXWvzPc9SaYNaNLRflnXI",
  authDomain: "linkein-clone-bf12a.firebaseapp.com",
  projectId: "linkein-clone-bf12a",
  storageBucket: "linkein-clone-bf12a.appspot.com",
  messagingSenderId: "502849996156",
  appId: "1:502849996156:web:075497298982bd6c0dd0f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);