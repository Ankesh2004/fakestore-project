import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "../components/ProductCard";

interface ProductContextType {
  products: any[];
  allProducts: any[];
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
  filterProducts: (category: string) => void;
}

const Home = () => {
  // destructure from ProductContext
  const { products, allProducts, setProducts, filterProducts,loadingProducts } =
    useContext<ProductContextType>(ProductContext);

  // Filter products based on search text
  // Searchbar Text
  const [searchText, setSearchText] = useState("");

  // Function to handle search
  const filterSearch = (searchText: string) => {
    const filteredProducts = allProducts.filter((product: any) => {
      return (
        product.title.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase()) ||
        product.category.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setProducts(filteredProducts);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    console.log(e.target.value);
    filterSearch(e.target.value);
  };

  // Filter products based on category
  // product category
  const [category, setCategory] = useState("all");

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    filterProducts(e.target.value);
  };

  return (
    <div className="mt-24 p-8 mx-8">
      <h1 className="text-center font-bold lg:text-4xl text-2xl">
        Explore Our Products
      </h1>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="flex w-[70%] justify-center mt-4">
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search Products"
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex justify-center w-[30%] mt-4">
          <select
            value={category}
            onChange={handleCategory}
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded-md"
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Cloting</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
