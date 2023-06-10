'use client'

import React, { useRef } from 'react'
import ListIcon from './ListIcon';
import { motion } from 'framer-motion';

const Details = ({place, time, degree}) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className='mt-12 mb-8 pt-4 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col itmes-center justify-between'>
      <ListIcon reference={ref} />
      <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: 'spring'}}
      >
        <h3 className='capitalize font-bold text-3xl'>{place}</h3>
        <span className='capitalize font-medium text-xl text-light/75'>{degree} | {time}</span>
      </motion.div>
    </li>
  )
}

const Education = () => {
  return (
    <div className='my-36 w-full'>
      <h2 className='font-bold text-6xl mb-16 w-full text-center'>Education</h2>
      <div>
        <ul>
          <Details
            degree='BA Design and Studio Arts'
            place='UMSA'
            time='1999 - 2003'
          />
          <Details
            degree='Certificate - Frontend Web Development'
            place='Viking Education'
            time='2018 - 2019'
          />
        </ul>
      </div>
    </div>
  )
}

export default Education
