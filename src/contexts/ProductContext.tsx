import React, { useEffect, useState, createContext } from "react";

export interface ProductContextType {
    products: any[];
    allProducts: any[];
    setProducts: React.Dispatch<React.SetStateAction<any[]>>;
    filterProducts: (category: string) => void;
    loadingProducts: boolean;
}

export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // fetched products state
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const [loadingProducts, setLoadingProducts] = useState(true);

  // category filter
  const filterProducts = (category: string) => {
    setLoadingProducts(true);
    if (category === "all") {
      setProducts(allProducts);
    } else {
      setProducts(
        allProducts.filter((product: any) => product.category === category)
      );
    }
    setLoadingProducts(false);
  };

  // fetch products
  const fetchProducts = async () => {
    console.log("Fetching data");
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log("Fetched data",data);
    setLoadingProducts(false);
    setProducts(data);
    setAllProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

return (
    <ProductContext.Provider
        value={{ products,allProducts ,setProducts: setProducts as React.Dispatch<React.SetStateAction<any[]>>, filterProducts, loadingProducts }}
    >
        {children}
    </ProductContext.Provider>
);
};

export default ProductContextProvider;
