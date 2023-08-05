"use client";
import useProduct from "@/hooks/useProduct";
import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducers/filterReducer";

const filterContext = createContext<any>(null);

type FilterState = {
  all_products: any[];
  filteredProducts: any[];
  sort: string;
  filters: {
    text: string;
    category: string;
    brand: string;
    maxPrice: number;
    price: number;
    minPrice: number;
  };
};
 
const initialState : FilterState = {
  all_products: [],
  filteredProducts: [],
  sort: "lowest",
  filters: {
    text: "",
    category: "All",
    brand: "All",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

const FilterContextProvider = ({ children }: any) => {
  const { products }  = useProduct() as any;
  const [state, dispatch] = useReducer(reducer, initialState);

  //sorting function
  const sorting = (e:any)  => {
    let userValue = e.target.value;
    dispatch({ type: "SORT_VALUE", payload: userValue });
  };

  //filtering function
  const updateFilterValue = (e:any) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  //clear filter function

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    dispatch({ type: "FILTERED_PORODUCTS" });
    dispatch({
      type: "SORT_PRODUCTS",
    });
  }, [products, state.sort, state.filters]);

  useEffect(() => {
    dispatch({ type: "GET_FILTERED_PORODUCTS", payload: products });
  }, [products]);

  return (
    <filterContext.Provider
      value={{ 
        ...state, 
        sorting, 
        updateFilterValue, 
        clearFilters }}
    >
      {children}
    </filterContext.Provider>
  );
};

export { filterContext, FilterContextProvider };
