'use client'

import React, { useRef } from 'react'
import ListIcon from './ListIcon';
import { motion } from 'framer-motion';

const WorkDetails = ({position, company, time, work}) => {
  const workItems = work.split('\n').filter(item => item.trim() !== '');

  const ref = useRef(null)

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col itmes-center justify-between'>
      <ListIcon reference={ref} />
      <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: 0.5, type: 'spring'}}
      >
        <h3 className='capitalize font-bold text-3xl'>{position}</h3>
        <span className='capitalize font-medium text-xl text-light/75'>{company} | {time}</span>
        <ul className='font-medium text-lg w-full mt-6 ml-6 list-disc'>
          {workItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  return (
    <div className='mt-32 w-full'>
      <h2 className='font-bold text-6xl mb-16 w-full text-center'>Experience</h2>
      <div>
        <ul>
          <WorkDetails
            position='Full Stack Developer'
            company='Freelance'
            time='Dec 2022 - Present'
            work={`Web Design and prototyping\nFull Stack Javascript development; Vanilla JS, Vue.js, Node.js, and MySQL\nResponsive design and development\nUse of version control`}
          />
          <WorkDetails
            position='Software Engineer'
            company='Trio'
            time='Jun 2022 - Nov 2022'
            work={`Full Stack Javascript development; Vanilla JS, Vue.js, Node.js, and MySQL\nResponsive design and development\nMaintain and expand on REST API functionality, made with NodeJS, Express and Typescript`}
          />
          <WorkDetails
            position='Frontend Developer'
            company='Freelance'
            time='Jul 2021 - May 2022'
            work={`Web Design and prototyping\nFull Stack Javascript development\nResponsive design and development\nWS Cloud for Web App deployment`}
          />
          <WorkDetails
            position='Software Technical Support'
            company='ESW Capital'
            time='Jan 2018 - Jun 2021'
            work={`Web Design and prototyping\nFull Stack Javascript development; Vanilla JS, Vue.js, Node.js, and MySQL\nResponsive design and development\nUse of version control`}
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
