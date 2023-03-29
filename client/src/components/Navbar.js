import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    
    //state for dropdown menu


    return (
   <>
   <nav className="navbar">
     <div className="navbar-container">
        <Link to="/" className="navbar-logo">
            Travel Oasis 
        </Link>
        <div className="menu-icon">
            {/* fontawesome icon */}
        </div>

        <ul className="nav-menu">
        <li className="nav-item">
            <Link to='/' className="nav-links" > 
            Home
            </Link>
        </li>
        <li className="nav-item">
            <Link to='/catalog' className="nav-links" > 
            Book a trip
            </Link>
        </li>
        <li className="nav-item">
            <Link to='/about' className="nav-links" > 
            About us
            </Link>
        </li>
        <li className="nav-item">
            <Link to='/login' className="nav-links" > 
            Login
            </Link>
        </li>
        <li className="nav-item">
            <Link to='/register' className="nav-links" > 
            Register
            </Link>
        </li>
        </ul>
     </div>
   </nav>
   </>
    );
}