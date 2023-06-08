import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex items-center text-dark w-full min-h-screen">
        <div className="w-full">
          <h1 className="pt-24 flex w-full justify-center">
            Hecate
          </h1>
        </div>
      </main>
    </>

  )
}
