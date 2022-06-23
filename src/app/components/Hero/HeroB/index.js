import React from 'react'

function Herob({title, img}) {
  return (
    <div className='flex w-full justify-center items-center'>
        <img className='w-10 ' src={img} loading='lazy' alt="" />
        <div className='space-y-3 pl-4'>
            <h1 className='font-bold'>{title}</h1>
            <p className='text-gray-500 text-[11px] hidden sm:block'>Lorem ipsum dolor sit, amet<br/> consectetur adipisicing elit<br/> Saepe ut voluptates deserunt</p>
        </div>
    </div>
  )
}

export default Herob