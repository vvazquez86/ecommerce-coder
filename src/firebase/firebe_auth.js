// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3YUkTCO4BtXxk3VSXBUnol83I__4N4A8",
  authDomain: "ecommerce-93d0d.firebaseapp.com",
  databaseURL: "https://ecommerce-93d0d-default-rtdb.firebaseio.com",
  projectId: "ecommerce-93d0d",
  storageBucket: "ecommerce-93d0d.appspot.com",
  messagingSenderId: "20865010566",
  appId: "1:20865010566:web:2b74bda8c44dbcdda73a07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(app)