import React from 'react'
import { BsHandbagFill } from 'react-icons/bs';
import { BiLogInCircle } from 'react-icons/bi';

function Navbar() {
  return (
    <div>
    <div className="container mx-auto">
    <div className='flex justify-between items-center p-5'>
      <div className='flex items-center '>
        <a className='text-[20px] font-medium' href="#">Parbot</a>
        <div className='items-center justify-center space-x-10 hidden ml-[6rem] sm:block'>
            <a className='hover:text-red-500 text-[16px]' href="#">Home</a>
            <a className='hover:text-red-500 text-[16px]' href="#">Products</a>
            <a className='hover:text-red-500 text-[16px]' href="#">Collection</a>
        </div>
      </div>
      <div className='flex items-center justify-end lg:space-x-4 space-x-2 text-[20px] sm:ml-2' >
       <span className='hover:text-red-400 transition-all'>
       <BsHandbagFill />
       </span>
        <span className='hover:text-red-400 hover:rotate-180 text-[23px] transition-all'>
        <BiLogInCircle />
        </span>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar
