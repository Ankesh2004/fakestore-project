import React, { useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cart, itemAmount, total } = useContext(CartContext);

  return (
    <div className='mt-24 text-center p-8'>
      <h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>Cart</h1>
      {!cart || itemAmount === 0 ? (  
        // If cart is empty
        <div className='flex justify-center p-[1rem] m-auto'>
          <h2>Your cart is empty!</h2>
        </div>
      ) : (
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {cart.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className='mt-4 flex flex-wrap items-center gap-4 justify-center'>
            <h2 className='font-bold text-xl md:text-2xl lg:text-3xl'>Total: ${total}</h2>
            <button className='p-3 rounded-xl shadow-md shadow-black bg-red-500 text-white font-bold text-lg md:text-xl lg:text-2xl'>Checkout</button>
          </div>
        </div>
      )
      }
    </div>
  );
}

export default Cart;
