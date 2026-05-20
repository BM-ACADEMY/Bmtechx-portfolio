import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./Case.css";
import { Helmet } from 'react-helmet-async'; 
import { useTranslation } from "react-i18next";


const Case = () => {
  const sectionRefs = useRef([]);
  const { t } = useTranslation("caseDetailPage");
  const casesData = t("projects", { returnObjects: true });
  useEffect(() => {
    const observers = [];

    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const letters = ref.querySelectorAll(".case-desc span");
            letters.forEach((letter, letterIndex) => {
              setTimeout(() => {
                letter.style.color = "white";
              }, letterIndex * 50);
            });
            observer.unobserve(ref);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="case-section">
      <Helmet>
        <title>{t("title")}</title>
     </Helmet>
      <div className="pt-5 container">
        <Container className="case-container">
          {casesData.map((project, index) => (
            <Row
              key={index} // Use index as the key
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`case-row align-items-center ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <Col md={6}>
                <img
                  src={project.image}
                  alt={project.title}
                  title={project.seotitle}
                  className="case-img img-fluid"
                />
              </Col>
              <Col md={6} className="case-content">
                <h3 className="case-title">{project.title}</h3>
                <p className="case-desc">
                  {project.description.split("").map((letter, letterIndex) => (
                    <span key={letterIndex} style={{ color: "grey" }}>
                      {letter}
                    </span>
                  ))}
                </p>
                {project.link && project.link !== "#" && (
                  <Button
                    className="visit-btn"
                    href={project.link}
                    target="_blank"
                  >
                    Visit Site <MdOutlineArrowOutward className="ms-2" size={30} />
                  </Button>
                )}
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default Case;