// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBpi4V9pDUpFvvJ6W_V2_x03Yn1LjuYSI",
  authDomain: "auth-d7565.firebaseapp.com",
  projectId: "auth-d7565",
  storageBucket: "auth-d7565.firebasestorage.app",
  messagingSenderId: "918508344419",
  appId: "1:918508344419:web:9ac2941b249eb1b9551456",
  measurementId: "G-N4MW1N5FWF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app };
