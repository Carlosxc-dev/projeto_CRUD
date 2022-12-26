import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhm3RnI2UUrrWuQJCD_f9PY8x0jhjVoYg",
  authDomain: "projetocrud-3df51.firebaseapp.com",
  projectId: "projetocrud-3df51",
  storageBucket: "projetocrud-3df51.appspot.com",
  messagingSenderId: "469575025248",
  appId: "1:469575025248:web:67d3af1c95d0bd27f4f905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)