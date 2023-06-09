import React from 'react'

const ListIcon = () => {
  return (
    <figure className='absolute right-64 stroke-light'>
      <svg className='fill-dark' width='75' height='75' viewBox='0 0 100 100'>
        <circle cx='75' cy='50' r='20' className='stroke-1 fill-none'></circle>
        <circle cx='75' cy='50' r='18' className='stroke-1 fill-light'></circle>
        <circle cx='75' cy='50' r='10' className='stroke-1 fill-dark'></circle>
      </svg>
    </figure>
  )
}

export default ListIcon
