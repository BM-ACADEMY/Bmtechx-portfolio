import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './css/Ourcases.css';

const casesData = [
  {
    image: "Banners/Freshbounty.png",
    title: "FreshBounty",
    description: "This is a celebration of everything that moves you...",
    tags: ["E-Commerce"],
  },
  {
    image: "Banners/RedCollarAppDevelopment.png",
    title: "Red Collar",
    description: "Fashioning your style with premium clothing and accessories.",
    tags: ["App"],
  },
  {
    image: "Banners/TravellersNeed.png",
    title: "TravellersNeed",
    description: "Your ultimate travel companion for unforgettable adventures.",
    tags: ["Tours and Travels"],
  },

  {
    image: "Banners/ChopChopMeat.png",
    title: "Chop Chop Meat",
    description: "Delivering fresh meat with premium quality website.",
    tags: ["Web design","Meat"],
  },
  {
    image: "Banners/OneWayDropTaxiSalem.png",
    title: "One Way Drop Taxi Salem",
    seotitle: "One Way Drop Taxi Salem | Bm Techx",
    description: "Quick, mobile-first website for hassle-free taxi bookings.",
    tags: ["Travel","Taxi"],
  },
  {
    image: "Banners/SummerDreams.png",
    title: "Summer Dreams - Home Stay Cottage",
    description: "Seamless booking website for a serene Kodaikanal homestay.",
    tags: ["Hotel","Premium Rooms"], 
  },
  {
    image: "Banners/RkGlobalAssociatees.png",
    title: "Rk Global Associatees",
    description: "Expert business consulting solutions for your growth.",
    tags: ["Business"],
  },
  {
    image: "Banners/Chinnacleaning.png",
    title: "Chinna Cleaning",
    description: "Spark is pioneering the future of decentralized finance.",
    tags: ["Cleaning", "Web design"],
  },
  {
    image: "Banners/Learnengeducation.png",
    title: "LearnEng",
    description: "Empowering your journey to mastery in the English language.",
    tags: ["Education"],
  },

  {
    image: "Banners/HuntsWorldProperties.png",
    title: "Hunts World Properties",
    description: "Your trusted partner in finding the perfect real estate.",
    tags: ["Web Design", "Real estate"],
  },
  {
    image: "Banners/JKCoachingAcademy.png",
    title: "JK Coaching Academy",
    description: "Shaping futures with quality education and expert guidance.",
    tags: ["Education"],
  },
  {
    image: "Banners/MyGoldInternational.png",
    title: "MyGoldInternational",
    description: "Unlocking the world of gold investments and precious metal solutions.",
    tags: ["Web Design"],
  },
  {
    image: "Banners/BMAcademy.png",
    title: "BM Academy",
    description: "Where learning meets excellence to shape bright futures.",
    tags: ["Education"],
  },
  {
    image: "Banners/DesignInfo.png",
    title: "Design Info",
    description: "Transforming your photos into stunning works of art.",
    tags: ["Web design"],
  },
  {
    image: "Banners/RainInfoTech.png",
    title: "Rain Info Tech",
    description: "Elevating your photos with expert editing and technology.",
    tags: ["Web design"],
  },
  {
    image: "Banners/NSAHolidaysKodaikannal.png",
    title: "NSA Holidays Kodaikannal",
    description: "Your gateway to serene and unforgettable holiday experiences.",
    tags: ["Web design", "Tours and Travels"],
  },
  {
    image: "Banners/ZhagaramAcademy.png",
    title: "Zhagaram Academy of Learning and Teaching",
    description: "Redefining education with innovative and impactful learning.",
    tags: ["Web design", "Education"],
  },
  {
    image: "Banners/CollegeStudentsProject.png",
    title: "College Students",
    description: "Simplifying attendance and marks tracking website for college.",
    tags: ["Web design", "Education"],
  },
  {
    image: "Banners/Bezooz.png",
    title: "Bezooz",
    description: "Revolutionizing education with modern tools and interactive learning.",
    tags: ["Education"],
  },
];

const CasesSection = () => {
  const [visibleItems, setVisibleItems] = useState(4);

  const handleViewMore = () => {
    setVisibleItems(casesData.length);
  };

  return (
    <div className="cases-section-bg" id="cases-catalog">
      <Container className="cases-section pt-5">
        <h1 className="section-title text-center mb-5 pt-5">Our Cases</h1>
        <Row className="g-4">
          {casesData.slice(0, visibleItems).map((item, index) => (
            <Col
              md={6}
              key={index} // Automatically generates unique ID using array index
              className="case-item"
            >
              <Link to="/cases">
                <img src={item.image} alt={item.title} title={item.seotitle} className="case-image" />
              </Link>
              <h3 className="case-title">{item.title}</h3>
              <p className="case-description">{item.description}</p>
              <div className="case-tags">
                {item.tags.map((tag, tagIndex) => (
                  <Link to="/cases" key={tagIndex}>
                    <Button variant="text-white" size="sm" className="case-tag">
                      {tag}
                    </Button>
                  </Link>
                ))}
              </div>
            </Col>
          ))}
        </Row>

        {visibleItems < casesData.length && (
          <div className="bottom-btn pt-4 pb-5">
            <Button className="view-more-btn" onClick={handleViewMore}>
              View More Cases
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default CasesSection;