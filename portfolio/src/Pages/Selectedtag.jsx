import React, { useState } from "react";
import { Container, Row, Col, Accordion, Button, Card } from "react-bootstrap";
import { FaPlus, FaTimes } from "react-icons/fa";
import { TbDragDrop } from "react-icons/tb";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Selectedtag.css";
import { TbArrowLeft } from "react-icons/tb";

const servicesData = {
  "Design": ["UI/UX Design", "Graphic Design"],
  "Branding & Marketing": ["Branding", "SEO/ASO"],
  "Development": ["WordPress Development", "Webflow Development"],
  "Copywriting & Content": ["Copywriting", "UX Audit", "aakash", "car", "bus"],
  "Audits & Strategies": ["Usability Testing"],
  "one": ["test1 Testing2"],
  "one2": ["test11 Testing3"],
  "one3": ["test111 Testing5"],
};

const Selectedtag = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedContent, setSelectedContent] = useState(null);
  const [remainingServices, setRemainingServices] = useState(servicesData);

  const addService = (service) => {
    if (!selectedServices.includes(service)) {
      setSelectedServices([...selectedServices, service]);

      const updatedServices = { ...remainingServices };
      Object.keys(updatedServices).forEach((category) => {
        updatedServices[category] = updatedServices[category].filter((s) => s !== service);
      });
      setRemainingServices(updatedServices);
    }
  };

  const removeService = (service) => {
    setSelectedServices(selectedServices.filter((item) => item !== service));
    if (selectedContent === service) setSelectedContent(null);

    const updatedServices = { ...remainingServices };
    Object.keys(servicesData).forEach((category) => {
      if (servicesData[category].includes(service)) {
        updatedServices[category] = [...updatedServices[category], service];
      }
    });
    setRemainingServices(updatedServices);
  };

  return (
    <div className="selectedtag-section">
      <Container className="design-order container">
        <h1 className="text-center mb-5 text-dark">Collect your design order</h1>
        <Row className="selectedtag-row">
          {/* Left Panel - Services */}
          <Col lg={5} className="left-panel">
            <Accordion className="dark-accordion">
              {Object.keys(remainingServices).map((category, index) => (
                <Accordion.Item eventKey={index.toString()} key={category} className="dark-card">
                  <Accordion.Header>
                    {category} ({remainingServices[category].length})
                  </Accordion.Header>
                  <Accordion.Body>
                    {remainingServices[category].length > 0 ? (
                      remainingServices[category].map((service) => (
                        <Button
                          key={service}
                          className="service-btn"
                          onClick={() => addService(service)}
                        >
                          <span>{service}</span>
                          <FaPlus />
                        </Button>
                      ))
                    ) : (
                      <p className="text-white">No services available</p>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>

          {/* Right Panel - Selected Services */}
          <Col lg={7} className="right-panel">
            <Card className="selected-services dark-card">
              <Card.Body className="right-panel-body">
                {selectedServices.length === 0 ? (
                  <div className="empty-state text-center">
                    <TbDragDrop size={80} className="drag-icon text-white" />
                    <p className="text-white">Select necessary services</p>
                  </div>
                ) : (
                  selectedServices.map((service) => (
                    <span
                      key={service}
                      className="selected-tag"
                      onClick={() => setSelectedContent(service)}
                    >
                      {service} <FaTimes onClick={() => removeService(service)} />
                    </span>
                  ))
                )}
              </Card.Body>
            </Card>

            {/* Content Card */}
            <Card className="content-card mt-3 dark-card">
              <Card.Body className="leftside-box d-flex align-items-center">
                <TbArrowLeft size={20} className="text-white me-2" />
                <p className="text-white m-0">Select a service to see details</p>
              </Card.Body>
            </Card>

            <div className="right-bottom-btn mt-4">
              <Button className="proceed" variant="primary">Proceed</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Selectedtag;
