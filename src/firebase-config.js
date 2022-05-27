import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAtOAO_wQ4wLkU2AwoPTFDu7m0YNM3IBMg",
    authDomain: "authentication-24fd1.firebaseapp.com",
    projectId: "authentication-24fd1",
    storageBucket: "authentication-24fd1.appspot.com",
    messagingSenderId: "856254961738",
    appId: "1:856254961738:web:9f23b3ea386d2599b16eb3",
    measurementId: "G-WPTSRNZVH9"
  };
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);