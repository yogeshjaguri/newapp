'use client'
import CartItem from "@/components/CartItem";
import useCart from "@/hooks/useCart";
import Link from "next/link";

const Cart = () => {
  const { cart, clearCart, total_price, shippingFee } = useCart() as any;

  
  return (
    <>
    <div className='md:m-10'>
      <div className='text-blue-600'>
      <Link href='/'>
        Back
      </Link>
      </div>
      
      {cart.length === 0 ? <h1 className="bg-red-200 w-full h-60 flex justify-center items-center">Cart is empty</h1>  : (<>
        <div className='border grid
        grid-cols-5 grid-flow-row gap-1 p-1'>
              {/* <Product {...product} /> */}
              <p className="p-2">Item</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>subTotal</p>
              <p>Remove</p>
            
        </div>
        <div>
        {cart.map((product: any) => {
          return <CartItem key={product.id} {...product} />;
        })}
          </div>

          <hr/>
          <div className='flex justify-between'>
            <Link href='/'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Continue Shopping
          </button>
          </Link>
          <button onClick={clearCart} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Clear Cart
          </button>
          </div>
          </>
          )}

          <div>
            <div>
            <h3>Subtotal :</h3>
            <p>&#8377;{total_price}</p>
            </div>
            <div>
            <h1>shipping Fee :</h1>
            <p>&#8377;{shippingFee}</p>
            </div>
            <hr/>
            <div>
            <h1>Total :</h1>
            <p>&#8377;{total_price + shippingFee}</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Cart;