import useFilter from '@/hooks/useFilter';
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'


const page = () => {
  const{filters:{text},
   updateFilterValue
  } = useFilter();

  return (
    <div className='h-16 flex bg-white  justify-between'>
      <form onSubmit={(e) => e.preventDefault()} >
        <input className='border flex-1 border-gray-400 rounded-lg p-2 m-2 max-w-xl' 
        name="text" 
        placeholder='search'
        value={text}
        onChange={updateFilterValue}
        />
      </form>

        <div className='flex items-center'>
        <AiOutlineShoppingCart size={30} className='m-2 relative' color='#00ced1' />
        <p className='absolute right-2 top-3 bg-red-500 text-white font-bold rounded-full px-1 text-xs'>1</p>
        </div>
    </div>
  )
}

export default page