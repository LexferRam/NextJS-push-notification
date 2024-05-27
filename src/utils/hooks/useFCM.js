import { useEffect, useState } from "react";
import useFCMToken from "./useFCMToken";
import { messaging } from "../firebase";

import { toast } from "react-toastify";
import { onMessage } from "firebase/messaging";

const useFCM = () => {
    const fcmToken = useFCMToken();
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        if ('serviceWorker' in navigator) {
            const fcmmessaging = messaging();
            const unsubscribe = onMessage(fcmmessaging, (payload) => {
                toast.info(payload.notification?.title);


                // // Extract notification data from the payload
                // const title = payload.notification.title;
                // const body = payload.notification.body;
                // const icon = ''// payload.notification.icon || 'your-notification-icon.png'; // Optional default icon

                // // Create a notification object with options
                // const notification = new Notification(title, {
                //     body,
                //     icon,
                //     clickAction: 'your-action-on-click.html' // Optional action URL on notification click
                // });



                setMessages((prev) => [...prev, payload]);
            });
            return () => unsubscribe()  
        }
    }, [fcmToken]);

    return { messages, fcmToken };
};

export default useFCM;