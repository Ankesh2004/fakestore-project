import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Spinner from "../components/Spinner";

const ProductDetails = () => {
  // get the product id from url
  const { id } = useParams<{ id: string}>();
  const { addToCart } = useContext(CartContext);
const { products } = useContext(ProductContext);

// filter out single product
const product = products.find((item) => {
    return item.id === parseInt(id || "");
});

// if product is not found
if (!product) {
    return (
        <section className="h-screen flex justify-center items-center">
            <Spinner/>
        </section>
    );
}

  const { title, price, description, image } = product;
  return (
    <section className="mt-24 md:mt-4 md:pt-32 pb-[2rem] md:pb-12 lg:py-32 flex items-center">
      <div className="container mx-auto">
        {/* image and text */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-xs" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center items-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
            <div className="text-2xl text-red-500 font-medium mb-6">$ {price}</div>
            <p className="mb-8">{description}</p>
            <div className="flex items-center justify-center">
                <button onClick={()=>addToCart(product, product.id)} className='p-2 flex flex-row items-center gap-2 rounded-xl shadow-sm shadow-black bg-red-500 text-white font-bold text-sm md:text-md lg:text-lg transition-all duration-300 hover:scale-95 hover:shadow-md hover:shadow-black'>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
