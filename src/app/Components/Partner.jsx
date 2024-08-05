import React from 'react'
import { FaHandshake } from "react-icons/fa";

function Partner() {
  return (
    <div className='w-full h-full text-white bg-gradient-to-r from-pink-500 to-yellow-500'>
            <div className='pb-4 md:pb-10 flex flex-col items-center justify-center px-4 md:px-20 py-10'>
            {/* <hr class="h-px w-full border-gray-300" />
            <img src="FinCham.png" className='absolute rounded-full w-20 h-20 top-10 bg-[#f8f2e8]' /> */}
            <h1 className='text-2xl md:text-4xl  font-bold relative before:absolute before:rounded-lg before:content before:w-72  md:before:w-[420px] before:h-1 before:-bottom-2 before:left-1/5 before:bg-gradient-to-tr from-blue-400 to-blue-600 transition-all ease-in-out duration-100 mt-10'>Partner with FINCHAM</h1>
            <img src="./deal.svg" className='h-80 w-80' />
            {/* <FaHandshake className='h-20 w-20'/> */}
            <button type="button" className="bg-[#01306b] hover:bg-[#feb902] w-full text-white lg:w-1/5 px-4 py-3  rounded-full hover:shadow-lg transition-all ease-in-out duration-100">
                Let's Get Started
            </button>
          </div>
    </div>
  )
}

export default Partner