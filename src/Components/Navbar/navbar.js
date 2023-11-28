import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineShop
} from "react-icons/ai";
import  "./navbar.css"

function NavBar({ cart, setCart, size }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  document.addEventListener("DOMContentLoaded", function scrollHandler() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY >= 20 || window.scrollY > 0) {
      navbar.classList.add('shadow');
      updateNavbar(true);
    } else {
      navbar.classList.remove('shadow');
      updateNavbar(false);
    }
  window.addEventListener("scroll", scrollHandler);
  
  });

  // useEffect(() => {
  //   const savedCart = JSON.parse(localStorage.getItem("cart")); 
  //   if (savedCart) {
  //     console.log(savedCart)
  //     setCart(savedCart);
  //   }
  // }, [setCart]);

  // useEffect(() => {  
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        {/* <Link to="/"> */}
                <a href="/" className='logotxt'>                
                   <span className='logotxt'> 
                     The <span className="logospn"> Boss</span> Domain
                   </span>                
                 </a>
        {/* </Link>
           */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>              
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>             
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/shop"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineShop
                  style={{ marginBottom: "2px" }}
                />{" "}
                Shop
              </Nav.Link>
            </Nav.Item>
            {size ? (
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/cart"
                  onClick={(event) => {
                    // updateExpanded(false);
                    event.preventDefault();
                  }}
                  // onClick={() => updateExpanded(false)}
                >
                  <AiOutlineShoppingCart
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  Cart
                </Nav.Link>
              </Nav.Item> 
            ) : (
              <>
              </>
            )}         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
