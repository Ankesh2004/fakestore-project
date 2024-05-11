import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
