import React from 'react';
import './Fotter.css';

export const Fotter = () => {
  return (
  <footer className="newsletter-section">
        <h3>Subscribe to our newsletter</h3>
        <p>
          Get expert advice for your journey to university delivered to your inbox each month. It’s short, and worthwhile – we promise!
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Email address" required />
          <div className="checkbox-row">
            <input type="checkbox" id="consent" required />
            <label htmlFor="consent">
              I confirm I am over 16 and I agree to the Terms and Conditions and Privacy Notice.
            </label>
          </div>
          <button type="submit" className="subscribe-btn">SUBSCRIBE NOW</button>
        </form>
        <div className="social-icons">
          <a href="#"><img src="./fezbook.png" alt="Facebook" /></a>
          <a href="#"><img src="./instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="./tiwintir.png" alt="Twitter" /></a>
          <a href="#"><img src="./mdi_linkedin.png" alt="LinkedIn" /></a>
        </div>
      </footer>
    );  
};

export default Fotter;