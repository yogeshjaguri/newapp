import {filterContext} from '@/contexts/filtercontext';
import { useContext } from 'react';

const useFilter = () => {
  return useContext(filterContext)
}

export default useFilter;