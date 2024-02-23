// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP7GLz_msfJyWMBMOBtqJuCExX60ujwCw",
  authDomain: "eastvantage-assignment-40ae9.firebaseapp.com",
  projectId: "eastvantage-assignment-40ae9",
  storageBucket: "eastvantage-assignment-40ae9.appspot.com",
  messagingSenderId: "960777372189",
  appId: "1:960777372189:web:6522bf90511a63ed203cf4",
  measurementId: "G-LV4JD5QTG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
