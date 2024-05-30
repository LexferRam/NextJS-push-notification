'use client'
import { useEffect, useState } from 'react';

const useNotificationPermission = () => {
    const [permission, setPermission] = useState('default');

    useEffect(() => {
        const handler = () => setPermission(Notification.permission);
        handler();
        Notification.requestPermission().then(handler);

        navigator.permissions
            .query({ name: 'notifications' })
            .then((notificationPerm) => {
                notificationPerm.onchange = handler;
            });
    }, []);

    return permission;
}

export default useNotificationPermission;



// const notification = document.querySelector('#notification');
// const sendButton = document.querySelector('#send');
// const registration = await navigator.serviceWorker.getRegistration();

// const sendNotification = async () => {
//   if(Notification.permission === 'granted') {
//     showNotification(notification.value);
//   }
//   else {
//     if(Notification.permission !== 'denied') {
//       const permission = await Notification.requestPermission();
  
//       if(permission === 'granted') {
//         showNotification(notification.value);
//       }
//     }
//   }
//   };
  
//   const showNotification = body => {
//   const title = 'What PWA Can Do Today';
  
//   const payload = {
//     body
//   };
  
//   if('showNotification' in registration) {
//     registration.showNotification(title, payload);
//   }
//   else {
//     new Notification(title, payload);
//   }
// };

// sendButton.addEventListener('click', sendNotification);
    