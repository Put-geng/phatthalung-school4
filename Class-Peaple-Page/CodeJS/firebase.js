// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Config ที่ Firebase ให้มา
const firebaseConfig = {
  apiKey: "AIzaSyDCI0Ba2sNaIIFl9UTW0hyUpBf0T574QVs",
  authDomain: "phatthalung-school-system.firebaseapp.com",
  projectId: "phatthalung-school-system",
  storageBucket: "phatthalung-school-system.firebasestorage.app",
  messagingSenderId: "797689596536",
  appId: "1:797689596536:web:7c51c59f58c24c437a7b8d",
  measurementId: "G-EM2B08NDP2"
};

// เริ่มต้น Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
