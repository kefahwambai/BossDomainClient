import React, { useState, useEffect }  from "react";
import "./cart.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {    
    AiFillDelete
   
  } from "react-icons/ai";

function Checkout({  setCart, cart, handleClick, handleChange  }) {
    const [customer_name, setCustomerName] = useState('');
    const [customer_email, setCustomerEmail] = useState('');
    const [customer_phonenumber, setCustomerPhonenumber] = useState('');
    const [delivery_address, setDeliveryAddress] = useState('');
    const [totalPrice, setTotalPrice] = useState(''); 
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleRemove = (id) => {
        const arr = cart.filter((product) => product.id !== id);
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
 

    function handleMpesa(e) {
        e.preventDefault() 
        const formData = {
            phoneNumber: customer_phonenumber,
            amount: cart[0].amount
        }
        fetch('http://localhost:3000/stkpush', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((data) => console.log("Mpesa Successful", data))
    }

    function handleCart(e) {
        e.preventDefault()
        const formData = {
            customer_name: customer_name,
            customer_email: customer_email,
            customer_phonenumber: customer_phonenumber,
            delivery_address: delivery_address,
            product: cart[0].product_id,
            quantity: cart[0].quantity,
            amount: cart[0].amount
        }

        fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((newData) => console.log('Order Created!',newData))

    }   
    return (
        
            <div class="checkoutform">             
                <div className="cart-container">              
                {/* <!-- Heading --> */}
                <h2 class="my-5 text-center">Checkout form</h2>
                {/* <!--Grid row--> */}
                <div class="row">
                    {/* <!--Grid column--> */}
                    <div class="col-md-6 mb-1">
                        {/* <!--Card--> */}
                        <div className="cart-container">
                            {/* <!--Grid row--> */}
                            <div class="row mb-3">
                                {/* <!--Grid column--> */}
                                <div >                                  
                                    <div class="form-outline">                                        
                                        <label class="form-label" for="typeText">Customer name</label>
                                        <input
                                            type="text"
                                            className="forminpt form-control "                                            
                                            value={customer_name} 
                                            onChange={(event) => {setCustomerName(event.target.value)}} 
                                            required
                                            />
                                    </div>
                                </div>
                            </div>
                            <p class="mb-0">
                                Email
                            </p>
                            <div class="form-outline mb-4">
                            <input
                                type="email" 
                                className="forminpt form-control"
                                placeholder="youremail@example.com"                                 
                                value={customer_email} 
                                onChange={(event) => {setCustomerEmail(event.target.value)}} 
                                />
                            </div>                             
                            <p class="mb-0">
                                Phone Number
                            </p>
                            <div class="form-outline mb-4">
                            <input
                                type="number" 
                                className="forminpt form-control"
                                placeholder="+25*******" 
                                id="formGroupExampleInput" 
                                value={customer_phonenumber} 
                                onChange={(event) => {setCustomerPhonenumber(event.target.value)}} 
                                />
                            </div>
                            <p class="mb-0">
                                Delivery Address
                            </p>
                            <div class="form-outline mb-4">
                            <input 
                                type="text" 
                                className="forminpt form-control" 
                                id="validationDefault03" 
                                required 
                                placeholder="If outside Kenya Please specify"
                                value={delivery_address} 
                                onChange={(event) => {setDeliveryAddress(event.target.value)}} 
                                />
                            </div>
                            <div className="Ototal-price">
                                Total Price: Ksh {totalPrice}/-
                            
                            </div>
                            </div>
                            <hr />
                            <div class="my-3">
                            <div className="form-check">
                                <p className="formp">Payment Method:</p>
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label">
                                    Mpesa
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled/>
                                    <label className="form-check-label">
                                        Visa / MasterCard (coming soon)
                                    </label>
                            </div>  
                            </div>                    
                            {/* <hr class="mb-4" />                     */}
                         {/* <button class="btn btn-primary" type="button">Continue to checkout</button> */}
                        </div>                        
                    </div>
                <div class="col cartfrm">                    
                    <h4 className="cartnme d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge rounded-pill badge-primary">{cart.length}</span>
                    </h4>                   
                    <ul className="list-group mb-3">
                    {cart.map((product) => (
                        <li key={product.id} className="list-group-item d-flex justify-content-between">
                        <div>
                            <h6 className="my-0">{product.name}</h6>                            
                        </div>
                        <span className="text-muted">{`Kshs  ${product.amount}`}</span>
                        <AiFillDelete style={{ marginBottom: "2px" }} onClick={() => handleRemove(product.id)}
                          />{" "}
                        </li>
                    ))}
                   
                    <li className="list-group-item d-flex justify-content-between">
                        <span>Your Total is: </span>
                        <strong>Kshs {totalPrice}/-</strong>
                    </li>
                    </ul>
                    
                    <Link to="/orders" onClick={() => { handleCart(); handleMpesa(); }}>
                    <Button className="place-order-btn" variant="primary">
                        Proceed to Checkout
                    </Button>
                    </Link>
                </div>            
            </div>
            </div>
       

    )
}

export default Checkout 