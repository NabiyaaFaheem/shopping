

import React from 'react'
import Image from 'next/image'

function Testimonial() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="font-semibold text-3xl text-center mb-12 text-gray-800">Customer Testimonials</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center gap-4">
              <Image
                src='/pngtree-cute-young-woman-isolated-on-pink-background-with-christmas-light-in-image_15500440.jpg'
                alt='Nabiya'
                width={80}
                height={80}
                className="rounded-full border-4 border-gray-300"
              />
              <h3 className="text-xl font-semibold text-gray-800">Nabiya</h3>
              <p className="text-gray-500">CEO & Founder, Invision</p>

              <div className="flex items-center gap-1 text-[#FF9529]">
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">★</span>
                <span className="text-xl">☆</span>
              </div>

              <p className="text-gray-600 text-center mt-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet efficitur dui."
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-cover bg-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative h-[500px]" style={{ backgroundImage: 'url("/portrait-asian-happy-beautiful-young-260nw-2476183953.webp")' }}>
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 py-6 gap-6">
              <button className="bg-black text-white px-6 py-2 rounded-lg text-lg font-semibold transition duration-300 hover:bg-gray-900">
                25% DISCOUNT
              </button>
              <h3 className="text-white text-3xl font-light">Summer Collection</h3>
              <p className="text-white text-xl mt-2">
                Starting @ $20 <span className="font-bold">Shop Now</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
