import React from 'react'
import Image from 'next/image'
import profilePic from '../../../public/images/home/background.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'

const Homepage = () => {
  return (
    <main className="flex text-dark w-full min-h-screen">
      <div className='flex justify-between w-1/2'>
        <Image src={profilePic} alt='Dude' className='h-[90%] w-full' />
      </div>
      <div className='w-1/2 mx-0 my-auto pl-4'>
        <AnimatedText text='Bringing dreams into reality through the magic of technology.' />
        <p className='my-4 text-base font-medium'>I am commited to excellence in the crafting of intuitive and aesthetic UIs for all users. Leveraging the latest technologies and frameworks to achieve the goals set before us.</p>
        <div className='flex items-center self-start mt-2'>
          <Link 
            href='/Resume.pdf'
            target='_blank' 
            rel='noopener noreferrer'
            className='flex items-center bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
          >
            Resume <LinkArrow className={'w-6 ml-1'} />
          </Link>
          <Link 
            href='mailto:carlosdvp.tx@gmail.com' 
            target='_blank'
            className='ml-4 text-2xl font-medium text-light capitalize underline'
          >Contact</Link>
        </div>
      </div>
    </main>
  )
}

export default Homepage
