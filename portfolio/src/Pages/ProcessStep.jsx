import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./css/ProcessStep.css";
import { bookFreeCall } from "../Whatsapp/whatsappUtils";
import FAQ from "./Questionandanswer";

const steps = [
  {
    id: 1,
    title: "Step 1 - Research & Planning",
    description: "Gathering requirements and understanding the project scope.",
    image: "Banners/work1.png",
  },
  {
    id: 2,
    title: "Step 2 - Wireframing",
    description: "Creating initial wireframes for the layout structure.",
    image: "image/birth2.svg",
  },
  {
    id: 3,
    title: "Step 3 - Prototyping",
    description: "Building an interactive prototype to validate ideas.",
    image: "Banners/work3.png",
  },
  {
    id: 4,
    title: "Step 4 - UI/UX Design",
    description: "Designing high-fidelity mockups and UI components.",
    image: "Banners/work4.png",
  },
  {
    id: 5,
    title: "Step 5 - Design of key screens",
    description: "Creating primary screens that define the project’s look and feel.",
    image: "Banners/work5.png",
  },
  {
    id: 6,
    title: "Step 6 - Development",
    description: "Writing clean and efficient code for front-end and back-end.",
    image: "image/birth6.svg",
  },
  {
    id: 7,
    title: "Step 7 - Testing",
    description: "Performing QA testing to ensure quality and performance.",
    image: "Banners/finalpic.png",
  },
  {
    id: 8,
    title: "Step 8 - Deployment",
    description: "Launching the project to production with optimizations.",
    image: "Banners/work8.png",
  },
];

const ProcessStep = () => {


  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 4000); // Change step every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="process-section-bg">
      <Container fluid className="process-container">
      <Row className="justify-content-center pt-5 pb-5">
        {/* Left Side Content */}
        <Col md={6} className="text-light text-start">
          <span className="process-tag pb-2">How we work?</span>
          <h2 className="process-title">Our processes give birth to stars</h2>
          <p className="process-description pt-3 pb-3">
            All steps are agreed upon with the client; the most basic steps in
            implementing the design process are demonstrated here.
          </p>
          <Button className="process-btn"  onClick={bookFreeCall}>Book a free call</Button>
        </Col>

        {/* Right Side - Auto Changing Image & Step Info */}
        <Col md={6} className="d-flex justify-content-center">
          <div className="process-step-card">
            {/* Step Number */}
            <div className="step-counter">
              {steps[currentStep].id} / {steps.length}
            </div>
            {/* Image */}
            <img
              src={steps[currentStep].image}
              alt="Process Step"
              className="process-image"
            />
            {/* Description */}
            <div className="step-description">
              <h5>{steps[currentStep].title}</h5>
              <p>{steps[currentStep].description}</p>
            </div>
          </div>
        </Col>
      </Row>


    </Container>
    
    <div>
      <FAQ/>
    </div>
    </div>
  );
};

export default ProcessStep;
