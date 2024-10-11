// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyN-l2S3jsSVroOOQbpfSw3pn0JOhmKzw",
  authDomain: "netflixgpt-9dd5a.firebaseapp.com",
  projectId: "netflixgpt-9dd5a",
  storageBucket: "netflixgpt-9dd5a.appspot.com",
  messagingSenderId: "179903714719",
  appId: "1:179903714719:web:20c7b60dbf7ebceac099aa",
  measurementId: "G-45M3BTY707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();