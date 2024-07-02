import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="LandingPage">
      <header className="LandingPage-header">
        <h1>Welcome to E-commerce Website</h1>
      </header>
      <section className="LandingPage-hero">
        <img src="hero-image.jpg" alt="Hero Image" />
        <div className="LandingPage-hero-text">
          <h2>Explore our collection of products</h2>
          <p>Discover the latest trends and deals on our platform</p>
          <button className="btn-primary">Shop Now</button>
        </div>
      </section>
      <section className="LandingPage-features">
        <h2>Why choose us?</h2>
        <ul>
          <li>
            <i className="fas fa-truck"></i>
            <h3>Fast Delivery</h3>
            <p>Get your products delivered quickly and efficiently</p>
          </li>
          <li>
            <i className="fas fa-lock"></i>
            <h3>Secure Payment</h3>
            <p>Our payment system is secure and trusted</p>
          </li>
          <li>
            <i className="fas fa-star"></i>
            <h3>Quality Products</h3>
            <p>We only sell high-quality products from trusted suppliers</p>
          </li>
        </ul>
      </section>
      <section className="LandingPage-testimonials">
        <h2>What our customers say</h2>
        <ul>
          <li>
            <p>"I'm so impressed with the quality of the products and the fast delivery!"</p>
            <span>- John Doe</span>
          </li>
          <li>
            <p>"I've never had a better online shopping experience!"</p>
            <span>- Nicholas </span>
          </li>
        </ul>
      </section>
      <footer className="LandingPage-footer">
        <p>&copy; 2021 E-commerce Website</p>
      </footer>
    </div>
  );
}

export default LandingPage;