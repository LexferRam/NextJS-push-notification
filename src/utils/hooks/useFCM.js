import { useState } from "react";
import useFCMToken from "./useFCMToken";
import { messaging } from "../firebase";

import { toast } from "react-toastify";
import { onMessage } from "firebase/messaging";

const useFCM = () => {
    const [messages, setMessages] = useState([]);
    const {retrieveToken, fcmToken} = useFCMToken();

    const handleSubscription = async () => {
        console.log('first')
        await retrieveToken();
        
        console.log(fcmToken)
        if ('serviceWorker' in navigator) {
            const fcmmessaging = messaging();
            const unsubscribe = onMessage(fcmmessaging, async (payload) => {
                toast.info(payload.notification?.title);

                Notification.requestPermission().then((result) => {
                    console.log(result)
                    if (result === "granted") {
                        navigator.serviceWorker.ready.then((registration) => {
                            registration.showNotification(payload.notification.title, {
                                body: payload.notification?.title,
                                icon: "/icon-192x192.png",
                                tag: "Prueba de Lexfer",
                              });
                        });
                    }
                });

                setMessages((prev) => [...prev, payload]);
            });
            return () => unsubscribe()  
        }
    
    }

    // useEffect(() => {
    //     if ('serviceWorker' in navigator) {
    //         const fcmmessaging = messaging();
    //         const unsubscribe = onMessage(fcmmessaging, async (payload) => {
    //             toast.info(payload.notification?.title);

    //             Notification.requestPermission().then((result) => {
    //                 console.log(result)
    //                 if (result === "granted") {
    //                     navigator.serviceWorker.ready.then((registration) => {
    //                         registration.showNotification(payload.notification.title, {
    //                             body: payload.notification?.title,
    //                             icon: "https://ums-eight.vercel.app/_next/image?url=%2Flogo9.png&w=256&q=75",
    //                             tag: "Prueba de Lexfer",
    //                           });
    //                     });
    //                 }
    //             });

    //             setMessages((prev) => [...prev, payload]);
    //         });
    //         return () => unsubscribe()  
    //     }
    // }, [fcmToken]);

    return { messages, handleSubscription };
};

export default useFCM;