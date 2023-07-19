'use client'
import Images from '@/components/Images';
import Star from '@/components/Star';
import useProduct from '@/hooks/useProduct';
import React, { useEffect } from 'react'
import addToCart from '@/components/addToCart';

type Params = {
  params: {
    id: string
  }
}

const page = ({params: {id}}: Params ) => {
  const {productLoading, product, getProduct } =  useProduct();

  useEffect(() => {
    getProduct(`https://dummyjson.com/products/${id}`)
  }, [])

  const {title, images, rating, price} = product;
  console.log(id)
  return (
    <>
    {productLoading ? <p className='text-red-600'>Loading...</p>: 
    <div className='border border-orange-400 h-60 p-2   rounded-lg' >
        <Images images={images}/>
        <div className='flex justify-between items-center pt-2'>
        <h1 className='font-bold'>{title} </h1>
        <p className='text-sm'>
        <Star rating={rating} />
        </p>
        
        </div>
        <div className='flex justify-between items-center '>
        <p className='text-sm'>	&#8377; {price}</p>
        <addToCart product={product}/>
        </div>
    </div> 
    }
    </>

  )
}

export default page;