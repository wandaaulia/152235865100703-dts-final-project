import React from 'react'
import { Link } from "react-router-dom";

const NoFound = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-32'>
      <h2> You have reach the edge of universe </h2>
     
      <Link to="/" className=' text-center mt-10 bg-red-500 text-white rounded py-4 px-14 w-1/4'> Back to Home </Link>
  
    </div>
  )
}

export default NoFound