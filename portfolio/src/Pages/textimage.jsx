import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./css/Textimage.css";
const Textimage = () => {
  const text =
    "Establishing a strong online presence is essential for business growth. At BM Techx, we help you make a powerful impact from the start. Whether you’re a startup or an established enterprise, we provide cutting-edge, market-ready tech solutions designed to fuel your growth and ensure long-term success.";

  const words = text.split(" "); // Splitting text into words
  const [visibleWords, setVisibleWords] = useState(Array(words.length).fill("grey"));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Reference to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      words.forEach((_, index) => {
        setTimeout(() => {
          setVisibleWords((prev) => {
            const newColors = [...prev];
            newColors[index] = "white"; // Change one word to white at a time
            return newColors;
          });
        }, index * 600); // Delay each word change by 600ms
      });
    }
  }, [isVisible]); // Runs only when section becomes visible

  return (
    <section className="hero-section" ref={sectionRef} id="about-us">
      <Container className="">
        <Row className="align-items-center">
          {/* Left Side - Text */}
          <Col lg={6} md={6} sm={12} className="text-section text-start">
            <Button className="brand-btn">BM Techx</Button>
            <h1>
            Your Reliable <br />
              <span className="highlight">Partner for Market Success</span>
            </h1>
            <p className="pt-4">
              {words.map((word, index) => (
                <span key={index} style={{ color: visibleWords[index], transition: "color 0.5s ease-in-out" }}>
                  {word}{" "}
                </span>
              ))}
            </p>
          </Col>

          {/* Right Side - Image */}
          <Col lg={6} md={6} sm={12} className="image-section">
            <img src="/Banners/dotimage.png" alt="Dotted Logo" className="hero-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Textimage;
