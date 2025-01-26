import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-info'>
          <h2>Job Nest</h2>
          <p>Our website offers jobs in almost every region in India.We are awarded as the best job searching website making us number one job searching website of the year</p>
       </div>
       <div className='footer-links'>
         <h2>Our Links</h2>
         <Link to='/about' >About Us</Link>
         <Link to='/about' >Blogs</Link>
         <Link to='/about' >Pricing</Link>
       </div>
       <div className='footer-contact'>
          <h2>Contact Us</h2>
          <p>☎  +91 9411568418</p>
          <p>✉ rachitdhyani2002@gmail.com </p>
          <p>🏳 Uttrakhand, India</p>
       </div>
    </div>
  )
}

export default Footer