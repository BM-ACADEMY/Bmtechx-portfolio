import React from 'react';
import { Helmet } from 'react-helmet-async'; 
import Aboutpage from './Aboutsection/Aboutus';
import MarqueeSlider from '../Pages/Marquee';
import Aboutimage from './Aboutsection/Aboutimage';
import Aboutinfosection from './Aboutsection/AboutSection';
import './css/About.css';
import { useTranslation } from "react-i18next";
const Aboutsection = () => {
    const { t } = useTranslation("aboutSection");
  return (
    <div className='about-section-bg'>
      {/* Add Helmet for SEO/metadata */}
      <Helmet>
        <title>{t("title")}</title>
      </Helmet>

      <Aboutpage/>
      <MarqueeSlider/>
      <Aboutinfosection/>
      <Aboutimage/>
    </div>
  );
};

export default Aboutsection;