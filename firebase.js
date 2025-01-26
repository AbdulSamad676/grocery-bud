// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoffuId_VWzsMFP4HUMlJLV32Gl3cpZbw",
  authDomain: "grocery-bud-bcc34.firebaseapp.com",
  projectId: "grocery-bud-bcc34",
  storageBucket: "grocery-bud-bcc34.firebasestorage.app",
  messagingSenderId: "563251039352",
  appId: "1:563251039352:web:504f540680de7af75b318d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Initialize Firebase Authentication

// Export instances
export { db, collection, getDocs, addDoc, auth };
export default app;
