'use client'

import useFCM from "@/utils/hooks/useFCM";
import { NotificationForm } from "./components";

export default function Home() {

  const { handleSubscription }  = useFCM();

  return (
    <main className="flex w-full h-[100vh] flex-col items-center justify-between p-2 overflow-scroll mb-6">
      <div className="w-full" style={{color: 'black'}}>

        <button 
          onClick={async() => await handleSubscription()} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          registrar SW
        </button>

        <NotificationForm />

      </div>
    </main>
  );
}
