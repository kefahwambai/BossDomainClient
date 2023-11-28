import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import "./cart.css";
import { Link, useNavigate }  from "react-router-dom";


function Cart({ cart, setCart, handleChange }) {
  const history = useNavigate();
  const [totalPrice, setTotalPrice] = useState('');  


  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));    
  
    if (savedCart) {
      console.log(savedCart)
      setCart(savedCart);
    }
  }, [setCart]);

  useEffect(() => {
    let ans = 0;
    cart.forEach((item) => {
      if (item.quantity && item.amount) {
        ans += item.quantity * item.amount;
      }
    });
    console.log(ans)
    setTotalPrice(ans);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleRemove = (product) => {
    setCart(cart.filter((i) => i !== product));
  };


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
                      onClick={() => handleRemove(product)}                    
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
          <Link to="/orders">
            <Button className="place-order-btn" variant="primary">
              Proceed to Checkout
            </Button>
          </Link>
         
        </>
    )} 
    </div>
  );
}

export default Cart;