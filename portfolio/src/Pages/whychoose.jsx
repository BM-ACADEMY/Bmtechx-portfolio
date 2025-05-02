import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/whychoose.css";

const services = [
  {
    image: "/image/icon1.png",
    title: "Tailored Technology Solutions",
    description:
      "We develop customized solutions designed to meet your business needs, ensuring efficiency, reliability, and a strong market presence.",
  },
  {
    image: "/image/icon2.png",
    title: "Expertise in Advanced Technologies",
    description:
      "With experience in AI, Web Development, IoT, and Cloud Computing, we create innovative digital solutions that enhance business operations.",
  },
  {
    image: "/image/icon3.png",
    title: "Strategic Project Execution",
    description:
      "Our structured project management approach guarantees timely delivery, cost-effectiveness, and high-quality outcomes tailored to your goals.",
  },
  {
    image: "/image/icon4.png",
    title: "Seamless Collaboration",
    description:
      "We emphasize clear communication and teamwork, ensuring our solutions align perfectly with your business vision and objectives.",
  },
  {
    image: "/image/icon5.png",
    title: "Result-Driven Approach",
    description:
      "Our commitment to excellence ensures that our technology solutions are high-performing, scalable, and optimized for long-term success",
  },
  {
    image: "/image/icon6.png",
    title: "Focus on Results",
    description:
      "We deliver measurable results, ensuring your product looks great and performs well in achieving your goals.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="why-choose-container">
      <Container className="py-2">
        <h2 className="text-center why-choose-text fw-bold mb-5">
          Why Choose BM Techx for Your Product Design?
        </h2>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} md={6}>
              <Card className="h-100 text-start p-4 border-0 text-dark">
                <div className="card-content-wrapper">
                  <div className="content-row">
                    <div className="image-box">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="img-fluid service-image"
                      />
                    </div>
                    <div>
                      <Card.Title className="fw-bold">{service.title}</Card.Title>
                      <Card.Text>{service.description}</Card.Text>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;