// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIqK5QxJTfo4e4HBSwVcqDpKBRTwcfDMQ",
  authDomain: "realtor-clone-react-c0791.firebaseapp.com",
  projectId: "realtor-clone-react-c0791",
  storageBucket: "realtor-clone-react-c0791.appspot.com",
  messagingSenderId: "879078262766",
  appId: "1:879078262766:web:467ea02dcdec803593b0ff"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()

// const analytics = getAnalytics(app);