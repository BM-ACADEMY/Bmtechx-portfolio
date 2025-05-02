import React, { useState } from "react";
import { Navbar, Nav, Button, Offcanvas, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Header.css";
import { GiFeather } from "react-icons/gi";
import { FaLaptopCode, FaPaintBrush, FaCube } from "react-icons/fa";
import { bookFreeCall } from "../Whatsapp/whatsappUtils";
import { Helmet } from 'react-helmet-async'; 

const Header = () => {
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/cases");
    setShow(false);
  };

  return (
    <div className="navbar-section1">
      <Helmet>
        <title>BM Techx | Digital Marketing Agency in Pondicherry</title>
      </Helmet>
      <Navbar expand="lg" className="custom-navbar">
        <div className="container-fluid">
        <Navbar.Brand as={Link} to="/" className="logo" onClick={() => setShow(false)}>
          <img
            src="/image/Bm Techx logo.png" // Make sure the path is correct (e.g. /assets/logo.png or from public folder)
            alt="BM Techx"
            className="navbar-logo"
          />
        </Navbar.Brand>


          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            className="offcanvas-toggle"
            onClick={() => setShow(true)}
          />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            className="custom-offcanvas"
            show={show}
            onHide={() => setShow(false)}
            placement="start"
            backdrop={true}
          >
            <Offcanvas.Header closeButton className="offcanvas-header">
              <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="nav-links">
              <Nav.Link as={Link} to="/About" className="custom-nav-link" onClick={() => setShow(false)}>
                  About
                </Nav.Link>

                <NavDropdown
                  title="Services"
                  id="services-dropdown"
                  className="custom-dropdown"
                  show={dropdownOpen}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <NavDropdown.Item onClick={handleNavigate}>
                    <span className="icon-box">
                      <FaLaptopCode className="dropdown-icon" />
                    </span>
                    Web Design
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleNavigate}>
                    <span className="icon-box">
                      <FaPaintBrush className="dropdown-icon" />
                    </span>
                    UI/UX Design
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleNavigate}>
                    <span className="icon-box">
                      <FaCube className="dropdown-icon" />
                    </span>
                    Product Design
                  </NavDropdown.Item>
                </NavDropdown>

                
                <Nav.Link as={Link} to="/cases" className="custom-nav-link" onClick={() => setShow(false)}>
                  Cases
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Button className="contact-btn ms-auto"  onClick={bookFreeCall}>
            Contact Us
            <span className="icon-circle">
              <GiFeather className="feather-icon" />
            </span>
          </Button>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;