// import React from "react";
// import { Container, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./css/imagemarqueeslide.css";
// import Marquee from "react-fast-marquee";
// import { bookFreeCall } from "../Whatsapp/whatsappUtils";

// const images = [
//     { src: "cases/Freshbounty.png", title: "FreshBounty" },
//     { src: "cases/Chinnacleaning.png", title: "Chinna Cleaning Facility" },
//     { src: "cases/Learnengeducation.png", title: "LearnEng" },
//     { src: "cases/TravellersNeed.png", title: "TravellersNeed" },
//     { src: "cases/HuntsWorldProperties.png", title: "Hunts World Properties" },
//     { src: "cases/JKCoachingAcademy.png", title: "JK Coaching Academy" },
//     { src: "cases/MyGoldInternational.png", title: "MyGoldInternational" },
//     { src: "cases/BMAcademy.png", title: "BM Academy" },
//     { src: "cases/DesignInfo.png", title: "Design Info" },
//     { src: "cases/RainInfoTech.png", title: "Rain Info Tech" },
//     { src: "cases/NSAHolidaysKodaikannal.png", title: "NSA Holidays Kodaikannal" },
//     { src: "cases/ZhagaramAcademy.png", title: "Zhagaram Academy" },
//     { src: "cases/RedCollarAppDevelopment.png", title: "Red Collar App Development" },
//     { src: "cases/Bezooz.png", title: "Bezooz" },
//     { src: "cases/Poclane.png", title: "Poclane" },
//     { src: "cases/CollegeStudentsProject.png", title: "College Students Project" },
//     { src: "cases/RkGlobalAssociatees.png", title: "Rk Global Associatees" },
//     { src: "cases/OneWayDropTaxiSalem.png", title: "One Way Drop Taxi Salem" },
//     { src: "cases/SummerDreams.png", title: "Summer Dreams - Home Stay" },
//     { src: "cases/ChopChopMeat.png", title: "Chop Chop Meat" },
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
