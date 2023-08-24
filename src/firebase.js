// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmwXfLbzhjjSyDZl2il71j53g1bXJXXfg",
  authDomain: "fir-auth-39f58.firebaseapp.com",
  projectId: "fir-auth-39f58",
  storageBucket: "fir-auth-39f58.appspot.com",
  messagingSenderId: "29039366211",
  appId: "1:29039366211:web:dd7683bd2ad42ac11d44f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

