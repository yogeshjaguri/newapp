"use client";
import useProduct from "@/hooks/useProduct";
import { createContext, useEffect, useReducer } from "react";
import reducer from '../reducers/filterReducer'

const filterContext = createContext();

const initialState = {
    all_products: [],
    filteredProducts: [],
    sort: "lowest",
    filters: {
        text: "",        
    },
};

 const FilterContextProvider = ({ children }: any) => {
    const { products } = useProduct();
    const [state, dispatch] = useReducer(reducer, initialState);

    //sorting function 
    const sorting = (e) => {
        let userValue = e.target.value;
        dispatch({ type: "SORT_VALUE", payload: userValue });
    };

    //filtering function
    const updateFilterValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
    };

    useEffect(() => {
        dispatch({ type: "FILTERED_PORODUCTS", payload: products });
        dispatch({ 
        type: "SORT_PRODUCTS"});
    }, [products, state.sort, state.filters]);


  useEffect(() => {
    dispatch({ type: "GET_FILTERED_PORODUCTS", payload: products });
  }, [products]);

  return (
    <filterContext.Provider value={{ ...state, sorting, updateFilterValue }}>
      {children}
    </filterContext.Provider>
  );
};


export  {filterContext, FilterContextProvider};
