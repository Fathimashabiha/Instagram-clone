import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJT8GAhwhFL76Z-rsyA_lJaZT6tmA-va8",
  authDomain: "insta-clone-b5cab.firebaseapp.com",
  projectId: "insta-clone-b5cab",
  storageBucket: "insta-clone-b5cab.appspot.com",
  messagingSenderId: "654595291013",
  appId: "1:654595291013:web:3cbc41baca6fa83cbcb6ec"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()