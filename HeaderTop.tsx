


import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

function HeaderTop() {
  return (
    <div className='bg-gray-100 border-b border-gray-200'>
      <div className="container py-4 px-6 md:px-12">
        <div className='flex justify-between items-center'>
          
          <div className="hidden lg:flex gap-4">
            <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <BsFacebook size={20} />
            </a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-blue-400 transition-colors">
              <BsTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="text-gray-600 hover:text-pink-500 transition-colors">
              <BsInstagram size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-800 transition-colors">
              <BsLinkedin size={20} />
            </a>
          </div>

          <div className='text-sm text-gray-500 hidden sm:block'>
            <b className="text-gray-800">FREE SHIPPING</b> THIS WEEK FOR ORDERS OVER $55
          </div>

          <div className="flex gap-6 text-sm">
            <select name="currency" id="currency" className='bg-transparent border border-gray-300 text-gray-600 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
              <option value="USD $">USD</option>
              <option value="EUR">EUR</option>
              <option value="PKR">PKR</option>
            </select>

            <select name="language" id="language" className='bg-transparent border border-gray-300 text-gray-600 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
