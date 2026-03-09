// import React, { useState } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
// import './css/footer.css';
// import { bookFreeCall } from "../Whatsapp/whatsappUtils";

// const Footer = () => {
//   const navigate = useNavigate();



//   // Function to handle smooth scrolling after navigation
//   const handleNavigation = (e, path, id) => {
//     e.preventDefault();
//     navigate(path);
//     setTimeout(() => {
//       const element = document.getElementById(id);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }, 100);
//   };

//   return (
//     <footer className="footer text-light">
//      <div className="footer-section-one">
//      <Container className="footer-container" >
//         <div className="text-center mb-4">
//           <img src="Banners/Logo.png" alt="Illustration" className="illustration mb-3" />
//           <h2>Have a big idea?</h2>
//           <h6 className="footer-text-h6 text-center">Let's bring it to life together!</h6>
//           <Button variant="warning"  onClick={bookFreeCall}>Get started</Button>
//         </div>
          
//           <div className="footer-top-fade-background mb-4"></div>

//         <Row className="w-100">
//         {/* Logo and Tagline */}
//         <Col xs={12} md={3} className="text-center text-md-start mb-4 mb-md-0">
//           <Link to="/">
//             <img src="Banners/Bmtech.png" alt="Logo" className="mb-2" width={200} />
//           </Link>
//           <p className="text-center text-md-start">Your reliable design partner</p>
//         </Col>

//         {/* General */}
//         <Col xs={12} md={3} className="text-center text-md-start mb-4 mb-md-0 ps-lg-4">
//           <h4 className="heading-footer">General</h4>
//           <ul className="list-unstyled">
//             <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "cases-catalog")} className="text-light">Cases</Link></li>
//             <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "about-us")} className="text-light">About us</Link></li>
//             <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "faq")} className="text-light">FAQ</Link></li>
//           </ul>
//         </Col>

//         {/* Services */}
//         <Col xs={12} md={3} className="text-center text-md-start ps-lg-4">
//           <h4 className="heading-footer">Services</h4>
//           <ul className="list-unstyled">
//             <li><Link to="/cases" className="text-light">Product Design</Link></li>
//             <li><Link to="/cases" className="text-light">Web Design</Link></li>
//             <li><Link to="/cases" className="text-light">UI/UX Design</Link></li>
//           </ul>
//         </Col>

//         {/* Social Media */}
//         <Col xs={12} md={3} className="text-center text-md-start ps-lg-4">
//           <h4 className="heading-footer mb-3">Follow Us</h4>
//           <ul className="list-unstyled d-flex gap-3 justify-content-center justify-content-md-start">
//             <li>
//               <a href="https://www.instagram.com/bmtechxpondy_/" target="_blank" rel="noopener noreferrer">
//                 <img src="/image/instagram.png" alt="Instagram" width="30" />
//               </a>
//             </li>
//             <li>
//               <a href="https://www.linkedin.com/in/samsudeen-bm-5a3a72359/" target="_blank" rel="noopener noreferrer">
//                 <img src="/image/linkedin.png" alt="LinkedIn" width="30" />
//               </a>
//             </li>      
//           </ul>
//         </Col>
//       </Row>


//         {/* Copyright Section */}
//         <div className="text-center mt-5 mb-0">
//           <h5 className="mb-0 pb-0 copy-right">&copy; {new Date().getFullYear()} BMTechx.in  All rights reserved.</h5>
//         </div>
//       </Container>
//      </div>
//     </footer>
//   );
// };

// export default Footer;

import React,{useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import './css/footer.css';
// import { bookFreeCall } from "../Whatsapp/whatsappUtils";
import ContactModal from "./ModalComponent";

const Footer = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("footer");
 const [showModal, setShowModal] = useState(false);
   const bookFreeCall = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const isRTL = i18n.language === 'ar'; 
  const handleNavigation = (e, path, id) => {
    e.preventDefault();
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <footer className={`footer text-light ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="footer-section-one">
        <Container className="footer-container">
          <div className="text-center mb-4">
            <img src="Banners/Logo.png" alt="Illustration" className="illustration mb-3" />
            <h2>{t('haveBigIdea')}</h2>
            <h6 className="footer-text-h6 text-center">{t('bringToLife')}</h6>
            <Button variant="warning" onClick={bookFreeCall}>{t('getStarted')}</Button>
          </div>

          <div className="footer-top-fade-background mb-4"></div>

          <Row className="w-100">
            <Col xs={12} md={3} className="text-center text-md-start mb-4 mb-md-0">
              <Link to="/">
                <img src="Banners/Bmtech.png" alt="Logo" className="mb-2" width={200} />
              </Link>
              <p className="text-center text-md-start">{t('reliablePartner')}</p>
            </Col>

            <Col xs={12} md={3} className="text-center text-md-start mb-4 mb-md-0 ps-lg-4">
              <h4 className="heading-footer">{t('general')}</h4>
              <ul className="list-unstyled">
                <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "cases-catalog")} className="text-light">{t('cases')}</Link></li>
                <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "about-us")} className="text-light">{t('aboutUs')}</Link></li>
                <li><Link to="/" onClick={(e) => handleNavigation(e, "/", "faq")} className="text-light">{t('faq')}</Link></li>
              </ul>
            </Col>

            <Col xs={12} md={3} className="text-center text-md-start ps-lg-4">
              <h4 className="heading-footer">{t('services')}</h4>
              <ul className="list-unstyled">
                <li><Link to="/cases" className="text-light">{t('productDesign')}</Link></li>
                <li><Link to="/cases" className="text-light">{t('webDesign')}</Link></li>
                <li><Link to="/cases" className="text-light">{t('uiuxDesign')}</Link></li>
              </ul>
            </Col>

            <Col xs={12} md={3} className="text-center text-md-start ps-lg-4">
              <h4 className="heading-footer mb-3">{t('followUs')}</h4>
              <ul className="list-unstyled d-flex gap-3 justify-content-center justify-content-md-start">
                <li>
                  <a href="https://www.instagram.com/bmtechxpondy_/" target="_blank" rel="noopener noreferrer">
                    <img src="/image/instagram.png" alt="Instagram" width="30" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/samsudeen-bm-5a3a72359/" target="_blank" rel="noopener noreferrer">
                    <img src="/image/linkedin.png" alt="LinkedIn" width="30" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

          <div className="text-center mt-5 mb-0">
            <h5 className="mb-0 pb-0 copy-right">
              &copy; {new Date().getFullYear()} BMTechx.in {t('copyright')}.
            </h5>
          </div>
        </Container>
      </div>
      <ContactModal  show={showModal} handleClose={handleCloseModal} />
    </footer>
  );
};

export default Footer;

