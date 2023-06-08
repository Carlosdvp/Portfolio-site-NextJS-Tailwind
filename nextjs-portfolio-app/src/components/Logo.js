'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

function Logo() {
  return (
    <div className='flex items-center justify-center mt-2'>
      <MotionLink href='/' 
        className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-5xl font-bold'
        whileHover={{
          scale:1.2,
          backgroundColor: ['#006675', '#4ADFF7', '#00D4F5', '#236A75'],
          transition: {duration: 1, repeat: Infinity}
        }}
      >V</MotionLink>
    </div>
  )
}

export default Logo
