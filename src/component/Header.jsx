import React from 'react'
import img from '../assets/img/Cooking-pana.svg'

const Header = () => {
  return (
    <div className="flex flex-col  w-full mx-auto pt-8 md:flex-row md:px-8 xl:px-16 lg:px-12 md:justify-between">
    <div className='flex flex-col items-center px-4 pb-8 md:justify-center md:items-start '>  
          <h1 className='font-bold text-red-500 text-3xl pb-3 md:text-4xl md:pb-2 lg:pb-3 lg:text-5xl'> WE RECIPE </h1>
          <p className='text-center text-color-header px-6 md:text-left md:px-0 lg:text-lg' > Helping you cook a variety of dishes from all over the world  </p>
    </div>
      <div className='w-2/3 mx-auto md:w-1/2 xl:w-1/3 xl:mr-4 '>
        <img src={img} alt="img"/>
      </div> 
    </div>
  )
}

export default Header