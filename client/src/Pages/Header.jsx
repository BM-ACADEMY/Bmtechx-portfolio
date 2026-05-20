// import React, { useState } from "react";
// import { Navbar, Nav, Button, Offcanvas, NavDropdown } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/Header.css";
// import { GiFeather } from "react-icons/gi";
// import { FaLaptopCode, FaPaintBrush, FaCube } from "react-icons/fa";
// import { bookFreeCall } from "../Whatsapp/whatsappUtils";
// import { Helmet } from 'react-helmet-async';
// import { useTranslation } from 'react-i18next';
// import LanguageSelector from "./LanguageSelector";
// const Header = () => {
//   const [show, setShow] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   const { i18n, t } = useTranslation('common');

//   const changeLang = (lng) => {
//     i18n.changeLanguage(lng);
//     localStorage.setItem('i18nextLng', lng);
//   };

//   const handleNavigate = () => {
//     navigate("/cases");
//     setShow(false);
//   };

//   return (
//     <div className="navbar-section1">
//       <Helmet>
//         <title>BM Techx | Digital Marketing Agency in Pondicherry</title>
//       </Helmet>
//       <Navbar expand="lg" className="custom-navbar">
//         <div className="container-fluid">
//           <Navbar.Brand as={Link} to="/" className="logo" onClick={() => setShow(false)}>
//             <img
//               src="/common/Bm Techx logo.png" // Make sure the path is correct (e.g. /assets/logo.png or from public folder)
//               alt="BM Techx"
//               className="navbar-logo"
//             />
//           </Navbar.Brand>


//           <Navbar.Toggle
//             aria-controls="offcanvasNavbar"
//             className="offcanvas-toggle"
//             onClick={() => setShow(true)}
//           />

//           <Navbar.Offcanvas
//             id="offcanvasNavbar"
//             aria-labelledby="offcanvasNavbarLabel"
//             className="custom-offcanvas"
//             show={show}
//             onHide={() => setShow(false)}
//             placement="start"
//             backdrop={true}
//           >
//             <Offcanvas.Header closeButton className="offcanvas-header">
//               <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="nav-links">
//                 <Nav.Link as={Link} to="/About" className="custom-nav-link" onClick={() => setShow(false)}>
//                   About
//                 </Nav.Link>

//                 <NavDropdown
//                   title="Services"
//                   id="services-dropdown"
//                   className="custom-dropdown"
//                   show={dropdownOpen}
//                   onMouseEnter={() => setDropdownOpen(true)}
//                   onMouseLeave={() => setDropdownOpen(false)}
//                 >
//                   <NavDropdown.Item onClick={handleNavigate}>
//                     <span className="icon-box">
//                       <FaLaptopCode className="dropdown-icon" />
//                     </span>
//                     Web Design
//                   </NavDropdown.Item>
//                   <NavDropdown.Item onClick={handleNavigate}>
//                     <span className="icon-box">
//                       <FaPaintBrush className="dropdown-icon" />
//                     </span>
//                     UI/UX Design
//                   </NavDropdown.Item>
//                   <NavDropdown.Item onClick={handleNavigate}>
//                     <span className="icon-box">
//                       <FaCube className="dropdown-icon" />
//                     </span>
//                     Product Design
//                   </NavDropdown.Item>
//                 </NavDropdown>


//                 <Nav.Link as={Link} to="/cases" className="custom-nav-link" onClick={() => setShow(false)}>
//                   Cases
//                 </Nav.Link>
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>

//           <Button className="contact-btn ms-auto" onClick={bookFreeCall}>
//             Contact Us
//             <span className="icon-circle">
//               <GiFeather className="feather-icon" />
//             </span>
//           </Button>
//         </div>
//        <LanguageSelector  className="form-select-sm" />
//       </Navbar>
//     </div>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { Navbar, Nav, Button, Offcanvas, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Header.css";
import { GiFeather } from "react-icons/gi";
import { FaLaptopCode, FaSearch, FaShareAlt, FaDollarSign, FaCogs } from "react-icons/fa";
import { bookFreeCall } from "../Whatsapp/whatsappUtils";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ContactModal from "./ModalComponent";

const Header = () => {
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const { i18n, t } = useTranslation('header');

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  const bookFreeCall = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleNavigate = () => {
    navigate("/cases");
    setShow(false);
  };

  return (
    <div className="navbar-section1">
      {/* Dynamic page title from i18n */}
      <Helmet>
        <title>{t("title")}</title>
      </Helmet>

      <Navbar expand="lg" className="custom-navbar">
        <div className="container-fluid">
          <Navbar.Brand as={Link} to="/" className="logo" onClick={() => setShow(false)}>
            <img
              src="/common/Bm Techx logo.png"
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
                <Nav.Link
                  as={Link}
                  to="/About"
                  className="custom-nav-link"
                  onClick={() => setShow(false)}
                >
                  {t("nav.about")}
                </Nav.Link>

                <NavDropdown
                  title={t("nav.services")}
                  id="services-dropdown"
                  className="custom-dropdown"
                  show={dropdownOpen}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <NavDropdown.Item as={Link} to="/#seo-services" onClick={() => setShow(false)}>
                    {t("nav.seo_services")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/#social-media" onClick={() => setShow(false)}>
                    {t("nav.social_media")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/#ppc-services" onClick={() => setShow(false)}>
                    {t("nav.ppc_services")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/#web-development" onClick={() => setShow(false)}>
                    {t("nav.web_dev")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/#software" onClick={() => setShow(false)}>
                    {t("nav.software")}
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  as={Link}
                  to="/cases"
                  className="custom-nav-link"
                  onClick={() => setShow(false)}
                >
                  {t("nav.cases")}
                </Nav.Link>

                {/* LanguageSelector inside Offcanvas for mobile/tablet
                <div className="language-selector-mobile">
                  <LanguageSelector onChange={changeLang} />
                </div> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Button className="contact-btn ms-auto" onClick={bookFreeCall}>
            {t("nav.contact_us")}
            <span className="icon-circle">
              <GiFeather className="feather-icon" />
            </span>
          </Button>
        </div>
      </Navbar>
      <ContactModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default Header;
