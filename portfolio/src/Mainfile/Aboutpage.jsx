import React from 'react';
import { Helmet } from 'react-helmet-async'; 
import Aboutpage from './Aboutsection/Aboutus';
import MarqueeSlider from '../Pages/Marquee';
import Aboutimage from './Aboutsection/Aboutimage';
import Aboutinfosection from './Aboutsection/AboutSection';
import './css/About.css';

const Aboutsection = () => {
  return (
    <div className='about-section-bg'>
      {/* Add Helmet for SEO/metadata */}
      <Helmet>
        <title>BM Techx | About Us</title>
      </Helmet>

      <Aboutpage/>
      <MarqueeSlider/>
      <Aboutinfosection/>
      <Aboutimage/>
    </div>
  );
};

export default Aboutsection;