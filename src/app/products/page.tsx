import React from 'react'
import Product from '../product/page'
import useProduct from '@/hooks/useProduct';
import useFilter from '@/hooks/useFilter';
import Sort from '@/components/Sort';

const Products = () => {
  const {filteredProducts}  = useFilter() as any;
    const {loading, products} =  useProduct() as any;
    const categories = new Set(products.map((a:any) =>a.category));
  
  return (
    <div className='p-2'>
      
      <Sort/>
    {loading ? <p className='text-red-600'>Loading...</p>: null}

    {/* {Array.from(categories).map((category:any) =>  */}
    <div>
      {/* <p className='text-center text-lg font-bold mt-2 border border-red-400 bg-orange-600 p-2 uppercase'>{category}</p> */}
      <div className='grid  
      sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-1 p-1'>
    {filteredProducts.map((product:any) => (
      // console.log(user)
      // (product.category === category) &&
      <div className='h-60 mb-2  border rounded-lg bg-white ' >
      <Product {...product}/>
      </div>
      ))}
      </div>
      </div>
    {/* )} */}
      </div>
  )
}

export default Products;