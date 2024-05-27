'use client'
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyD6Y4hEHe1kPuU2wpAJoDdelNHCM7ELxjU",
    authDomain: "nextjs-push-notification-d6b24.firebaseapp.com",
    projectId: "nextjs-push-notification-d6b24",
    storageBucket: "nextjs-push-notification-d6b24.appspot.com",
    messagingSenderId: "341860345873",
    appId: "1:341860345873:web:ef8b3fe08e42f431ace9b0",
    measurementId: "G-C19HF0GWHP"
};

const firebaseapp = initializeApp(firebaseConfig);

export const messaging = () => getMessaging(firebaseapp);

export default firebaseapp;