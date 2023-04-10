import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./About.css";

export const About = () => {

    useEffect(() => {
        document.title = 'About Us'
      }, [])

  return (
    <section className="about">
      <div className="main">
        <img src="images/img-7.jpg" alt="about" />
        <div className="about-text">
          <h1 className="about-h1">About Us</h1>
          <h5>Travel Oasis <span className="aboutSpan"> travel agency</span></h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
          <Link className="about-btn" to='/catalog'>Browse our catalog</Link>
        </div>
      </div>
    </section>
  );
};
