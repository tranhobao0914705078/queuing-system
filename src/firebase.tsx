// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWbMaXNmaB_V6CJgv7EJ4KDmlgzkyl0Tw",
  authDomain: "queuingsystem-4bd96.firebaseapp.com",
  projectId: "queuingsystem-4bd96",
  storageBucket: "queuingsystem-4bd96.appspot.com",
  messagingSenderId: "242782749233",
  appId: "1:242782749233:web:eb96edfec07eafc3dfcb10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
