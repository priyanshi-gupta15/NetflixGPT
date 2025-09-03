// src/FirebaseAuth.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2gfEJ_fVamw7Pv5S5-0V2vtu0JJ8Fwu0",
  authDomain: "netflixgpt-acae9.firebaseapp.com",
  projectId: "netflixgpt-acae9",
  storageBucket: "netflixgpt-acae9.firebasestorage.app",
  messagingSenderId: "389487971824",
  appId: "1:389487971824:web:0ce202c8adb188f81ea135",
  measurementId: "G-NRXHNB4E64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
