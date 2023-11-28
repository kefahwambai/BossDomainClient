import React from 'react';
import css from './footer.css'
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer className="footer-distributed">
               
    <section className="">
      <form action="">
        
        <div className="row d-flex justify-content-center">
         
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
        
          <div className="col-md-5 col-12">
            
            <div data-mdb-input-init className="form-outline mb-4">
              <input type="email" id="form5Example24" className="form-control" placeholder='Email Address' />
              
            </div>
          </div>        
          <div className="col-auto">            
            <button data-mdb-ripple-init type="submit" className="btnn btn btn-outline mb-4">
              Subscribe
            </button>
          </div>
        
        </div>
      
      </form>
    </section>

        <div className="footer-left">

            <h3>The <span>Boss</span> Domain</h3>

            <p className="footer-links">
                <a className="link-1"><Link to="/">Home</Link></a>
                
                < Link to="/about">AboutUs</Link>
            
                <Link to="/ContactUs">Contact Us</Link>
                
                <Link to="/FAQ">FAQ</Link>

            </p>

            <p className="footer-company-name"> &copy; 2023 TheBossDomain. All rights reserved.</p>
        </div>

        <div className="footer-center">

            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>444 S. Cedros Ave</span> Kabati, Kitui</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>+25471234567</p>
            </div>

            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:support@ignitionrentals.com">support@bossdomain.com</a></p>
            </div>

        </div>

        <div className="footer-right">

            <p className="footer-company-about">
                <span>About the company</span>
                Embark on a transformative journey of self-discovery and empowerment with The Boss Domain, your trusted guide to unlocking your limitless potential. We are passionate about nurturing a community of ambitious individuals who aspire to become the bosses of their lives, careers, and businesses.
            </p>
            

        </div>

    </footer>


    );
}

export default Footer;