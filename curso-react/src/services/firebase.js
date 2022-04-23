import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD06noTTFfBq5bD7byvVMF14A6cW6BZSMU",
  authDomain: "backendsantiagomoyano.firebaseapp.com",
  projectId: "backendsantiagomoyano",
  storageBucket: "backendsantiagomoyano.appspot.com",
  messagingSenderId: "1068066348406",
  appId: "1:1068066348406:web:5c11fd3948e2d240136e57"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)