'use client'

import useFCM from "@/utils/hooks/useFCM";

export default function Home() {

  const {fcmToken}  = useFCM();

  return (
    <main className="flex w-full flex-col items-center justify-between p-24 overflow-scroll">
      <div className="w-full" style={{color: 'black'}}>
        Token: {fcmToken}
      </div>
    </main>
  );
}
