import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlQURdBwwfHHtEO6I_gYTdM7fLh1lUNv4",
  authDomain: "auth-80906.firebaseapp.com",
  projectId: "auth-80906",
  storageBucket: "auth-80906.firebasestorage.app",
  messagingSenderId: "70522560315",
  appId: "1:70522560315:web:4c19239f692d4b8f36611e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firebase Realtime Database
export const db = getDatabase(app);
