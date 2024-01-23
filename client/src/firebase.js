// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-erooms.firebaseapp.com",
  projectId: "mern-erooms",
  storageBucket: "mern-erooms.appspot.com",
  messagingSenderId: "226758898463",
  appId: "1:226758898463:web:37a4b06aa5f6fdf57bf62a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);