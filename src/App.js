import './App.css';
import React from 'react';
import NavBar from './Components/Navbar/navbar';
import LandingPage from './Components/LandingPage/landing';
import { Route, Routes } from 'react-router-dom';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/cart';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
      
    
  
    </div>
  );
}

export default App;
