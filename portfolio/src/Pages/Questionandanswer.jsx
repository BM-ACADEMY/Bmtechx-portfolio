import React, { useState } from "react";
import { Accordion, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/Questionandanswer.css';
import { bookFreeCall } from "../Whatsapp/whatsappUtils";

const FAQ = () => {


  return (
   <div className="faq-section" id="faq">
     <Container className="d-flex flex-column align-items-center py-3">
      <h1 className="text-white mb-3">FAQ</h1>
      <Accordion className="w-100 mt-3" style={{ maxWidth: "700px" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Creative Development</Accordion.Header>
          <Accordion.Body>
           This involves the process of creating new and innovative ideas for projects, including concept creation, visual storytelling, and content strategy. It combines artistic creativity with technical skills to produce engaging content, products, or campaigns.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>UI (User Interface) Design</Accordion.Header>
          <Accordion.Body>UI (User Interface) Design focuses on the visual elements of a product or website, such as buttons, colors, fonts, and layout, ensuring it is aesthetically pleasing and functional.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>UX (User Experience) Design</Accordion.Header>
          <Accordion.Body>UX (User Experience) Design focuses on optimizing the user's experience by making the interface intuitive, easy to navigate, and enjoyable. It ensures that the product meets the needs and expectations of users.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Creative Design</Accordion.Header>
          <Accordion.Body>
          This is the artistic aspect of designing visual elements for various media, such as graphics, websites, logos, and advertisements. It focuses on bringing creative ideas to life through design principles like color theory, typography, and layout to make content visually engaging.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Data Science</Accordion.Header>
          <Accordion.Body>
          Data science is the field that uses scientific methods, algorithms, and systems to analyze large sets of data. It helps organizations extract insights, predict trends, and make data-driven decisions. It integrates computer science, statistics, and machine learning to solve complex problems.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>App Design</Accordion.Header>
          <Accordion.Body>
          This involves the process of designing mobile applications, focusing on both the UI/UX aspects and technical functionality. It includes creating wireframes, defining the user journey, and ensuring the app is visually appealing, intuitive, and user-friendly.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
        <p className="text-white mt-4">Ask a question if you haven't found the answer you need:</p> <br/>
      <div className="mt-1 text-center bottom-btn">
        <Button variant="warning" className="question"  onClick={bookFreeCall}>Ask a Question</Button>
      </div>
    </Container>

   </div>
  );
};

export default FAQ;
