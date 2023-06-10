'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import { TwitterIcon, GithubIcon, LinkedInIcon } from './icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className=''}) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={
          `h-0.5 inline-block bg-primary absolute left-0 -bottom-1.5 group-hover:w-full transition-[width] ease duration-300
          ${pathname === href ? 'w-full' : 'w-0'}`
        }
      >&nbsp;</span>
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between bg-primaryDark'>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4' />
        <CustomLink href='/projects' title='Projects' className='mx-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo></Logo>
      </div>

      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a className='mr-4' href='https://twitter.com/' target='{_blank}' whileHover={{y:-3}}>
          <TwitterIcon />
        </motion.a>
        <motion.a className='mr-4' href='https://github.com' target='{_blank}' whileHover={{y:-3}}>
          <GithubIcon />
        </motion.a>
        <motion.a className='' href='https://www.linkedin.com' target='{_blank}' whileHover={{y:-3}}>
          <LinkedInIcon />
        </motion.a>
      </nav>
    </header>
  )
}

export default Navbar
