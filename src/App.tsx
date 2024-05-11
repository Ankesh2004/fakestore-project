import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductContextProvider from './contexts/ProductContext';

function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={
            <ProductContextProvider>
              <Home/>
            </ProductContextProvider>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
