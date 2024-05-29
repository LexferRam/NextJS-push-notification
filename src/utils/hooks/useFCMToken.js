'use client'
import { useEffect, useState } from "react";
import { getToken, isSupported } from "firebase/messaging";
import { messaging } from "../firebase";
// import webpush from 'web-push';

const useFCMToken = () => {
    // const { handlePermission} = useNotificationPermission();
    const [fcmToken, setFcmToken] = useState(null);
    const [permission, setPermission] = useState('default');
    // const vapidKeys = webpush.generateVAPIDKeys();

    // console.log(vapidKeys.publicKey);
    // console.log(vapidKeys.privateKey);

    // public: 'BNoWQSepFjUliZV-eb3PGfEaKJEg_jS3G8q0HWPrasQ70ogK4bAfqnbalm8ygH_fJPyF1qAO9Heu6IPiJbe5m8Y'
    // private: 'dOKc_A7qAmrrHMvBcIBf0axZHlMWoPvACmgdumVX_YQ

    // useEffect(() => {
        const handlePermission = async () => {
            const handler = () => setPermission(Notification.permission)
            handler();
            Notification.requestPermission().then(handler);
    
            navigator.permissions
                .query({ name: 'notifications' })
                .then((notificationPerm) => {
                    notificationPerm.onchange = handler;
                });
    
            return permission;
        }


        const retrieveToken = async () => {
            let permission = await handlePermission()
            console.log(permission)
            if (typeof window !== "undefined" && "serviceWorker" in navigator) {
                if (permission === "granted") {
                    const isFCMSupported = await isSupported();
                    if (!isFCMSupported) return;
                    const fcmToken = await getToken(messaging(), { 
                        vapidKey: 'BF_6wDh9K0u9uu2IkxAadKGloAiAhHeDT4CQwf0BVnGSJ9VhvJpRQJkImAM8mlPopWzYsh7fgzu9KToI0Q1wWm4'
                    });
                    setFcmToken(fcmToken);
                    alert(fcmToken)
                }
            }
        }
        // retrieveToken()
    // }, [permission]);

    return {retrieveToken, fcmToken};
}

export default useFCMToken;
