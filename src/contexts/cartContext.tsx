"use client";
import React, { createContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext();

type initialStateTypes = {
  cart: any;         // 'cart' property can have any type
  total: number;     // 'total' property must be a number
  total_price: number; // 'total_price' property must be a number
  shippingFee: number; // 'shippingFee' property must be a number
};
 
const initialState : initialStateTypes = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  total: 0,
  total_price: 0,
  shippingFee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };

  //increment amount and decrement amount
  const cartToggle = (id, value, stock) => {
      dispatch({ type: "TOGGLE_AMOUNT", payload: { id, value, stock } });
    };


  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // adding data in local storage
  useEffect(() => {
    // dispatch({ type: "GET_TOTALS" });
    // dispatch({ type: "CART_TOTAL_PRICE"});
     dispatch({ type: "CART_TOTALS" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state,
         addToCart, 
         removeItem, 
         clearCart,
        cartToggle
        }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
