import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPOgXvL85JUqNLQF64b2QaYBbsgaZ-BxQ",
  authDomain: "autenticacion-e7199.firebaseapp.com",
  projectId: "autenticacion-e7199",
  storageBucket: "autenticacion-e7199.appspot.com",
  messagingSenderId: "605429278700",
  appId: "1:605429278700:web:92c69d8e313bc728b702c9"
};

initializeApp(firebaseConfig);

const db = getFirestore()
const storage = getStorage()

export { db, storage }