'use client'
import axios from 'axios';
import { useEffect,useReducer,createContext, } from 'react';
import  reducer  from '../reducers/productReducer'; 

const AppContext = createContext({});

const API = 'https://dummyjson.com/products';
// const ProductAPI = `https://dummyjson.com/products/${id}`;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Make sure you have Axios installed: npm install axios

  // const [products, setProducts] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const fetchLimit = 30;

  // useEffect(() => {
  //   // Function to fetch products from the API
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get(`https://dummyjson.com/products/?page=${currentPage}&limit=${fetchLimit}`);
  //       if (response.status === 200) {
  //         // Append new products to the existing list
  //         setProducts((prevProducts) => [...prevProducts, ...response.data]);
  //       }
  //     } catch (error) {
  //       console.error('Failed to fetch products:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, [currentPage]);

  // const handleLoadMore = () => {
  //   // Increase the current page by 1 to load the next page
  //   setCurrentPage((prevPage) => prevPage + 1);
  // };

type State = {
    loading: boolean,
    isError: boolean,
    products: any[],
    product: any,
    categories: any[],
    productLoading: boolean,
    productError: boolean,
};

const initialState = {
    loading: true,
    isError: false,
    products: [],
    product: {},
    categories: [],
    productLoading: true,
    productError: false,
};

const AppProvider = ({ children }:any) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: 'SET_LOADING' });
        try {
            const response = await axios(url);
            const products = await response.data.products;
            dispatch({ type: 'GET_PRODUCTS', payload: products });
        } catch (error) { 
            dispatch({ type: 'API_ERROR' });
        }
    }
    useEffect(() => {
      getProducts(API)
    }, [])

    const getProduct = async(url) => {
        dispatch({ type: 'SET_PRODUCT_LOADING' });
        try {
            const response = await axios(url);
            const product = await response.data;
            dispatch({ type: 'GET_PRODUCT', payload: product });
        } catch (error) { 
            dispatch({ type: 'PRODUCT_API_ERROR' });
        }
    }
    

    
    return (
        <AppContext.Provider value={{...state, getProduct}}>
        {children}
        </AppContext.Provider>
    )
};

export { AppContext, AppProvider, };