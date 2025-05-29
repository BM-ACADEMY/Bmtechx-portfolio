import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; // Add this
import Header from "./Pages/Header";
import Section1 from "./Mainfile/Section1";
import Footer from "./Pages/Footer";
import Case from "./Mainfile/Case";
import ScrollToTop from "./Mainfile/ScrollToTop"; 
import './App.css'
import Aboutsection from "./Mainfile/Aboutpage";
import ContactModal from "./Pages/ModalComponent";
import WhatsAppFloat from "./Pages/Floatingwhatsapp";



export default function App() {
    const [showContactModal, setShowContactModal] = useState(false);

     useEffect(() => {
    setShowContactModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowContactModal(false);
  };

  return (
    <HelmetProvider> {/* Wrap everything with HelmetProvider */}
      <Router>
        <ScrollToTop />
        <WhatsAppFloat />
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Section1 />} />
            <Route path="/cases" element={<Case />} />
            <Route path="/about" element={<Aboutsection />} />
          </Routes>
          <Footer />
          <ContactModal show={showContactModal} handleClose={handleCloseModal} />
        </div>
      </Router>
    </HelmetProvider>
  );
}