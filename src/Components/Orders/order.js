import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import './orders.css'

function Orders() {
    const [totalPrice, setTotalPrice] = useState(0);

    
    return (
        <div className="form-container">
        <form class="form-content row g-2">
            <div class="md-1">
                <label for="validationDefault01" class="form-label">Customer Name</label>
                <input type="text" class="forminpt form-control " id="validationDefault01"  required/>
            </div>           
            <br/>          
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Customer Email</label>
                <input type="text" class="forminpt form-control" id="formGroupExampleInput" placeholder=""/>
                </div>
                <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Customer Phonenumber</label>
                <input type="text" class="forminpt form-control" id="formGroupExampleInput2" placeholder="+25**********"/>
                </div>
            <div class="md-6">
                <label for="validationDefault03" class="form-label">Delivery Address</label>
                <input type="text" class="forminpt form-control" id="validationDefault03" required placeholder="If outside Kenya Please specify"/>
            </div>            
            <div className="total-price">
            Total Price: Ksh 
            {/* {isNaN() ? "0.00" : totalPrice.toFixed(2)} */}
          </div>
            <div class="form-check">
                <p className="formp">Payment Method:</p>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                    Mpesa
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" disabled/>
                    <label class="form-check-label" for="flexRadioDisabled">
                        Visa / MasterCard (coming soon)
                    </label>
            </div>                     
            <div class="col-12">
                <div class="formtc form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                <label class="form-check-label" for="invalidCheck2">
                    Agree to terms and conditions
                </label>
                </div>
            </div>
            <div class=" col-12">
                <button class="orderfmbtn btn btn-primary" type="submit">Place Order</button>
            </div>
            </form>
        </div>

    )
}

export default Orders