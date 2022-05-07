// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqD3SBv51MCiIiJ-_aqGZ5uk7uZcrgWsA",
  authDomain: "genius-car-services-c78cc.firebaseapp.com",
  projectId: "genius-car-services-c78cc",
  storageBucket: "genius-car-services-c78cc.appspot.com",
  messagingSenderId: "350421191923",
  appId: "1:350421191923:web:37a7805193b72d7da43b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)
export default auth