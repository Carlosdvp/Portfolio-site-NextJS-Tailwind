'use client'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { usePathname } from 'next/navigation'
import { TwitterIcon, GithubIcon, LinkedInIcon } from './icons'

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
        <CustomLink href='/' title='Home' className='mr-4'></CustomLink>
        <CustomLink href='/about' title='About' className='mx-4'></CustomLink>
        <CustomLink href='/projects' title='Projects' className='mx-4'></CustomLink>
        <CustomLink href='/articles' title='Articles' className='ml-4'></CustomLink>
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo></Logo>
      </div>

      <nav>
        <Link href='/' target='{_blank}'>
          <TwitterIcon />
        </Link>
        <Link href='/' target='{_blank}'>
          <GithubIcon />
        </Link>
        <Link href='/' target='{_blank}'>
          <LinkedInIcon />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
