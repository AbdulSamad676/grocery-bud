// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

export { db, collection, getDocs, addDoc };
export default app;
