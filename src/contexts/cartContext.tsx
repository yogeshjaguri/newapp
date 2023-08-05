"use client";
import React, { createContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cartReducer";

const CartContext = createContext<any>(null); 

type initialStateTypes = {
  cart: any | null;    // 'cart' property can have any type or null
  total: number;       // 'total' property must be a number
  total_price: number; // 'total_price' property must be a number
  shippingFee: number; // 'shippingFee' property must be a number
};

type Product = {
  // Define the type for the 'product' argument
  id: string;
  name: string;
  price: number;
  // Add other properties specific to your product if needed
};

type AddToCartFunction = (id: string, amount: number, product: Product,  stock: number) => void;

type ToggleAmountFunction = (id: string, value: 'inc' | 'dec', stock: number) => void;



const initialState: initialStateTypes = {
  cart: typeof window !== 'undefined' && localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") as any)
  : null, // Use 'null' instead of an empty array for the initial cart value
  total: 0,
  total_price: 0,
  shippingFee: 5000,
};
 
const CartProvider = ({ children }:any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart : AddToCartFunction = (id, amount, product, stock) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product, stock } });
  };

  //increment amount and decrement amount
  const cartToggle: ToggleAmountFunction = (id, value, stock) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, value, stock } });
  };


  const removeItem : AddToCartFunction = (id) => {
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
