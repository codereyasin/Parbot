import React from 'react'
import Button from '../../button'

function Shopr({className}) {
  return (
         <div className={className}>
        <h1 className='font-bold text-[27px] pb-5'>The Coffe Table</h1>
        <p className='sm:text-[14px] text-[11px]  text-gray-700 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing<br/> elit. Quia dicta iusto consequuntur impedit!<br/> Illum accusamus voluptates quae impedit ipsa<br/> veniam asperiores<br/> officia? Reiciendis deleniti voluptatibus inventore ducimus,<br/> quia molestiae error nisi </p>
        <Button title="Shop Now"/>
    </div>
  )
}

export default Shopr
