import useFilter from '@/hooks/useFilter';
import React from 'react'

const Sort = () => {
  const {filteredProducts, sorting} = useFilter();
  return (
    <div>
      <form className='flex flex-col'>
        <label className='text-lg font-bold'>Sort By</label>
        <select
        name='sort'
        id='sort'
        onClick={sorting}
        className='border border-red-400 p-2 rounded-lg'>
          <option value='lowest'>Price (lowest)</option>
          <option value='highest'>Price (highest)</option>
          <option value='a-z'>Name (A-Z)</option>
          <option value='z-a'>Name (Z-A)</option>
        </select>
      </form>
    </div>
  )
}

export default Sort