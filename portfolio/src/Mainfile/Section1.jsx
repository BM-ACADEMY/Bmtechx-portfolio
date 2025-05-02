import React from 'react'
import HeroSection from '../Pages/Home'
import Textimage from '../Pages/textimage'
import WhyChooseUs from '../Pages/whychoose'
import CasesSection from '../Pages/Ourcases'
import ZigzagCards from '../Pages/cardeffort'
import BestChoice from '../Pages/Bestchoices'
import Testimonial from '../Pages/Testimonial'
import ProcessStep from '../Pages/ProcessStep'
import Imagemarquee from '../Pages/imagemarqueeslide'
import FloatingVideo from '../Pages/floatingvideo'
import WhatsAppFloat from '../Pages/Floatingwhatsapp'

export default function Section1() {
  return (
    <div>
      <HeroSection/>
      <Textimage/>
      <BestChoice/>
      <ZigzagCards/>
      <CasesSection/>
      <WhyChooseUs/>
      <Testimonial/>
      <Imagemarquee/>
      <ProcessStep/>
      <FloatingVideo/>
      <WhatsAppFloat/>   
    </div>
  )
}
