'use client'


import AddToCartModal from '@/app/addcart/page';
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useState } from 'react';


interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}










const ProductCard: React.FC<propsType> = ({ img, title, desc, rating, price }) => {

















  const generateRating = (rating: number) => {
    const validRating = Math.min(Math.max(rating, 1), 5);

    return (
      <div className='flex gap-1 text-[18px]'>
        {validRating >= 1 && <AiFillStar className="text-[#FF9529]" />}
        {validRating >= 2 && <AiFillStar className="text-[#FF9529]" />}
        {validRating >= 3 && <AiFillStar className="text-[#FF9529]" />}
        {validRating >= 4 && <AiFillStar className="text-[#FF9529]" />}
        {validRating >= 5 && <AiFillStar className="text-[#FF9529]" />}
        
        {validRating < 1 && <AiOutlineStar className="text-[#FF9529]" />}
        {validRating < 2 && <AiOutlineStar className="text-[#FF9529]" />}
        {validRating < 3 && <AiOutlineStar className="text-[#FF9529]" />}
        {validRating < 4 && <AiOutlineStar className="text-[#FF9529]" />}
        {validRating < 5 && <AiOutlineStar className="text-[#FF9529]" />}
      </div>
    );
  }

  return (
    <div className='group px-4 py-6 border border-gray-200 rounded-xl max-w-[400px] bg-white hover:shadow-xl transform transition-all hover:scale-105'>
      
      <div className='relative'>
        <img className='rounded-lg' src={img} alt={title} width={200} height={300} />
      </div>

      <div className='space-y-2 py-2'>
        <h2 className='text-accent font-semibold text-lg uppercase'>{title}</h2>
        <p className='text-gray-500 text-sm'>{desc}</p>

        <div>{generateRating(rating)}</div>

        <div className='font-bold text-xl flex items-center gap-4'>
          <span className='text-primary'>${price}</span>
          <del className='text-gray-500 text-sm'>{parseInt(price) + 5}.00</del>
        </div>

        <div className='mt-4'>
          <button className='bg-accent text-white py-2 px-4 rounded-lg w-full transform transition-all hover:bg-black'
>            Add to Cart
          </button>
        </div>
      </div>

    </div>
  )
}

export default ProductCard
