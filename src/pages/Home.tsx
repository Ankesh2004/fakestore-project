import React,{useContext} from 'react'
import { ProductContext } from '../contexts/ProductContext'
import ProductCard from '../components/ProductCard'

interface ProductContextType {
    products: any[];
    filterProducts: (category: string) => void;
}

const Home = () => {
    // Get products and filterProducts from ProductContext
    const { products, filterProducts } = useContext<ProductContextType>(ProductContext);

    return (
        <div className='mt-24 p-8 mx-8'>
            <h1 className='text-center font-bold lg:text-4xl text-2xl'>Explore Our Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                {products.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Home