import Image from 'next/image'
import {Dashboard} from "@/app/_components/dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Dashboard/>
    </main>
  )
}
