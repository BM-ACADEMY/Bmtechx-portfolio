import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { X } from "react-bootstrap-icons"; // Import close icon
import './css/ModalComponent.css';
import Avatar from "@mui/material/Avatar";

const ContactModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="contact-modal">
      <Modal.Body className="text-dark">
        {/* Close Button Positioned to the Right */}
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="mb-3">From Vision to Victory</h2>
          <Button variant="light" className="border-0" onClick={handleClose}>
            <X size={44} color="white"/>
          </Button>
        </div>

        <p className="text-start">
          Share your idea with U1CORE, and we’ll transform it into a
          powerful design that drives real business results.
        </p>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="What is your name?"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6}>
              <Form.Control
                type="email"
                placeholder="What is your email?"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Project details"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <p className="text-muted para">
            By submitting this form, you agree to our{" "}
            <a href="/privacy-policy" className="text-warning">
              Privacy Policy
            </a>
          </p>
          <Button
            variant="warning"
            type="submit"
            className="w-100 text-dark fw-bold"
          >
            Become a client
          </Button>
        </Form>
        <div className="mt-3 d-flex justify-content-between">
          <div>
            <p className="mb-0 text-white">Email:</p>
            <strong className="text-white">hello@u1core.com</strong>
          </div>
          
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
