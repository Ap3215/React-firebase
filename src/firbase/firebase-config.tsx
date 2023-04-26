import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrrxcou-TmcJE8U0EVeXX1KxJKaMDFLBk",
  authDomain: "react-firebase-f4468.firebaseapp.com",
  projectId: "react-firebase-f4468",
  storageBucket: "react-firebase-f4468.appspot.com",
  messagingSenderId: "419893802019",
  appId: "1:419893802019:web:b06c0e66801aace6bded96",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);

export { projectStorage, projectFirestore };
