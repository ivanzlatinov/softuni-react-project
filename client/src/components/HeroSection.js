import { Button } from "./Button"
import './HeroSection.css';


export const HeroSection = () => {

    return (
        <div className="hero-container">
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                Browse our catalog
                </Button>

            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                Create your trip
                </Button>


        </div>
        </div>
    )
}