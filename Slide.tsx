
import React from 'react'
import Image from 'next/image'

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg'>
      {/* Background Image */}
      <Image
        src={img}
        alt={mainTitle}
        width={2000}
        height={900}
        className='w-full h-full object-cover'
      />

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center sm:justify-start bg-gradient-to-r from-black to-transparent text-white p-6 sm:p-8 space-y-4 sm:space-y-6">
        <div className="max-w-lg space-y-4 sm:space-y-6">
          <h3 className="text-accent text-2xl sm:text-3xl font-medium">{title}</h3>
          
          <h2 className="text-white text-4xl sm:text-5xl font-bold leading-tight">{mainTitle}</h2>
          
          <h3 className="text-xl sm:text-2xl">
            Starting at <b className="text-2xl sm:text-3xl">{price}</b>.00
          </h3>
          
          <div className='bg-accent text-white text-base sm:text-lg p-2 px-4 rounded-lg inline-block cursor-pointer transform transition-all hover:bg-black'>
            Shop Now
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
