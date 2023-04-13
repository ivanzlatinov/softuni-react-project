import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./About.css";

export const About = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <section className="about">
      <div className="main">
        <img src="images/img-7.jpg" alt="about" />
        <div className="about-text">
          <h1 className="about-h1">About Us</h1>
          <h5>
            Travel Oasis <span className="aboutSpan"> travel agency</span>
          </h5>
          <p>
            “Travel is the main thing you purchase that makes you more
            extravagant”. We, at Travel Oasis, swear by this and put
            stock in satisfying travel dreams that make you perpetually rich
            constantly. We have been moving excellent encounters for a
            considerable length of time through our cutting-edge planned
            occasion bundles and other fundamental travel administrations. We
            rouse our clients to carry on with a rich life, brimming with
            extraordinary travel encounters.
          </p>
          <Link className="about-btn" to="/catalog">
            Browse our catalog
          </Link>
        </div>
      </div>
    </section>
  );
};
