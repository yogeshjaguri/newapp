import { filterContext } from '@/contexts/filterContext';
import { useContext } from 'react';

const useFilter = () => {
  const context = useContext(filterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterContextProvider');
  }
  return context;
};


export default useFilter;

