
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import './Button.css'
import './HeroSection.css';


export const HeroSection = () => {

    const { isAuthenticated } = useContext(AuthContext)

    return (
        <div className="hero-container">
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            {isAuthenticated ? 
            <Link to='/catalog' className="btns btn--outline btn--large" >
            Browse our catalog
            </Link>
            :
            <Link to='/login' className="btns btn--outline btn--large" >
                Browse our catalog
                </Link>
                }
            {isAuthenticated ?
              <Link to='/create-trip' className="btns btn--outline btn--large" >
              Create your trip
              </Link>
             :
             <Link to='/login' className="btns btn--outline btn--large" >
             Create your trip
             </Link> 
             }

        
        </div>
        </div>
    )
}