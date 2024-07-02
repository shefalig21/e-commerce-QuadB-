import React, { useState } from 'react';
import './Testimonials.css';

function Testimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonials = [
    {
      quote: "This product has changed my life!",
      author: "Angelia",
      image: "https://via.placeholder.com/50x50"
    },
    {
      quote: "I'm so impressed with the quality!",
      author: "Jane Smith",
      image: "https://via.placeholder.com/50x50"
    },
    {
      quote: "Best purchase I've ever made!",
      author: "Bob Johnson",
      image: "https://via.placeholder.com/50x50"
    }
  ];

  const handlePrevClick = () => {
    setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNextClick = () => {
    setTestimonialIndex((testimonialIndex + 1) % testimonials.length);
  };

  return (
    <section className="Testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-container">
        <img src={testimonials[testimonialIndex].image} alt={testimonials[testimonialIndex].author} />
        <blockquote>
          <p>{testimonials[testimonialIndex].quote}</p>
          <cite>{testimonials[testimonialIndex].author}</cite>
        </blockquote>
        <button className="prev" onClick={handlePrevClick}>Prev</button>
        <button className="next" onClick={handleNextClick}>Next</button>
      </div>
    </section>
  );
}

export default Testimonials;