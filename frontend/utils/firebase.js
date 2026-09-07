// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ai-agent-a4e1e.firebaseapp.com",
  projectId: "ai-agent-a4e1e",
  storageBucket: "ai-agent-a4e1e.firebasestorage.app",
  messagingSenderId: "758492200663",
  appId: "1:758492200663:web:04bbd8dc3e9638beeafa92",
  measurementId: "G-18YZBS30L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()