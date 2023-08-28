// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9dnGgteGGcvyzTKx3s2HyxbOhpWHbA0Y",
  authDomain: "auth-development-c6674.firebaseapp.com",
  projectId: "auth-development-c6674",
  storageBucket: "auth-development-c6674.appspot.com",
  messagingSenderId: "648200970193",
  appId: "1:648200970193:web:3e82b31ce9e940e58b4af0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
