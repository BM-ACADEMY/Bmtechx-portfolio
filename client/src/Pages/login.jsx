import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import "./css/ModalComponent.css"; // reuse same styles
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, formData);
        navigate('/contact-details');
      console.log(res.data);
    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed';
      setError(msg);
    }
  };

  return (
    <Container fluid className="vh-100 d-flex p-0 " style={{backgroundColor:"#f8f9fa"}}>
      {/* Left: Form section */}
      <div className="d-flex align-items-center justify-content-center w-100 w-md-50 " style={{backgroundColor:"#f8f9fa"}}>
        <div className="contact-modal modal-content" style={{ maxWidth: '600px', width: '100%' }}>
          <div className="modal-body text-white">
            <h2 className="mb-4 text-center" style={{ color: 'black' }}>Sign In</h2>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter email or phone"
                  name="emailOrPhone"
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="warning" type="submit" className="w-100 text-dark fw-bold">
                Sign In
              </Button>
            </Form>

            <div className="mt-4 text-center">
              <p className="text-muted para">
                Don't have an account? <a href="/register" className="text-warning">Register here</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Image section */}
      <div className="d-none d-md-flex align-items-center justify-content-center w-50 bg-light">
        <img
          src="Banners/download.png"
          alt="Sign In Visual"
          className="img-fluid"
          style={{ maxHeight: '80%', objectFit: 'cover' }}
        />
      </div>
    </Container>
  );
};

export default SignInForm;
