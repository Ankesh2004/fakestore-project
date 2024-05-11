import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

const ProductCard = ({product}: {product: any}) => {
  const {id,category,title,price,image} = product
  return (
    <div>
        <div className="border rounded-sm border-[#e4e4e4] h-[320px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* Product Image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={product.title}
            />
          </div>
        </div>
        {/* CTA buttons */}
        <div className="absolute right-[30%] gap-2 -bottom-10 group-hover:bottom-5 p-2 flex flex-row justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex rounded-xl justify-center gap-1 items-center text-white p-2 h-12 bg-red-400">
              <IoIosAddCircleOutline className="text-3xl" />
              <h3>Add to Cart</h3>
  
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 rounded-full bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <IoEyeOutline  />
          </Link>
        </div>
      </div>
      {/* category, title and price of the product*/}
      <div className='flex flex-row justify-between'>
        <div className='w-[85%]'>
        <div className="tex-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>

        </div>
        <div>
          <h2 className="font-semibbold">$ {price}</h2>
        </div>
        
      </div>
    </div>
  )
}

export default ProductCard