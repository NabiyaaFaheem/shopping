'use client'
import { dot } from 'node:test/reporters'
import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide'

function Hero() {
    var settings = {
dots:true,
infinite:true,
slidesToShow:1,
autoplay:true,
pauseOnHover:false
    }

    const slideData =[
    {
        id:0,
  img:'/full-length-portrait-satisfied-lady-260nw-1866019228.webp',
  title:'Trending Item',
  mainTitle:'WOMENS LATEST FASHION SALE',
  price:'$20',
    },{

        id:1,
        img:'/portrait-asian-happy-beautiful-young-260nw-2476183953.webp',
        title:'Trending Accessories',
        mainTitle:'MODERN SUNGLASSES',
        price:'$15'
    },{
id:2,
img:"/special-offer-sale-poster-design-with-50-discount-offer-and-young-girl-holding-shopping-bags-on-pink-abstract-geometric-background-vector.jpg",
title:'Title Offer',
mainTitle:'NEW FASHION SUMMER SALE',
price:'$30'

    }


]


return(
    <div>
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    price={item.price}
                    />
                ))}
            </Slider>
        </div>
    </div>
)}
export default Hero