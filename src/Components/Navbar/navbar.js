import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import  "./navbar.css"
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
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
        <a href="http:localhost:3000/" className='logotxt'>                
                   <span className='logotxt'> 
                     The Boss Domain
                   </span>                
                 </a>  
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

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
                <AiOutlineShoppingCart
                  style={{ marginBottom: "2px" }}
                />{" "}
                Shop
              </Nav.Link>
            </Nav.Item>            
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
