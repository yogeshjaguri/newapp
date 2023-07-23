const CartItem = ({ id,  amount, product }) => {
    const { title, price, thumbnail } = product;
    return (
    <div className='grid grid-cols-4  grid-flow-row gap-1 p-1'>
      <div className='flex'>
        <img className='w-20 h-20' src={thumbnail} alt={title}/>
        <p>{title}</p>
      </div>
      <div className=''>
        <p>{price}</p>
      </div>
      <div className=''>
        <p>{amount}</p>
      </div>
    </div>
    );
}

export default CartItem;