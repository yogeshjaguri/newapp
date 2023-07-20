import useCart from '@/hooks/useCart';
import Link from 'next/link';
import React, { useState } from 'react';

const AddToCart = ({product}:any) => {
    const {AddToCart} = useCart();
    const [amount, setAmount] = useState(1);
    const {id, stock} = product;
    console.log(id)

    const setIncrement = () => {
        amount < stock ? setAmount(amount + 1) :
        setAmount(stock)
    }
    const setDecrement = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setAmountValue = (e:any) => {
        setAmount(e.target.value)
    }

  return (
    <div className='h-2'>
        <div className='flex justify-between items-center'>
        <button className='border bg-yellow-400 rounded-lg p-2 font-bold' onClick={()=>setDecrement()}>-</button>
        <input type='number' className='border rounded-lg  w-2 m-2 font-bold' value={amount} onChange={setAmountValue}/>
        <button className='border bg-yellow-400 rounded-lg p-2 font-bold' onClick={()=>setIncrement()}>+</button>
        </div>
        <Link href={`/cart`}
        onClick={()=>AddToCart(id,amount,product)}>
        <button className='border bg-yellow-400 rounded-lg  font-bold' >Add to Cart</button>
        </Link>
    </div>
  )
}

export default AddToCart;