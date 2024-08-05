// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZrCf7ya_o4QWlPcIztzogDbDrtj5pLS8",
  authDomain: "notes-app-ab94d.firebaseapp.com",
  projectId: "notes-app-ab94d",
  storageBucket: "notes-app-ab94d.appspot.com",
  messagingSenderId: "251250160107",
  appId: "1:251250160107:web:2a14b6046fd4c26f6be9ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
