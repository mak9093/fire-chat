import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkuVewhJoLUupHQZbmx4YIOqr_T5X093A",
  authDomain: "chatapp-ddd65.firebaseapp.com",
  projectId: "chatapp-ddd65",
  storageBucket: "chatapp-ddd65.appspot.com",
  messagingSenderId: "576034560045",
  appId: "1:576034560045:web:dc02e41d507a5b45e280a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
