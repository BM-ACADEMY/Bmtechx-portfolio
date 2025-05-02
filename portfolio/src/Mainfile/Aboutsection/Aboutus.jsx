import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { bookFreeCall } from "../../Whatsapp/whatsappUtils";
import "../css/About.css";

const Aboutpage = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animation for logo and heading
            if (logoRef.current) {
              logoRef.current.style.opacity = "0";
              logoRef.current.style.transform = "translateY(20px)";
              setTimeout(() => {
                logoRef.current.style.transition = "opacity 0.8s ease, transform 0.8s ease";
                logoRef.current.style.opacity = "1";
                logoRef.current.style.transform = "translateY(0)";
              }, 100);
            }

            // Animation for text
            if (textRef.current) {
              textRef.current.style.opacity = "0";
              textRef.current.style.transform = "translateY(20px)";
              setTimeout(() => {
                textRef.current.style.transition = "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s";
                textRef.current.style.opacity = "1";
                textRef.current.style.transform = "translateY(0)";
              }, 100);
            }

            // Animation for button
            if (buttonRef.current) {
              buttonRef.current.style.opacity = "0";
              buttonRef.current.style.transform = "scale(0.8)";
              setTimeout(() => {
                buttonRef.current.style.transition = "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s";
                buttonRef.current.style.opacity = "1";
                buttonRef.current.style.transform = "scale(1)";
              }, 100);
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
      className="about-section"
      style={{ color: "#fff", padding: "190px 0" }}
    >
      <Container>
        <Row className="align-items-center text-md-start text-center">
          {/* Left Side Logo */}
          <Col
            md={6}
            className="mb-4 mb-md-0 d-flex flex-column align-items-md-start align-items-center justify-content-center"
          >
            <div className="logo-box" ref={logoRef}>
              <img
                src="/Banners/abouticon.png"
                alt="About Us Logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
              <h2
                className="mt-4"
                style={{ fontSize: "5rem", fontWeight: "bold" }}
              >
                About Us
              </h2>
            </div>
          </Col>

          {/* Right Side Text */}
          <Col
            md={6}
            className="d-flex flex-column justify-content-center align-items-md-start align-items-center"
          >
            <div className="aboutpage-text" ref={textRef}>
              <p>
                We are a team of seasoned professionals dedicated to
                accelerating business growth through strategic digital
                marketing, cutting-edge web development, and visionary design.
                Our mission is to elevate your online presence and empower
                success in the dynamic digital realm. At BM TECHX, we focus on
                delivering solutions that are tailored to your needs. Whether
                it's enhancing your website, building a strong social media
                strategy, or creating engaging content, we have the skills and
                experience to help your business succeed.
              </p>

              <button 
                ref={buttonRef}
                className="about-btn d-block mx-md-0 mx-auto" 
                onClick={bookFreeCall}
              >
                Let's talk
              </button>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default Aboutpage;