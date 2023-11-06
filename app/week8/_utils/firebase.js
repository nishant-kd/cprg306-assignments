// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNXhLgb1H7uJGY0thGtxIk_9w23NpohXE",
  authDomain: "cprg306-assignments-60cc0.firebaseapp.com",
  projectId: "cprg306-assignments-60cc0",
  storageBucket: "cprg306-assignments-60cc0.appspot.com",
  messagingSenderId: "642215822894",
  appId: "1:642215822894:web:538ef91bb232899bb141bf",
  measurementId: "G-39K246FBR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);