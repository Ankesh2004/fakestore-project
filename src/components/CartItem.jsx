import React,{useContext} from 'react'
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { CartContext } from '../contexts/CartContext';
import { IoTrashBinOutline } from "react-icons/io5";

const CartItem = ({ item }) => {
    const { id, title, price, amount, image } = item;
    const {removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext);
    return (
        <div className='border rounded-lg p-2 flex flex-row justify-around md:mx-24 lg:mx-32'>
            {/* Image and increase/decrease quantity buttons */}
            <div className='p-2 px-4 flex flex-col gap-3 md:w-[20%]'>
                <img
                    className="max-h-[80px] md:max-h-[120px] lg:max-h-[160px] group-hover:scale-110 transition duration-300"
                    src={image}
                    alt={title}
                />
                <div className='flex flex-row gap-2 items-center justify-center '>
                    <button className='p-2 rounded-full shadow-sm shadow-black bg-red-400 text-white font-bold text-sm md:text-md lg:text-lg transition-all duration-300 hover:scale-95 hover:shadow-md hover:shadow-black'
                    onClick={()=>{decreaseAmount(id)}}>
                        <GrSubtract/>
                    </button>
                    <p>{amount}</p>
                    <button className='p-2 rounded-full shadow-sm shadow-black bg-red-400 text-white font-bold text-sm md:text-md lg:text-lg transition-all duration-300 hover:scale-95 hover:shadow-md hover:shadow-black'
                    onClick={()=>{increaseAmount(id)}}>
                        <IoMdAdd />
                    </button>
                </div>
            </div>
            {/* Title, qantity and price */}
            <div className='p-2 px-4 flex flex-col justify-center items-start gap-2 md:gap-3 md:w-[70%]'>
                <h3 className='font-bold text-md md:text-lg lg:text-xl'>{title}</h3>
                <div className='flex flex-wrap items-center gap-2'>
                    <p className='font-bold text-sm md:text-md lg:text-lg'>Total Price :</p>
                    <p>({amount} x ${price}) =</p>
                    <p>${(amount * price).toFixed(2)}</p>
                </div>
                <button className='p-2 flex flex-row items-center gap-2 rounded-xl shadow-sm shadow-black bg-red-500 text-white font-bold text-sm md:text-md lg:text-lg transition-all duration-300 hover:scale-95 hover:shadow-md hover:shadow-black'
                onClick={()=>{removeFromCart(id)}}>
                    <IoTrashBinOutline/>
                    <h2>Remove</h2>
                </button>
            </div>

        </div>
    )
}

export default CartItem