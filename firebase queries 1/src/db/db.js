import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA8IV1mOcq5uxLGp86pMY9z3Yl_NdMm7Hs",
  authDomain: "users-list-d7cfb.firebaseapp.com",
  projectId: "users-list-d7cfb",
  storageBucket: "users-list-d7cfb.appspot.com",
  messagingSenderId: "965682292723",
  appId: "1:965682292723:web:c702d002f3790396d3d486"
};

initializeApp(firebaseConfig);

export const db = getFirestore()