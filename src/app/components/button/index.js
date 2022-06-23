import React from 'react'

function Button({title}) {
  return (
    <div className='block'>
      <button className='hover:bg-red-700 block transition-all bg-black text-white px-5 py-2 rounded-md'>{title}</button>
    </div>
  )
}

export default Button
