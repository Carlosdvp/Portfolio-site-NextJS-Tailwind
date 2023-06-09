import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <div className='py-8 flex items-center justify-center'>
        <span className='mr-6'>
          &nbsp; 2023 &nbsp; &copy; 
        </span>
        <span>&ndash;&ndash;</span>
        <Link className='ml-6 hover:text-light hover:underline' href='https://www.carlosV.dev' target={'_blank'}>CDV</Link>
      </div>
    </footer>
  )
}

export default Footer
