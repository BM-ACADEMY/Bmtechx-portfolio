// import React from "react";
// import { Container, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/imagemarqueeslide.css";
// import Marquee from "react-fast-marquee";
// import { bookFreeCall } from "../Whatsapp/whatsappUtils";

// const images = [
//     { src: "Banners/Freshbounty.png", title: "FreshBounty" },
//     { src: "Banners/Chinnacleaning.png", title: "Chinna Cleaning Facility" },
//     { src: "Banners/Learnengeducation.png", title: "LearnEng" },
//     { src: "Banners/TravellersNeed.png", title: "TravellersNeed" },
//     { src: "Banners/HuntsWorldProperties.png", title: "Hunts World Properties" },
//     { src: "Banners/JKCoachingAcademy.png", title: "JK Coaching Academy" },
//     { src: "Banners/MyGoldInternational.png", title: "MyGoldInternational" },
//     { src: "Banners/BMAcademy.png", title: "BM Academy" },
//     { src: "Banners/DesignInfo.png", title: "Design Info" },
//     { src: "Banners/RainInfoTech.png", title: "Rain Info Tech" },
//     { src: "Banners/NSAHolidaysKodaikannal.png", title: "NSA Holidays Kodaikannal" },
//     { src: "Banners/ZhagaramAcademy.png", title: "Zhagaram Academy" },
//     { src: "Banners/RedCollarAppDevelopment.png", title: "Red Collar App Development" },
//     { src: "Banners/Bezooz.png", title: "Bezooz" },
//     { src: "Banners/Poclane.png", title: "Poclane" },
//     { src: "Banners/CollegeStudentsProject.png", title: "College Students Project" },
//     { src: "Banners/RkGlobalAssociatees.png", title: "Rk Global Associatees" },
//     { src: "Banners/OneWayDropTaxiSalem.png", title: "One Way Drop Taxi Salem" },
//     { src: "Banners/SummerDreams.png", title: "Summer Dreams - Home Stay" },
//     { src: "Banners/ChopChopMeat.png", title: "Chop Chop Meat" },
// ];


// const Imagemarquee = () => {
//     return (
//         <div className="Imagemarqueeslid">
//             <div className="hero-section text-center text-dark p-5">
//                 <h1>Innovate to Elevate</h1>
//                 <p className="lead pt-3 text-center">
//                     BM Techx is your reliable technology partner, delivering cutting-edge solutions that drive growth, enhance efficiency, and maximize business potential.
//                 </p>
//                 <div className="bottom-btn">
//                     <Button className="btn-dark mt-4" onClick={bookFreeCall}>
//                         Become a Client
//                     </Button>
//                 </div>
//             </div>

//             <Container fluid className="marquee-container pb-5">
//                 <Marquee speed={100} gradient={false}>
//                 {images.map((img, index) => (
//                     <img
//                         key={`${img.src}-${index}`}
//                         src={img.src}
//                         alt={img.title}
//                         title={img.title}
//                         className="marquee-image"
//                         loading="lazy"
//                     />
//                 ))}
//                 </Marquee>
//             </Container>
//         </div>
//     );
// };

// export default Imagemarquee;

import React,{useState} from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/imagemarqueeslide.css";
import Marquee from "react-fast-marquee";
import { bookFreeCall } from "../Whatsapp/whatsappUtils";
import { useTranslation } from "react-i18next";
import ContactModal from "./ModalComponent";


const Imagemarquee = () => {
  const { t } = useTranslation("imageMarquee");
   const [showModal, setShowModal] = useState(false);
     const bookFreeCall = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Get the images array from translations (pass { returnObjects: true } to get array)
  const images = t("images", { returnObjects: true });

  return (
    <div className="Imagemarqueeslid">
      <div className="hero-section text-center text-dark p-5">
        <h1>{t("innovateToElevate")}</h1>
        <p className="lead pt-3 text-center">{t("description")}</p>
        <div className="bottom-btn">
          <Button className="btn-dark mt-4" onClick={bookFreeCall}>
            {t("becomeClient")}
          </Button>
        </div>
      </div>

      <Container fluid className="marquee-container pb-5">
        <Marquee speed={100} gradient={false}>
          {images.map((img, index) => (
            <img
              key={`${img.src}-${index}`}
              src={img.src}
              alt={img.title}
              title={img.title}
              className="marquee-image"
              loading="lazy"
            />
          ))}
        </Marquee>
      </Container>
      <ContactModal  show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default Imagemarquee;
