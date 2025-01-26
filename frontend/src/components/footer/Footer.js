import React from 'react'
import './Footer.css'
// import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-info'>
          <h2>Next Hire</h2>
          <p>Our website offers jobs in almost every region in India.We are awarded as the best job searching website making us number one job searching website of the year</p>
       </div>
       {/* <div className='footer-links'>
         <h2>Our Links</h2>
         <a href='#' >About Us</a>
         <a href='#' >Blogs</a>
         <a href='#' >Pricing</a>
       </div> */}
       <div className='footer-contact'>
          <h2>Contact Us</h2>
          <p>☎  +91 9876543210</p>
          <p>✉ nexthire@gmail.com </p>
          <p>🏳 Tamil Nadu, India</p>
       </div>
    </div>
  )
}

export default Footer