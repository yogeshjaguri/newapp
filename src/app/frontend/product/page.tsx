'use client'
import React from 'react'

const Product = (user) => {
  const { title, thumbnail, rating, price} = user.props;

// {id: 28, title: '3D Embellishment Art Lamp', description: '3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)', price: 20, discountPercentage: 16.49, …}brand: "LED Lights" category: "home-decoration" description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)"discountPercentage: 16.49id: 28images: Array(5)0: "https://i.dummyjson.com/data/products/28/1.jpg"1: "https://i.dummyjson.com/data/products/28/2.jpg"2: "https://i.dummyjson.com/data/products/28/3.png"3: "https://i.dummyjson.com/data/products/28/4.jpg"4: "https://i.dummyjson.com/data/products/28/thumbnail.jpg"length: 5[[Prototype]]: Array(0)price: 20rating: 4.82stock: 54thumbnail: "https://i.dummyjson.com/data/products/28/thumbnail.jpg"title: "3D Embellishment Art Lamp"

  return (
    <div className='border border-orange-400 h-60 p-2   rounded-lg' >
        <img className='h-32 rounded-t-lg' src={thumbnail} alt={title} />
        <div className='flex justify-between items-center pt-2'>
        <h1 className='font-bold'>{title} </h1>
        <p className='text-sm'>⭐ {rating}</p>
        </div>
        <div className='flex justify-between items-center '>
        <p className='text-sm'>	&#8377; {price}</p>
        <button className='border bg-yellow-400 rounded-lg p-2 font-bold'>add to cart</button>
        </div>
    </div>
  )
}

export default Product;