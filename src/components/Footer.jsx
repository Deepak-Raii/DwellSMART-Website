import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import Logo from '../images/DwellSmart_Logo.svg'

export default function Footer() {
  return (
    <>
    <div className="container-fluid footer-mainDiv">
      <div className="logo">
        <img src='http://www.dwellsmart.co.in/resources/56ed99338809400a171c667b_logo.png' alt="logo"/>
      </div>
      <div className="links">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='products'>Products</Link></li>
          <li><Link to='contact_us'>Contact</Link></li>
        </ul>
      </div>

      {/* <div className="support">
        <p style={{color:'gray'}}>Customer Support</p>
        <p style={{color:'gray'}}>sales@dwellsmart.co.in</p>   
      </div> */}

      <div>
        <address style={{color:'gray'}}>
        302, Tower B Logix Technova <br /> Sector 132, Noida, UP - 201304
        </address>
      </div>
      
    </div>
    <p style={{ fontSize: "10px", textAlign: "center", marginTop: "1rem", backgroundColor:'white', color:"black", width:'100vw' }}>
        Copyright 2016 DwellSMART Pvt. Ltd. All rights reserved.
    </p>
    </>
  );
}
