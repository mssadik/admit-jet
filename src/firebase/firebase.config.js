// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXVzPnDkCHnSGZsl4XmFXWSPVrZLPSyKg",
  authDomain: "admit-jet.firebaseapp.com",
  projectId: "admit-jet",
  storageBucket: "admit-jet.appspot.com",
  messagingSenderId: "255308544212",
  appId: "1:255308544212:web:12ffade45df7f33eeca341"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;