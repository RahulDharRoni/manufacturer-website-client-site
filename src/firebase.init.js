// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7AIpYA4iLQEuG76YEVc5E7YIP0QAkvZc",
    authDomain: "pc-parts-manufacturing.firebaseapp.com",
    projectId: "pc-parts-manufacturing",
    storageBucket: "pc-parts-manufacturing.appspot.com",
    messagingSenderId: "478510729036",
    appId: "1:478510729036:web:8ac11b629fbffb62ef71e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;