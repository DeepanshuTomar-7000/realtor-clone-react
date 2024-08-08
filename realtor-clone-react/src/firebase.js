// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzG6HbWrLUq7huGURdqxyXGaC-pI850XM",
  authDomain: "realtor-clone-react-d4204.firebaseapp.com",
  projectId: "realtor-clone-react-d4204",
  storageBucket: "realtor-clone-react-d4204.appspot.com",
  messagingSenderId: "346161304559",
  appId: "1:346161304559:web:4910c443f6eed139f71c1a",
  measurementId: "G-VZ5W7L8WNC"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()

// const analytics = getAnalytics(app);