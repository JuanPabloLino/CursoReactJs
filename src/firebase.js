import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD690Qtdn0zgQUdaKAW8T9UZwB_ru-DVow",
    authDomain: "ecommerceguitarras.firebaseapp.com",
    projectId: "ecommerceguitarras",
    storageBucket: "ecommerceguitarras.appspot.com",
    messagingSenderId: "837467984762",
    appId: "1:837467984762:web:8dc54a9a3d9d2087f1bcc3"
};

const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app);