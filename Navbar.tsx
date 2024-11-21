'use client'


import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='bg-white border-b border-gray-200'>
      <div className="container px-6 py-4">
        
        <div className="hidden lg:flex justify-center">
          <div className="flex gap-10 font-medium text-black">
            <Link className='navbar_link' href='/'>HOME</Link>
            <Link className='navbar_link' href='/category'>CATEGORY'S</Link>
            <Link className='navbar_link' href='/mens'>MEN'S</Link>
            <Link className='navbar_link' href='/womens'>WOMEN'S</Link>
            <Link className='navbar_link' href='#'>JEWELLERY</Link>
            <Link className='navbar_link' href='#'>PERFUME</Link>
            <Link className='navbar_link' href='#'>BLOG</Link>
            <Link className='navbar_link' href='#'>HOT OFFERS</Link>
          </div>
        </div>

        <div className="lg:hidden flex justify-between items-center">
          <div className="font-bold text-2xl">fXn</div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 flex flex-col items-center space-y-4 bg-white border-t border-gray-200 py-4">
            <Link className='navbar_link' href='#'>HOME</Link>
            <Link className='navbar_link' href='#'>CATEGORY'S</Link>
            <Link className='navbar_link' href='#'>MEN'S</Link>
            <Link className='navbar_link' href='#'>WOMEN'S</Link>
            <Link className='navbar_link' href='#'>JEWELLERY</Link>
            <Link className='navbar_link' href='#'>PERFUME</Link>
            <Link className='navbar_link' href='#'>BLOG</Link>
            <Link className='navbar_link' href='#'>HOT OFFERS</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
