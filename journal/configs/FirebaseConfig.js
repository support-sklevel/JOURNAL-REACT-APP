// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSA0M1PxCGv4__-rBUpTIkNaCxW3X3Kok",
  authDomain: "journal-cb672.firebaseapp.com",
  projectId: "journal-cb672",
  storageBucket: "journal-cb672.appspot.com",
  messagingSenderId: "495377057681",
  appId: "1:495377057681:web:a17f4067b7f43a3d11bc30",
  measurementId: "G-3JBNJ67LGS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);