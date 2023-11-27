import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import "./cart.css";
import { Link } from "react-router-dom";

function Cart({ cart, setCart, handleChange }) {

  
  const totalPrice = cart.reduce((total, product) => {
    return total + product.amount * product.quantity;
  }, 0);

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div className="empty-cart">No items in cart</div>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead className="theads">
              <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="theads">
              {cart.map((product) => (                
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td> {product.amount}/-</td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="mr-2"
                      onClick={() => handleChange(product, -1)}
                    >
                      -
                    </Button>
                    <span className="quantity">{product.quantity}</span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="ml-2"
                      onClick={() => handleChange(product, 1)}
                    >
                      +
                    </Button>
                  </td>
                  <td>Ksh {product.amount * product.quantity}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"                    
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="total-price">
            <span>Your Cart Total is:</span>
            <span>Kshs {totalPrice}</span>
          </div>
          <Link to={{ pathname: "/orders", state: { totalPrice } }}>
            <Button
              className="place-order-btn"
              variant="primary"       
            >
              Proceed to Checkout
            </Button>
          </Link>
         
        </>
    )} 
    </div>
  );
}

export default Cart;