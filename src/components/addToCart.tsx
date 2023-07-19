import React from 'react'

const addToCart = ({product}) => {
    const [amount, setAmount] = React.useState(1);
    const {id} = product;
    console.log(id)

    const setIncrement = () => {
        setAmount(amount + 1)
    }
    const setDecrement = () => {
        setAmount(amount - 1)
    }
    const setAmountValue = (e) => {
        setAmount(e.target.value)
    }

  return (
    <div>
        <div className='flex justify-between items-center'>
        <button className='border bg-yellow-400 rounded-lg p-2 font-bold' onClick={setDecrement}>-</button>
        <input type='number' className='border rounded-lg p-2 font-bold' value={amount} onChange={setAmountValue}/>
        <button className='border bg-yellow-400 rounded-lg p-2 font-bold' onClick={setIncrement}>+</button>
        </div>
        <button className='border bg-yellow-400 rounded-lg p-2 font-bold' >Add to Cart</button>
    </div>
  )
}

export default addToCart;