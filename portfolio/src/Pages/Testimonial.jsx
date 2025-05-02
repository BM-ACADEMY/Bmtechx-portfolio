import React, { useState } from "react";
import "./css/Testimonial.css"; // Import the CSS file
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RiDoubleQuotesL,RiDoubleQuotesR } from "react-icons/ri";

const testimonials = [
  {
    text: "I recently got my e-commerce website, Fresh Bounty, designed, and BM Techx did an outstanding job! They added 15 high-quality images, perfectly optimized for a seamless user experience. The design is sleek, professional, and visually appealing.Their attention to detail and expertise in website creation truly made a difference. Fresh Bounty loads fast, looks stunning, and is easy to navigate.I highly recommend BM Techx for anyone looking for a top-notch e-commerce website.",
    name: "Kalid Fayaz",
    rating: "5.0",
  },
  {
    text: "I am running a cleaning service in Coimbatore. I decided to design a website for this and contacted them. BM Techx designed a website with the best technology in a way that I liked.",
    name: "Chinna Cleaning Facility",
    rating: "5.0",
  },
  {
    text: "I received a Best service from BM Techx. Trusted company Quality work thank you so much.",
    name: "LEARNENG EDUCATION (TAITTAN)",
    rating: "5.0",
  },
  {
    text: "I’m Kavitha, the Managing Director of JK Coaching Academy. From the very beginning until the handover, my experience with BM Techx has been smooth and seamless. The designs were fantastic, and the vibrant, positive colors truly stood out. Whenever I needed any corrections or changes, I was always met with warmth and a smiling team. I truly appreciate all the support provided.Wishing everyone continued success in the future!",
    name: "JK Academy (Kavitha J)",
    rating: "5.0",
  },
  {
    text: "Dedicated working. Happy with their output.",
    name: "Raininfo tech",
    rating: "5.0",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="testimonial-section">
      <h2 className="text-center testimonial-top-text fw-bold pt-5 pb-5">
        What our partners say?
      </h2>
      <div className="testimonial-container pb-5">
        <div className="testimonial-card">
          {/* GoodFirms Rating Badge */}
          <div className="testimonial-rating mb-3">
            <span>⭐ GoodFirms {testimonials[index].rating}</span>
          </div>

          {/* Testimonial Text */}
          <p className="testimonial-text">
          <RiDoubleQuotesL className="quote-icon" /> {testimonials[index].text} <RiDoubleQuotesR className="quote-icon" />
        </p>

          {/* User Info */}
          <div className="testimonial-user">
            <div className="testimonial-user-info">
              <h5>{testimonials[index].name}</h5>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="testimonial-buttons">
            <button onClick={prevTestimonial} className="testimonial-nav-btn">
              <FaArrowLeft />
            </button>
            <button onClick={nextTestimonial} className="testimonial-nav-btn">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Testimonial;
