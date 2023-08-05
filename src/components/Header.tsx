
import useCart from "@/hooks/useCart";
import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const page = () => {
  const {total} = useCart() as any;
 

  return (
    <div className="h-16 flex bg-white  justify-end">
      
      <Link href='/cart' >
      <div className="flex items-center">
        <AiOutlineShoppingCart
          size={30}
          className="m-2 relative"
          color="#00ced1"
        />
        <p className="absolute right-2 top-3 bg-red-500 text-white font-bold rounded-full px-1 text-xs">
          {total}
        </p>
      </div>
      </Link>
    </div>
  );
};

export default page;
