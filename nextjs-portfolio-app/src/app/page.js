import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="bg-light w-full min-h-screen">
        <div className="w-full">
          <h1 className="fixed top-24 flex w-full justify-center">
            Hail Hecate Queen of Heaven.
          </h1>
        </div>
      </main>
    </>

  )
}
