import React from 'react'
import AnimatedText from '@/components/AnimatedText'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/icons'
import dummyProjectImg from '../../../public/default.jpg'

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return (
    <section className='w-full flex items-center justify-between border-[4px] border-solid border-light bg-primaryDark shadow-2xl'>
      <Link href={link} target='_blank' className='w-[50%] cursor-pointer overflow-hidden'>
        <Image src={img} alt={title} className='w-1/2 h-auto' />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between'>
        <span className='text-[skyblue] font-medium text-2xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-[cyan] text-lg'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link 
            href={github} 
            target='_blank' 
            className='w-10 mr-5'
          >
            <GithubIcon />
          </Link>
          <Link 
            href={link} 
            target='_blank'
            className='bg-[whitesmoke] text-dark p-2 px-6 text-lg font-semibold hover:bg-[pink]'>
            Visit Project
          </Link>
        </div>
      </div>
    </section>
  )
}

const Project = ({title, type, img, link, github}) => {
  return (
    <section className='w-full flex items-center justify-between border-[2px] border-solid border-light bg-primaryDark shadow-2xl'>
      <Link href={link} target='_blank' className='w-[50%] cursor-pointer overflow-hidden'>
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>
      <div className='w-full flex flex-col items-start justify-between pl-4'>
        <span className='text-[skyblue] font-medium text-2xl'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>
        <div className='mt-2 flex items-center'>
          <Link 
            href={github} 
            target='_blank' 
            className='w-10 mr-5'
          >
            <GithubIcon />
          </Link>
          <Link 
            href={link} 
            target='_blank'
            className='bg-[whitesmoke] text-dark p-2 px-6 text-lg font-semibold hover:bg-[pink]'>
            Visit
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <div className='pt-16'>
          <AnimatedText text='Tiger Tiger, shining bright.' className='pb-10' />
          <div className='w-[90%] mx-auto my-0 grid grid-cols-12 gap-24'>
            <div className='col-span-12'>
              <FeaturedProject
                title='Portfolio Website'
                summary='Website built with Vue.js and Vuex, used CSS Grid for the alyout and TailwindCSS for the styling'
                img={dummyProjectImg}
                link='/'
                type='Featured Project'
                github='https:www.github.com'
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Project-2'
                img={dummyProjectImg}
                link='/'
                type='Project-2'
                github='https:www.github.com'
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Project-3'
                img={dummyProjectImg}
                link='/'
                type='Project-3'
                github='https:www.github.com'
              />
            </div>
            <div className='col-span-12'>
              <FeaturedProject
                title='DBZ Fights'
                summary='Basic game created using Vue.js for the frontend and Vuex to handle the application state.'
                img={dummyProjectImg}
                link='/'
                type='DBZ Project'
                github='https:www.github.com'
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Project-4'
                img={dummyProjectImg}
                link='/'
                type='Project-4'
                github='https:www.github.com'
              />
            </div>
            <div className='col-span-6'>
              <Project
                title='Project-5'
                img={dummyProjectImg}
                link='/'
                type='Project-5'
                github='https:www.github.com'
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
