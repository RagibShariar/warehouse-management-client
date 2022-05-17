// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALC-_1zm2Idj5hH0h2qhXyDLjpFA9wARY",
  authDomain: "warehouse-management-94241.firebaseapp.com",
  projectId: "warehouse-management-94241",
  storageBucket: "warehouse-management-94241.appspot.com",
  messagingSenderId: "174330463009",
  appId: "1:174330463009:web:5762e833cbfe97b3bb7460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;