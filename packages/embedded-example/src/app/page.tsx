import Image from 'next/image'
import {Dashboard} from "@/app/_components/dashboard";

export default function Home() {
  return (
    <>
      <h1>Analytics</h1>
      <div className="mt-16">

          <main className="flex min-h-screen flex-col items-center justify-between p-12h w-full">
            <Dashboard/>

          </main>
      </div>
    </>
  )
}
