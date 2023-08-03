'use client'
import Filter from '@/components/Filter'
import Products from './products/page'
import Header from '@/components/Header'

export default function Home() {  
 
  return (<>
  <Header />
    <div className='bg-gray-100 flex'>
      <div className='  border-4 fixed'>
      <Filter/>
      </div>
      <div className=' border-4 ml-64'>
      <Products/>
      </div>
    </div>
    </>
  )
}
