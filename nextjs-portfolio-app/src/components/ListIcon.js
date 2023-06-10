'use client'

import React from 'react'
import { motion, useScroll } from 'framer-motion'

const ListIcon = ({ reference }) => {
  const {scrollYProgress} = useScroll({
    target: reference,
    offset: ['center end', 'center center']
  })

  return (
    <figure className='absolute left-20 stroke-light'>
      <svg className='fill-dark' width='75' height='75' viewBox='0 0 100 100'>
        <circle cx='75' cy='50' r='20' className='stroke-white stroke-1 fill-none'></circle>
        <motion.circle cx='75' cy='50' r='20' className='stroke-[5px] fill-dark'
          style={{pathLength: scrollYProgress}}
        ></motion.circle>
        <circle cx='75' cy='50' r='8' className='stroke-1 fill-light animate-pulse'></circle>
      </svg>
    </figure>
  )
}

export default ListIcon
