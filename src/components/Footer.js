import React from 'react'
import './footer.css'
import logo from '../assets/white-logo.png'

const Footer = () => {
  return (
    <>
        <div className='footer'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <h2>Links</h2>
                <ul>
                    <li>Overons</li>
                    <li>Social Media</li>
                    <li>Counters</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="links">
                <h2>Company</h2>
                <ul>
                    <li>Terms and Condition</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="links">
                <h2>Get in Touch</h2>
                <ul>
                    <li>Crechterwoord K12 182 DK Alknjkcb</li>
                    <li>085-132567</li>
                    <li>info@payme.net</li>

                </ul>
            </div>
           
        </div>
    </>
  )
}

export default Footer