import React from 'react'
import Image from 'next/image'
import profilePic from '../../../public/images/home/background.png'
import AnimatedText from '@/components/AnimatedText'

const Homepage = () => {
  return (
    <main className="flex text-dark w-full min-h-screen">
      <div className='flex justify-between w-1/2'>
        <Image src={profilePic} alt='Dude' className='h-[90%] w-full' />
      </div>
      <div className='w-1/2 mx-0 my-auto pl-4'>
        <AnimatedText text='Bringing dreams into reality through the magic of technology.' />
        <p className=''>I am commited to excellence in the crafting of intuitive and aesthetic UIs for all users. Leveraging the latest technologies and frameworks to achieve the goals set before us.</p>
      </div>
    </main>
  )
}

export default Homepage
