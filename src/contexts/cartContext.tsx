'use client'
import React, {createContext, useReducer} from 'react';
import reducer from '../reducers/cartReducer';


const CartContext = createContext();

const initialState = {
    cart: [],
    total: 0,
    amount: 0,
    shippingFee: 5000,
}


 const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const addToCart = (id,amount,product) => {
        dispatch({type: 'ADD_TO_CART', payload: {id,amount,product}})
    };
  return (
    <CartContext.Provider value={{...state, addToCart}}>
        {children}
    </CartContext.Provider>
  );
}

export {CartContext, CartProvider};