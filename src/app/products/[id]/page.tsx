'use client'

import AddToCart from '@/components/AddToCart';
import Images from '@/components/Images';
import Star from '@/components/Star';
import useProduct from '@/hooks/useProduct';
import Link from 'next/link';
import React, { useEffect } from 'react';

type Params = {
  params: {
    id: string
  }
}

const page = ({params: {id}}: Params ) => {
  const {productLoading, product, getProduct } =  useProduct() as any;

  useEffect(() => {
    getProduct(`https://dummyjson.com/products/${id}`)
  }, [])

  const {title, images, rating, price,stock} = product;
  console.log(id)
  return (
    <>
    <div className='text-blue-600'>
      <Link href='/'>
        Back
      </Link>
    </div>
    {productLoading ? <p className='text-red-600'>Loading...</p>: 
    <div className='border border-orange-400 h-60 p-2   rounded-lg' >
      {stock>0 ? <p className='text-green-600 border border-green-600 inline-block p-1 rounded-lg'>
        In Stock
      </p> : <p className='text-red-600 border-red-600 inline-block p-1 rounded-lg'>
        Out of Stock
        </p>}
        <Images images={images}/>
        <div className='flex justify-between items-center pt-2'>
        <h1 className='font-bold'>{title} </h1>
        <p className='text-sm'>
        <Star rating={rating} />
        </p>
        
        </div>
        <div className='flex justify-between items-center '>
        <p className='text-sm'>	&#8377; {price}</p>
        {stock > 0 && <AddToCart product={product} />}
        </div>
    </div> 
    }
    </>

  )
}

export default page;