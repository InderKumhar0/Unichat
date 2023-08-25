import firebase  from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDtfAvYybr3DPUJJnpMg4SvhF46LVrxkVg",
    authDomain: "unichat-f5e69.firebaseapp.com",
    projectId: "unichat-f5e69",
    storageBucket: "unichat-f5e69.appspot.com",
    messagingSenderId: "133560352572",
    appId: "1:133560352572:web:396d32d8b65671e2052839"
}).auth();