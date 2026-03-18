import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCV1nbhmkNDbsZaL6ioGNhG1YkA0hfgHSU",
    authDomain: "newsflow-378f9.firebaseapp.com",
    projectId: "newsflow-378f9",
    storageBucket: "newsflow-378f9.firebasestorage.app",
    messagingSenderId: "380708334383",
    appId: "1:380708334383:web:8da8280e663a75b6cb8fda",
    // measurementId: "G-2MBCLEF49Z"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);