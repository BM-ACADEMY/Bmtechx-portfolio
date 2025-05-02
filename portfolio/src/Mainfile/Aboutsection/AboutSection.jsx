import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Avatar, AvatarGroup } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutinfosection = () => {
  // State variables for animated numbers
  const [experience, setExperience] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [projects, setProjects] = useState(0);
  const [users, setUsers] = useState(0);
  const [startCount, setStartCount] = useState(false);

  // Reference for the stats section
  const statsRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Ensures animation triggers only once
      anchorPlacement: "top-bottom", // Ensures all elements animate together
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (startCount) {
      const animateValue = (setValue, start, end, duration) => {
        let startTime = null;
        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          setValue(Math.floor(progress * (end - start) + start));
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
      };

      animateValue(setExperience, 0, 13, 5000);
      animateValue(setRevenue, 0, 15, 5000);
      animateValue(setProjects, 0, 250, 5000);
      animateValue(setUsers, 0, 450, 5000);
    }
  }, [startCount]);

  return (
    <div className="Videosection text-light py-5">
      <Container>
        {/* '''''''<Row className="justify-content-center">
                    <Col md={12} className="text-center">
                        <video controls autoPlay loop muted className="video-large rounded" data-aos="fade-up">
                            <source src="/image/video1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Col>
                </Row>''''''' */}

        <Card
          className="text-light mt-4 p-4 border-0 rounded-5 video-card position-relative"
          data-aos="fade-up"
        >
          <Card.Body>
            <Container>
              <Row className="align-items-center text-center text-md-start">
                <Col md={8}>
                  <h2 className="fw-bold">
                    We are a passionate team of tech experts — delivering
                    innovative solutions and driving business growth.
                  </h2>
                  <p className="text-secondary-video">
                    Working with us, you get a design partner who will handle
                    your design tasks.
                  </p>
                </Col>
                <Col md={4} className="text-center">
                  {/* Material-UI Avatar Group with Increased Size */}
                  <AvatarGroup
                    max={4}
                    sx={{ "& .MuiAvatar-root": { width: 70, height: 70 } }}
                  >
                    <Avatar alt="Profile 1" src="/profiles/person1.jpg" />
                    <Avatar alt="Profile 2" src="/profiles/person2.jpg" />
                    <Avatar alt="Profile 3" src="/profiles/person3.jpg" />
                    <Avatar alt="Profile 4" src="/profiles/person4.jpg" />
                  </AvatarGroup>
                  <p
                    className="text-secondary-video text-end mt-2"
                    style={{ color: "#", fontWeight: "500" }}
                  >
                    16 professionals
                  </p>
                </Col>
              </Row>

              {/* Stats Section with Animated Count */}
              <Row
                ref={statsRef}
                className="mt-4 card-row d-flex justify-content-center gap-3"
              >
                <Col
                  md={2}
                  className="py-3 stats-box flex-grow-1 text-start"
                  data-aos="fade-up"
                >
                  <h1 className="text-warning fw-bold">{experience}+</h1>
                  <p className="text-secondary-video">Years of Experience</p>
                </Col>

                <Col
                  md={3}
                  className="py-3 stats-box flex-grow-1 text-start"
                  data-aos="fade-up"
                >
                  <h1 className="text-warning fw-bold">{revenue}L</h1>
                  <p className="text-secondary-video">
                    Revenue of our projects
                  </p>
                </Col>
                <Col
                  md={3}
                  className="py-3 stats-box flex-grow-1 text-start"
                  data-aos="fade-up"
                >
                  <h1 className="text-warning fw-bold">{projects}+</h1>
                  <p className="text-secondary-video">Completed projects</p>
                </Col>
                <Col
                  md={3}
                  className="py-3 stats-box flex-grow-1 text-start"
                  data-aos="fade-up"
                >
                  <h1 className="text-warning fw-bold">{users}+</h1>
                  <p className="text-secondary-video">Happy Clients</p>
                </Col>
              </Row>
            </Container>
          </Card.Body>

          {/* Bottom Left Image */}
          <img
            src="/image/dotbutton.png"
            alt="Decorative"
            className="bottom-left-image"
          />
        </Card>
      </Container>
    </div>
  );
};

export default Aboutinfosection;
