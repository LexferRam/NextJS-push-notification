importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.1/firebase-messaging-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyD6Y4hEHe1kPuU2wpAJoDdelNHCM7ELxjU",
    authDomain: "nextjs-push-notification-d6b24.firebaseapp.com",
    projectId: "nextjs-push-notification-d6b24",
    storageBucket: "nextjs-push-notification-d6b24.appspot.com",
    messagingSenderId: "341860345873",
    appId: "1:341860345873:web:ef8b3fe08e42f431ace9b0",
    measurementId: "G-C19HF0GWHP"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: notificationTitle//payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});