

import React from 'react'
import ProductCard from './ProductCard'


const productsData = [
    {
        img:'/images__3_-removebg-preview (1).png',
        title:"jacket",
        desc:"MEN YARN fleece full-zip jacket",
        rating:4,
        price:"50.00"
    },
    {
        img:'/images-removebg-preview (2).png',
        title:"Skirt",
        desc:"Black floral skirt",
        rating:5,
        price:"55.00"
    },
    {
        img:"/v_13881432_1636768279758_bg_processed-removebg-preview.png",
        title:'Party wear',
        desc:"Women's party wear heels",
        rating:3,
        price:"35.00"
    }
    ,{

        img:"/images__1_-removebg-preview (1).png",
        title:"Shirt",
        desc:"Dyed cotton shirt",
        rating:4.5,
        price:"700"
    },
    
    
    {
        img:"/download__1_-removebg-preview (2).png",
        title:"Sports",
        desc:"Trekking & running shoes",
        rating:5,
        price:"5999",
    },{
        img:"/download__2_-removebg-preview (1).png",
        title:"Watches",
        desc:"Smart Watches",
        rating:2,
        price:"200",
    }
]



function NewProducts() {
  return (
    <div>
      <div className="container pt-16">
<h2 className='font-medium text-2xl pb-4'>
New Products
</h2>

<div className=' grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3
 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>


    {productsData.map((item,index) =>( <ProductCard
    key={index}
    img={item.img}
    title={item.title}
    desc={item.desc}
    rating={item.rating}
    price={item.price} />
    ))}
 </div>


      </div>
    </div>
  )
}

export default NewProducts
