// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpcbBpsSVFyrfDR01a74ABGbTkNnjMga8",
  authDomain: "examples-a387e.firebaseapp.com",
  projectId: "examples-a387e",
  storageBucket: "examples-a387e.firebasestorage.app",
  messagingSenderId: "215166169212",
  appId: "1:215166169212:web:1e50390bb8c8a8d5b659f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
