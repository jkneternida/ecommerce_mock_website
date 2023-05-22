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
          <Router>
            <Routes>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cart" element={<ShoppingCartPage/>}/>
            </BrowserRouter>
            </Routes>
          </Router>
        </CartProvider>
        </div>
    );
  };
  
  export default App;
  
