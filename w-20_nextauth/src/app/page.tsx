"use client"
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  return (
    <SessionProvider>
      <RealHome />
    </SessionProvider>
  );
}



function RealHome() {
  const  session  = useSession();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     {JSON.stringify(session)     }
     Hey there
     { session.status == "unauthenticated" ? <><button onClick={() => signIn()}>Sign In</button></> : <> <button onClick={() => signOut()}>SignOut</button> </> }
     
    </div>
  );
}