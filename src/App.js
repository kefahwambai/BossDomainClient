import './App.css';
import { useState } from 'react';
import React from 'react';
import NavBar from './Components/Navbar/navbar';
import LandingPage from './Components/LandingPage/landing';
import { Route, Routes } from 'react-router-dom';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/cart';
import Orders from './Components/Orders/order';
import ScrollToTop from './Components/ScrollToTop';
import About from './Components/About/About';
import Footer from './Components/Footer/footer';


function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    console.log(product);
    const isProductInCart = cart.some((item) => item.id === product.id);  
    if (!isProductInCart) {      
      const updatedProduct = { ...product, quantity: 1 };
      setCart((prevCart) => [...prevCart, updatedProduct]);
    }
  };


  const handleChange = (product, d) => {    
    const updatedCart = cart.map((product) => {
      
      return product.id === product.id ? {
        ...product,
        quantity: Math.max(1, (product.quantity || 0) + d),
      } : product;
    });
    setCart(updatedCart);
  };
  
  

  return (
    
    <div className="App">
      <NavBar size={cart.length} />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<About/>}/>        
        <Route path="/shop" element={<Shop handleClick={handleClick}/>}/>
        <Route path="/cart" element={<Cart cart={cart}  setCart={setCart} handleChange={handleChange} />} />
        <Route path="/orders" element={<Orders cart={cart} setCart={setCart} />}/>
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
