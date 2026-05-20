import React from "react";
import { Container } from "react-bootstrap";
import "./css/Marquee.css"; // Import CSS file for styling


const MarqueeSlider = () => {
  const images = [
    "/brands/logo1.png",
    "/brands/logo2.png",
    "/brands/logo3.png",
    "/brands/logo4.png",
    "/brands/logo5.png",
    "/brands/logo6.png",
    "/brands/logo7.png",
    "/brands/logo8.png",
    "/brands/logo9.png",
    "/brands/logo10.png",
  ];

  return (
    <div className="Marquee-section mb-0 pt-3">
        <Container fluid className="marquee-container">
      <div className="marquee-wrapper">
        <div className="marquee">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`slide-${index}`} className="marquee-img" />
          ))}
          {/* Duplicate images for seamless loop effect */}
          {images.map((img, index) => (
            <img key={index + images.length} src={img} alt={`slide-${index}-copy`} className="marquee-img" />
          ))}
        </div>
      </div>
    </Container>
   
    </div>
  );
};

export default MarqueeSlider;
