// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOF_wQHIgMPsL5wcBfK1z9ClwBDSzDr0g",
  authDomain: "netflix-clone-e02b8.firebaseapp.com",
  projectId: "netflix-clone-e02b8",
  storageBucket: "netflix-clone-e02b8.appspot.com",
  messagingSenderId: "357692113792",
  appId: "1:357692113792:web:287252f5c820188d6db765",
  measurementId: "G-YJ1HH8Z3L8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
