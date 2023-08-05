import React from 'react';
import Product from '../product/page';
import Sort from '@/components/Sort';
import useFilter from '@/hooks/useFilter';
import useProduct from '@/hooks/useProduct';

interface ProductType {
  id: number;
  name: string;
  category: any;
  // Add other properties of the product
}

const Products: React.FC = () => {
  const { filteredProducts } = useFilter();
  const { loading, products } = useProduct() as any;
  const categories = Array.from(products.map((a: ProductType) =>  a.category));
  
  

  // Type check to ensure filteredProducts is an array before rendering
  if (!Array.isArray(filteredProducts)) {
    return null; // Or display an appropriate loading/error state
  }

  return (
    <div className='p-2'>
      <Sort />
      {loading ? <p className='text-red-600'>Loading...</p> : null}

      {categories.map((category: any) => (
        <div key={category.id}>
          <p className='text-center text-lg font-bold mt-2 border border-red-400 bg-orange-600 p-2 uppercase'>
            {category}
          </p>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-1 p-1'>
            {filteredProducts
              .filter((product: ProductType) => product.category === category)
              .map((product: ProductType) => (
                <div key={product.id} className='h-60 mb-2 border rounded-lg bg-white'>
                  <Product {...product} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
