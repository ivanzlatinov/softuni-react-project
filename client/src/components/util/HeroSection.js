import { Link } from "react-router-dom";
import './Button.css'
import './HeroSection.css';


export const HeroSection = () => {

    return (
        <div className="hero-container">
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Link to='/catalog' className="btns btn--outline btn--large" >
                Browse our catalog
                </Link>

            <Link to='/create' className="btns btn--outline btn--large" >
                Create your trip
                </Link>


        </div>
        </div>
    )
}