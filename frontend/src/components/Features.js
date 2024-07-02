import React, { useState } from 'eact';
import './Features.css';

function Features() {
  const [featureIndex, setFeatureIndex] = useState(0);

  const handleFeatureClick = (index) => {
    setFeatureIndex(index);
  };

  return (
    <section className="Features">
      <h2>Our Features</h2>
      <ul>
        <li>
          <i className="fas fa-truck"></i>
          <h3>Fast Delivery</h3>
          <p>Get your products delivered quickly and efficiently</p>
          <button onClick={() => handleFeatureClick(0)}>Learn More</button>
        </li>
        <li>
          <i className="fas fa-lock"></i>
          <h3>Secure Payment</h3>
          <p>Our payment system is secure and trusted</p>
          <button onClick={() => handleFeatureClick(1)}>Learn More</button>
        </li>
        <li>
          <i className="fas fa-star"></i>
          <h3>Quality Products</h3>
          <p>We only sell high-quality products from trusted suppliers</p>
          <button onClick={() => handleFeatureClick(2)}>Learn More</button>
        </li>
      </ul>
      {featureIndex === 0 && (
        <div>
          <h3>Fast Delivery Details</h3>
          <p>Get your products delivered quickly and efficiently</p>
        </div>
      )}
      {featureIndex === 1 && (
        <div>
          <h3>Secure Payment Details</h3>
          <p>Our payment system is secure and trusted</p>
        </div>
      )}
      {featureIndex === 2 && (
        <div>
          <h3>Quality Products Details</h3>
          <p>We only sell high-quality products from trusted suppliers</p>
        </div>
      )}
    </section>
  );
}

export default Features;