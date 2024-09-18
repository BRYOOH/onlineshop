import React from 'react'
import './footer.css'
import logo from '../assets/pics/shopify.png'
import instagram from '../assets/icons/instagram.png'
import whatsapp from '../assets/icons/download.png'
import twitter from '../assets/icons/twitter.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="f-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>

      </div> 
      <ul className='f-links'>
        <li>Company</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <div className="f-socialContainer">
      <div className="f-container">
        <img src={instagram} alt=''/>
      </div>
      <div className="f-container">
        <img src={whatsapp} alt=''/>
      </div>
      <div className="f-container">
        <img src={twitter} alt=''/>
      </div>
      </div>
      <div className="f-footer">
        <hr />
        <p>
        Copright @ 2024 - All Rights Reserved.
       </p>
        </div>
    </div>
  )
}

export default Footer