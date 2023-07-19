import React from 'react'
import Product from '../product/page'
import useProduct from '@/hooks/useProduct';

const Products = () => {
    const {loading, products} =  useProduct();
    const categories = new Set(products.map((a:any) =>a.category));
    console.log(loading)
  
  return (
    <div className=''>
    {loading ? <p className='text-red-600'>Loading...</p>: null}

    {Array.from(categories).map((category:any) => 
    <div>
      <p className='text-center text-lg font-bold mt-2 border border-red-400 bg-orange-600 p-2 uppercase'>{category}</p>
      <div className='grid  
      sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-1 p-1'>
    {products.map((product:any) => (
      // console.log(user)
      (product.category === category) &&
      <div className='h-60 mb-2  border rounded-lg bg-white ' >
      <Product {...product}/>
      </div>
      ))}
      </div>
      </div>
    )}
      </div>
  )
}

export default Products