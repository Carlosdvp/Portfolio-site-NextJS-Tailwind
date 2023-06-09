import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link'

const Hireme = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className={'fill-light animate-spin-slow'} />
        <Link href='mailto:carlosdvp.tx@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 transalte-y-1/2 text-light bg-dark shadow-md border border-solid border-dark p-1 w-20 h-20 rounded-full hover:bg-light hover:text-dark'>Hire Me</Link>
      </div>
    </div>
  )
}

export default Hireme
