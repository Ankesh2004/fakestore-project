import React,{useState,useEffect,useContext} from 'react'
import { Link } from 'react-router-dom';
import { MdStore } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from '../contexts/CartContext';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const {itemAmount} = useContext(CartContext)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  
  return (
    <header
      className={`${
        isActive ? "bg-red-50 py-4 shadow-md" : "bg-red-100 py-6"
      } fixed flex flex-row items-center justify-around  w-full z-10 px-4 lg:px-8 transition-all`}
    >
      {/* Logo  - Directing to home*/}
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div className="flex items-center">
            <MdStore className="text-4xl text-red-500" />
            <h1 className="text-xl font-bold text-gray-800">FakeStore</h1>
          </div>
        </Link>
      </div>

      {/* Cart  */}
      <div>
        <Link to={"/cart"} className='flex relative cursor-pointer'>
          <IoCartOutline className="text-2xl text-gray-800" />
          <span className="absolute top-3 left-4 bg-red-500 text-white rounded-full px-1 text-xs">{itemAmount}</span>
        </Link>
      </div>

    </header>
  );
};

export default Navbar;