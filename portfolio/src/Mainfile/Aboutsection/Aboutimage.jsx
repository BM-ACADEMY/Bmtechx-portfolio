import React, { useEffect, useRef } from 'react';
import { Container } from 'react-bootstrap';
import "../css/Aboutiamge.css";

const FullScreenImage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only animate the image
            if (imageRef.current) {
              imageRef.current.style.opacity = '1';
              imageRef.current.style.transform = 'translateY(0)';
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    );

    if (imageRef.current) {
      // Set initial styles before observing
      imageRef.current.style.opacity = '0';
      imageRef.current.style.transform = 'translateY(50px)';
      imageRef.current.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className='image-section-bg'>
      <Container fluid className="iamge-section fullscreen-container d-flex justify-content-center align-items-center">
        <img
          ref={imageRef}
          src="/Banners/maclogo.png"
          alt="Full Screen"
          className="fullscreen-image"
        />
      </Container>
    </div>
  );
};

export default FullScreenImage;