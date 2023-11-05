// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-c165a.firebaseapp.com",
  projectId: "mern-c165a",
  storageBucket: "mern-c165a.appspot.com",
  messagingSenderId: "189062108821",
  appId: "1:189062108821:web:371f9ae02b87a8591f2d9c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);