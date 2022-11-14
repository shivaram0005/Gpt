import React from 'react'
import "./navbar.css"
import logo from '../assets/white-logo.png'


const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div className="navbar-logo">
                 <img src={logo} alt="" />  
            </div>
            <div className="navbar-list">
                    <ul className="list">
                        <li className="list-items">Home</li>
                        <li className="list-items">What is GPT?</li>
                        <li className="list-items">Open AI</li>
                        <li className="list-items">Case Studies</li>
                        <li className="list-items">Library</li>
                       
                    </ul>
            </div>
            <div className="navbar-buttons">
                <p>Sign In</p>
                <button>Sign Up</button>
            </div>
        </div>
    </>
  )
}

export default Navbar
