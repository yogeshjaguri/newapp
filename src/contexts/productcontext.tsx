'use client'
import axios from 'axios';
import { useEffect,useReducer,createContext } from 'react';
import  reducer  from '../reducers/productreducer'; 

const AppContext = createContext({});

const API = 'https://dummyjson.com/products';
// const ProductAPI = `https://dummyjson.com/products/${id}`;

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