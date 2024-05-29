'use client'

import useFCM from "@/utils/hooks/useFCM";

export default function Home() {

  const { handleSubscription, fcmToken}  = useFCM();

  console.log(fcmToken)

  return (
    <main className="flex w-full flex-col items-center justify-between p-24 overflow-scroll">
      <div className="w-full" style={{color: 'black'}}>
        {/* Token: {fcmToken  ? fcmToken : 'sin token'} */}

        <button onClick={async() => await handleSubscription()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Notify!
        </button>
      </div>
    </main>
  );
}
