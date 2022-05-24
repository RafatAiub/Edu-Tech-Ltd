// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDs-HZBnToLo6xhrzQo8dfpn-xLnmPawvs",
    authDomain: "manufacturer-website-2a1d8.firebaseapp.com",
    projectId: "manufacturer-website-2a1d8",
    storageBucket: "manufacturer-website-2a1d8.appspot.com",
    messagingSenderId: "439131235449",
    appId: "1:439131235449:web:7f5e8703d29624ee3860a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;