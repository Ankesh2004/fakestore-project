import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductContextProvider from './contexts/ProductContext';
import CartContextProvider from './contexts/CartContext';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProdctDetails';

function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
        <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={
              <ProductContextProvider>
                <Home/>
              </ProductContextProvider>
            } />
            <Route path="/product/:id" element={
              <ProductContextProvider>
                <ProductDetails />
              </ProductContextProvider>
            } />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartContextProvider>
      </Router>
    </div>
  );
}

export default App;
