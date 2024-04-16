import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-app-c09d0.firebaseapp.com",
  projectId: "react-chat-app-c09d0",
  storageBucket: "react-chat-app-c09d0.appspot.com",
  messagingSenderId: "278830626278",
  appId: "1:278830626278:web:36c65e0a1302335eaa9227",
  measurementId: "G-L2R0NE5GSG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()