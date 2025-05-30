import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import './css/ModalComponent.css';
import axios from "axios";
import { toast } from "react-toastify";

const ContactModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, 'form');

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/contact-form/create-contact-form`, formData);
      console.log("✅ Form submitted successfully:", response.data);
      toast.success(response.message || "Contact submitted successfully");
      // Optionally reset form or close modal
      setFormData({ username: "", email: "", phoneNumber: "", description: "" });
      handleClose();
    } catch (error) {
      toast.error(error.data.message || "Something went wrong")
      console.error("❌ Error submitting form:", error.response?.data || error.message);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="contact-modal">
      <Modal.Body className="text-dark">
        {/* Close Button Positioned to the Right */}
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="mb-3">From Vision to Victory</h2>
          <Button variant="light" className="border-0" onClick={handleClose}>
            <X size={44} color="white" />
          </Button>
        </div>

        <p className="text-start">
          Share your idea with BMTECHX, and we’ll transform it into a
          powerful design that drives real business results.
        </p>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="What is your name?"
                name="username"
                value={formData.username}
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
          <Row className="mb-3">
            <Col md={12}>
              <Form.Control
                type="tel"
                placeholder="Phone Number (10 digits)"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                pattern="\d{10}"
                maxLength={10}
                required
              />
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Project details"
              name="description"
              value={formData.description}
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
            <strong className="text-white">admin@bmtechx.in</strong>
          </div>

        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
