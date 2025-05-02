import React from "react";
import { Container } from "react-bootstrap";
import "./css/Marquee.css"; // Import CSS file for styling


const MarqueeSlider = () => {
  const images = [
    "/Brand/logo1.png",
    "/Brand/logo2.png",
    "/Brand/logo3.png",
    "/Brand/logo4.png",
    "/Brand/logo5.png",
    "/Brand/logo6.png",
    "/Brand/logo7.png",
    "/Brand/logo8.png",
    "/Brand/logo9.png",
    "/Brand/logo10.png",
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
