import React from 'react'
import ListIcon from './ListIcon';

const WorkDetails = ({position, company, time, work}) => {
  const workItems = work.split('\n').filter(item => item.trim() !== '');

  return (
    <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex fle-col itms-center justify-between'>
      <div>
        <ListIcon />
        <h3 className='capitalize font-bold text-3xl'>{position}</h3>
        <span className='capitalize font-medium text-xl text-light/75'>{company} | {time}</span>
        <ul className='font-medium text-lg w-full mt-6 ml-6 list-disc'>
          {workItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </li>
  )
}

const Experience = () => {
  return (
    <div className='my-36 w-[80%]'>
      <h2 className='font-bold text-8xl mb-16 w-full text-center'>Experience</h2>
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
