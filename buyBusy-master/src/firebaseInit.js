// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0L1QGUrpSl9y2JXRiKqpjURO_A4uOVFA",
  authDomain: "reactproject-506a8.firebaseapp.com",
  projectId: "reactproject-506a8",
  storageBucket: "reactproject-506a8.appspot.com",
  messagingSenderId: "344226031452",
  appId: "1:344226031452:web:c3f1a555216e2fa2d34399"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
