import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyAroifV4pyJ-gZBsdjBP_JrdlMNUM8Knrs",
  authDomain: "employe-management-c2a2c.firebaseapp.com",
  projectId: "employe-management-c2a2c",
  storageBucket: "employe-management-c2a2c.appspot.com",
  messagingSenderId: "220701517243",
  appId: "1:220701517243:web:ea6d6cdd3d78bd4fc3909e",
  measurementId: "G-65XQ2FM7NL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db, collection, addDoc, getDocs, doc, deleteDoc };
