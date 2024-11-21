

import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'

function HeaderMain() {
  return (
    <div className='py-6 bg-white border-b border-gray-200'>
      <div className='container flex flex-col sm:flex-row justify-between items-center'>
        
        <div className='font-bold text-4xl text-center sm:text-left text-black pb-4 sm:pb-0'>
          fXn
        </div>

        <div className='w-full sm:w-[300px] md:w-[60%] relative'>
          <input 
            type="text" 
            placeholder='Search for products...'
            className='border border-gray-300 px-4 py-2 rounded-lg w-full focus:ring-2 focus:ring-blue-500'
          />
          <BsSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
        </div>

        <div className='flex gap-6 items-center text-gray-500'>
          
          <BiUser size={25} className='hover:text-black transition-colors' />

          <div className='relative'>
            <FiHeart size={25} className='hover:text-red-600 transition-colors' />
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-5 h-5 text-[10px] text-white flex items-center justify-center transform translate-x-1 translate-y-1'>
              0
            </div>
          </div>

          <div className='relative'>
            <HiOutlineShoppingBag size={25} className='hover:text-green-600 transition-colors' />
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-5 h-5 text-[10px] text-white flex items-center justify-center transform translate-x-1 translate-y-1'>
              0
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default HeaderMain
