import { FaMinus, FaPlus } from "react-icons/fa"

const CartAmountToggle = ({amount, setIncrement,setDecrement}) => {
    return (
        
          
                <div className="flex justify-center m-4">
                    <button className=" font-bold py-2 px-4 rounded-full" onClick={() => setDecrement()}><FaMinus/></button>
                    <div className=" font-bold py-2 px-4 rounded-full">{amount}</div>
                    <button className=" font-bold py-2 px-4 rounded-full" onClick={() => setIncrement()}><FaPlus/></button>
                </div>
        
    )
}

export default CartAmountToggle;