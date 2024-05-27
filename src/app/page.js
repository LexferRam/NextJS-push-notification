'use client'

import useFCM from "@/utils/hooks/useFCM";

export default function Home() {

  const {fcmToken}  = useFCM();

  return (
    <main className="flex w-full flex-col items-center justify-between p-24">
      <div className="w-[800px]">
        Token: {fcmToken}
      </div>
    </main>
  );
}
