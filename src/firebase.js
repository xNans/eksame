// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyB8GdgUH0WejAE2NVeKGtqzgLR1Z74-1W4",

  authDomain: "eksame-ca933.firebaseapp.com",

  projectId: "eksame-ca933",

  storageBucket: "eksame-ca933.appspot.com",

  messagingSenderId: "1318687408",

  appId: "1:1318687408:web:ee668f16609170bc46a175"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }

export const db = getFirestore(app);
