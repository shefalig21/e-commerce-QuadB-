import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed to newsletter with email ${newsletterEmail}`);
  };

  const handleSocialClick = (socialMedia) => {
    console.log(`Clicked on ${socialMedia} icon`);
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="newsletter">
          <h3>Stay Updated</h3>
          <form onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <i className="fab fa-facebook" onClick={() => handleSocialClick('Facebook')}></i>
            </li>
            <li>
              <i className="fab fa-twitter" onClick={() => handleSocialClick('Twitter')}></i>
            </li>
            <li>
              <i className="fab fa-instagram" onClick={() => handleSocialClick('Instagram')}></i>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; 2021 My Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;