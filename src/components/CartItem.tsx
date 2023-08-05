import useCart from "@/hooks/useCart";
import { FaTrash } from "react-icons/fa";
import CartAmountToggle from "@/components/CartAmountToggle";

const CartItem = ({ id,  amount, product } :any) => {
    const { removeItem, cartToggle } = useCart()as any;
    const { title, price, thumbnail,stock } = product;
    console.log(stock)
    return (
    <div className='grid grid-cols-5  grid-flow-row gap-1 p-1 items-center'>
      <div className='flex items-center'>
        <img className='w-20 h-20 p-2' src={thumbnail} alt={title}/>
        <p>{title}</p>
      </div>
      <div className=''>
        <p>&#8377;{price}</p>
      </div>

      <CartAmountToggle
      setDecrement = {()=>cartToggle(id, 'dec')}
      amount = {amount}
      setIncrement = {()=>cartToggle(id, 'inc', {stock} )} />

      <div className=''>
        <p>&#8377;{amount * price}</p>
      </div>
      <div>
        <FaTrash className="cursor-pointer" onClick={()=> removeItem(id)}/>
      </div>
    </div>
    );
}

export default CartItem;