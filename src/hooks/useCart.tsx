'use client'
import { CartContext } from "@/contexts/cartContext";
import { useContext } from "react";

const useCart = () => {
    return useContext(CartContext);
}

export default useCart;