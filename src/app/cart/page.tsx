'use client'
import CartItem from "@/components/CartItem";
import useCart from "@/hooks/useCart";
import Link from "next/link";

const Cart = () => {
  const { cart } = useCart();
  console.log(cart)
  return (

    <div className=''>
      <div className='text-blue-600'>
      <Link href='/'>
        Back
      </Link>
    </div>
      
      <div className='border grid
      grid-cols-4  grid-flow-row gap-1 p-1'>
            {/* <Product {...product} /> */}
            <p className="p-2">Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
          
      </div>
      <div>
      {cart.map((product: any) => {
        return <CartItem key={product.id} {...product} />;
      })}
        </div>
    </div>

  )
}

export default Cart;