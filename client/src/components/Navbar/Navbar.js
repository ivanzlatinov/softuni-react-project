 //import { useState } from "react";
import { Link } from "react-router-dom";
 //import { Button } from "./Button";
import './Navbar.css';

export const Navbar = () => {
    
    //state for dropdown menu
    //const [button, setButton] = useState(true);



    return (

   <>
   <nav className="navbar">
     <div className="navbar-container">
        <Link to="/home" className="navbar-logo">
            Travel Oasis 
        </Link>
        <div className="menu-icon">
            {/* fontawesome icon */}
        </div>

        <ul className="nav-menu">
        <li className="nav-item">
            <Link to='/home' className="nav-links" > 
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
            <Link to='/create-trip' className="nav-links" > 
            Create your trip
            </Link>
        </li>
        <li className="nav-item">
            <Link to='/logout' className="nav-links" > 
            Logout
            </Link>
        </li>
        <li className="nav-item">
            <Link to='/register' className="nav-links" > 
            Register
            </Link>
        </li>
        </ul>
       {/*  {button && <Button buttonStyle='btn--outline'>Register</Button>} */}
     </div>
   </nav>
   </>
    );
}