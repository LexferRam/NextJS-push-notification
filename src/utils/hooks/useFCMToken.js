'use client'
import { useEffect, useState } from "react";
import { getToken, isSupported } from "firebase/messaging";
import { messaging } from "../firebase";
import useNotificationPermission from "./useNotificationPermission";
// import webpush from 'web-push';

const useFCMToken = () => {
    const permission = useNotificationPermission();
    const [fcmToken, setFcmToken] = useState(null);
    // const vapidKeys = webpush.generateVAPIDKeys();

    // console.log(vapidKeys.publicKey);
    // console.log(vapidKeys.privateKey);

    // public: 'BNoWQSepFjUliZV-eb3PGfEaKJEg_jS3G8q0HWPrasQ70ogK4bAfqnbalm8ygH_fJPyF1qAO9Heu6IPiJbe5m8Y'
    // private: 'dOKc_A7qAmrrHMvBcIBf0axZHlMWoPvACmgdumVX_YQ

    // useEffect(() => {
        const retrieveToken = async () => {
            if (typeof window !== "undefined" && "serviceWorker" in navigator) {
                if (permission === "granted") {
                    const isFCMSupported = await isSupported();
                    if (!isFCMSupported) return;
                    const fcmToken = await getToken(messaging(), { 
                        vapidKey: 'BF_6wDh9K0u9uu2IkxAadKGloAiAhHeDT4CQwf0BVnGSJ9VhvJpRQJkImAM8mlPopWzYsh7fgzu9KToI0Q1wWm4'
                    });
                    setFcmToken(fcmToken);
                }
            }
        }
        retrieveToken()
    // }, [permission]);

    return {retrieveToken, fcmToken};
}

export default useFCMToken;
