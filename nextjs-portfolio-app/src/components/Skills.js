'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div 
      className='flex items-center justify-center rounded-full font-semibold bg-light text-dark shadow-dark p-3 cursor-pointer absolute'
      whileHover={{scale:1.1}}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x:x, y:y }}
      transition={{ duration: 1.5 }}
    >
      { name }
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-12 w-full text-center'>Skills</h2>
      <div className='w-[80%] h-screen relative flex items-center justify-center bg-circularLight rounded-full m-6'>
        <motion.div 
          className='flex items-center justify-center rounded-full font-semibold bg-light text-dark shadow-dark p-8 cursor-pointer'
          whileHover={{scale:1.1}}
        >
          Web
        </motion.div>
        <Skill name='CSS' x='-9vw' y='6vw' />
        <Skill name='HTML' x='6vw' y='9vw' />
        <Skill name='JavaScript' x='0vw' y='-10vw' />
        <Skill name='NodeJS' x='-25vw' y='-15vw' />
        <Skill name='Express' x='11vw' y='22vw' />
        <Skill name='Typescript' x='17vw' y='13vw' />
        <Skill name='React' x='25vw' y='10vw' />
        <Skill name='Vue' x='0vw' y='-30vw' />
        <Skill name='Vuex' x='5vw' y='-25vw' />
        <Skill name='Docker' x='25vw' y='-10vw' />
        <Skill name='NextJS' x='-25vw' y='10vw' />
        <Skill name='MySQL' x='-15vw' y='-25vw' />
        <Skill name='MongoDB' x='-20vw' y='3vw' />
        <Skill name='Git' x='-9vw' y='-15vw' />
        <Skill name='Python' x='-5vw' y='20vw' />
        <Skill name='AWS' x='17vw' y='-20vw' />
      </div>
    </>
  )
}

export default Skills
