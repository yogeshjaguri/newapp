import { AppContext } from '@/contexts/productcontext'
import React, { useContext } from 'react'

const useProduct = () => {
  return useContext(AppContext)
}

export default useProduct;