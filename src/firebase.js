// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhaSkm34Nx2y7coGXz3MqtGJnTK5bvlmc",
  authDomain: "resoobang.firebaseapp.com",
  projectId: "resoobang",
  storageBucket: "resoobang.appspot.com",
  messagingSenderId: "30185069717",
  appId: "1:30185069717:web:48cce00ef541dc3bee0f9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const userdb = getFirestore(app);