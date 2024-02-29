import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAN1V6By4f67GMKiTZT4m3OYGhshl53CPo',
  authDomain: 'feedback-app-b7f3a.firebaseapp.com',
  projectId: 'feedback-app-b7f3a',
  storageBucket: 'feedback-app-b7f3a.appspot.com',
  messagingSenderId: '442951436047',
  appId: '1:442951436047:web:516f07eaaa745339a2607a'
};

const appFireBase = initializeApp(firebaseConfig);
const db = getFirestore(appFireBase);
const dataBase = getDatabase(appFireBase);

export { appFireBase, db, dataBase, collection, addDoc, doc, getDoc, setDoc, getDocs };
