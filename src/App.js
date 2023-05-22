import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ShoppingCartPage from './ShoppingCartPage';
import { CartProvider } from './CartContext';
import './App.css';

const App = () => {
    return (
      <div>
        <CartProvider>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/cart" element={<ShoppingCartPage/>}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
        </div>
    );
  };
  
  export default App;
  
