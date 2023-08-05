'use client'
import Link from 'next/link';
import React from 'react'

const Product = (product:any ) => {
  const {id, title, thumbnail, rating, description ,price} = product;
  

  return (<>
  <Link href={`/products/${id}`}> 
    <div className='border border-orange-400 h-60 p-2  overflow-hidden rounded-lg' >
        <img className='h-32 rounded-t-lg' src={thumbnail} alt={title} />
        <div className='flex justify-between items-center pt-2'>
        <h1 className='font-bold'>{title} </h1>
        <p className='text-sm'>⭐ {rating}</p>
        </div>
        <div className='flex justify-between items-center '>
        <p className='text-sm'>	&#8377; {price}</p>
        </div>
        <p>{description}</p>
    </div>
    </Link>
    </>
  )
}

export default Product;