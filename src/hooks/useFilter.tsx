import { filterContext } from '@/contexts/filterContext';
import { useContext } from 'react';

const useFilter = () => {
  return useContext(filterContext)
}

export default useFilter;