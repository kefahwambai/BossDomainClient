import './App.css';
import React from 'react';
import NavBar from './Components/Navbar/navbar';
import LandingPage from './Components/LandingPage/landing';
import { Route, Routes } from 'react-router-dom';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/cart';
import Orders from './Components/Orders/order';
import ScrollToTop from './Components/ScrollToTop';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
      
      
    
  
    </div>
  );
}

export default App;
