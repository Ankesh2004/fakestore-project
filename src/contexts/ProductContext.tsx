import React, { useEffect, useState, createContext } from "react";

const ProductContext = createContext({});

const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // fetched products state
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  // product category
  const [category, setCategory] = useState("all");

  // category map
  const categoryMap: { [key: string]: string } = {
    "All": "all",
    "Electronics": "electronics",
    "Jewelery": "jewelery",
    "Men's Clothing": "men's clothing",
    "Women's Clothing": "women's clothing",
  };

  // category filter
  const filterProducts = (category: string) => {
    if (category === "all") {
      setProducts(allProducts);
    } else {
      setProducts(
        allProducts.filter((product: any) => product.category === categoryMap[category])
      );
    }
  };

  // fetch products
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setAllProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, filterProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
