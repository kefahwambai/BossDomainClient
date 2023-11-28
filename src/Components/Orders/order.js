import React from "react";
import { useState, useEffect } from "react";
import './orders.css'

function Orders({  setCart, cart }) {
    const [customer_name, setCustomerName] = useState('');
    const [customer_email, setCustomerEmail] = useState('');
    const [customer_phonenumber, setCustomerPhonenumber] = useState('');
    const [delivery_address, setDeliveryAddress] = useState('');
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
    
      setTotalPrice(ans);
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
   


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
        <div className="form-container">
        <form className="form-content row g-2">
            <div className="md-1">
                <label className="form-label">Customer Name</label>
                <input
                    type="text"
                    className="forminpt form-control " 
                    id="validationDefault01"
                    value={customer_name} 
                    onChange={(event) => {setCustomerName(event.target.value)}} 
                    required/>
            </div>           
            <br/>          
            <div className="mb-3">
                <label className="form-label">Customer Email</label>
                <input
                    type="text" 
                    className="forminpt form-control" 
                    id="formGroupExampleInput" 
                    value={customer_email} 
                    onChange={(event) => {setCustomerEmail(event.target.value)}} 
                    />
                </div>
                <div className="frmlbl mb-3">
                <label className="form-label">Customer Phonenumber</label>
                <input 
                    type="number" 
                    className="forminpt form-control" 
                    id="formGroupExampleInput2" 
                    placeholder="+25**********"
                    value={customer_phonenumber} 
                    onChange={(event) => {setCustomerPhonenumber(event.target.value)}} 
                    />
                </div>
            <div className="md-6">
                <label className="form-label">Delivery Address</label>
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
            <div className="md-6">
                {/* <label className="prdctlbl form-label">
                    {cart[0].name}
                    </label>              */}
            </div>            
            <div className="Ototal-price">
            Total Price: Ksh {totalPrice}/-
           
          </div>
            <div className="form-check">
                <p className="formp">Payment Method:</p>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={handleMpesa}/>
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
            <div className="col-12">
                <div className="formtc form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                <label className="form-check-label">
                    Agree to terms and conditions
                </label>
                </div>
            </div>
            <div className="col-12">
                <button className="orderfmbtn btn btn-primary" type="submit" onSubmit={handleCart}>Place Order</button>
            </div>
            </form>
        </div>

    )
}

export default Orders