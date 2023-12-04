import React, { useState, useEffect } from "react";
import "./cart.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange, handleClick }) => {
  const [totalPrice, setTotalPrice] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    console.log(cart)
    cart.map((item) => (ans += item.amount * item.quantity));
    console.log(ans);
    setTotalPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div className="empty-cart">No items in cart</div>
      ) : (
        <>
          <table striped bordered hover responsive>
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
                    <span className="quantity"> {product.quantity} </span>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="ml-2"
                      onClick={() => handleChange(product, 1)}
                    >
                      +
                    </Button>
                  </td>
                  <td> Ksh
                    {product.quantity === 0
                      ? product.amount
                      : product.amount * product.quantity
                    }
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleRemove(product.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total">
            <span>Your Total is: </span>
            <span>Kshs.{totalPrice}</span>
          </div>
          <Link to="/orders" onClick={() => handleClick(selectedProduct)}>
            <Button className="place-order-btn" variant="primary">
              Proceed to Checkout
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
