
import './Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='footer-container'>
        <section className='footer-subscription'>
         
        </section>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/'>How it works</Link>
              <Link to='/'>Testimonials</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Investors</Link>
              <Link to='/'>Terms of Service</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Destinations</Link>
              <Link to='/'>Sponsorships</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Videos</h2>
              <Link >Submit Video</Link>
              <Link >Ambassadors</Link>
              <Link >Agency</Link>
              <Link >Influencer</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Social Media</h2>
              <Link >Instagram</Link>
              <Link >Facebook</Link>
              <Link >Youtube</Link>
              <Link >Twitter</Link>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link  className='social-logo'>
                Travel Oasis
               
              </Link>
            </div>
            <small className='website-rights'>Travel Oasis 2023</small>
            <div className='social-icons'>
              <Link
                className='social-icon-link facebook'
                
                target='_blank'
                aria-label='Facebook'
              >
                <i className='fab fa-facebook-f' />
              </Link>
              <Link
                className='social-icon-link instagram'
                
                target='_blank'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </Link>
              <Link
                className='social-icon-link youtube'
               
                target='_blank'
                aria-label='Youtube'
              >
                <i className='fab fa-youtube' />
              </Link>
              <Link
                className='social-icon-link twitter'
               
                target='_blank'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
              <Link
                className='social-icon-link twitter'
                
                target='_blank'
                aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
    
}