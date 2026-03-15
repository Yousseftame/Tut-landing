import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCSI_zawIqTd9Pxo02oHrclpMh6aPXv794",
  authDomain: "thinkstudio-tut.firebaseapp.com",
  projectId: "thinkstudio-tut",
  storageBucket: "thinkstudio-tut.firebasestorage.app",
  messagingSenderId: "472214115969",
  appId: "1:472214115969:web:75de3781309428bc5a5f80",
  measurementId: "G-DWX11F0QTT"
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const functions = getFunctions(app);

