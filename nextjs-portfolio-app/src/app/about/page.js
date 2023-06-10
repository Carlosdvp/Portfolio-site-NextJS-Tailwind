import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import ProfilePic from '../../../public/images/profile-pic-2.png'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className='flex w-full flex-col items-center justify-center'>
        <div className='py-16'>
          <AnimatedText text='The Queen of Heaven is the Highest of All.' />
        </div>

        <div className='grid w-full grid-cols-8 gap-1 mb-6 ml-6'>
          <div className='ml-6 mb-6 col-span-5 flex flex-col items-start justify-start text-lg'>
            <h2 className='mb-4 font-bold uppercase text-light'>Biography</h2>
            <p className='my-4'>I am a software engineer with experience in Vue, Node, JavaScript, and CSS Grid. I have a passion for creating intuitive and functional user experiences, and have a wide range of experience working with web technologies.</p>
            <p className='my-4'>I have a track record of delivering robust and reliable applications, and strive to push the boundaries of what is possible with web development.</p>
          </div>

          <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-9 mx-11'>
            <Image src={ProfilePic} alt='an image' className='w-full h-auto rounded-2xl' />
          </div>
        </div>
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  )
}
