import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyBg4qhRsd3d5gfGShpXISjswT1ciFyfYb4",
    authDomain: "cobaryapp.firebaseapp.com",
    projectId: "cobaryapp",
    storageBucket: "cobaryapp.appspot.com",
    messagingSenderId: "682645742446",
    appId: "1:682645742446:web:73fb73e07a476b37ab977f"
});

const FIREBASE = firebase;

export default FIREBASE;

