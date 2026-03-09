// import "./css/cardeffort.css";
// import React from "react";
// import { motion } from "framer-motion";
// import { bookFreeCall } from "../Whatsapp/whatsappUtils";

// const ZigzagCards = () => {
//   const cards = [
//     {
//       id: 1,
//       image: "Banners/UI_UX.png",
//       logo: "image/s1.1.png",
//       heading: "UI/UX Design",
//       text: "We create intuitive and engaging designs that enhance user experience, improve usability, and boost conversions. Our expert team ensures a seamless, visually appealing digital presence.",
//       buttonText: "Contact Us",
//     },
//     {
//       id: 2,
//       image: "Banners/3dmotion.png",
//       logo: "image/s2.2.png",
//       heading: "Product Design",
//       text: "Transform your ideas into market-ready products with our innovative and scalable design solutions. We blend technology and creativity to deliver high-performance products.",
//       buttonText: "Contact Us",
//     },
//     {
//       id: 3,
//       image: "Banners/Productdesign.png",
//       logo: "image/s3.3.png",
//       heading: "Web Design",
//       text: "We craft visually stunning and user-friendly websites that captivate audiences and drive engagement. Our designs blend creativity with functionality for a seamless digital experience.",
//       buttonText: "Contact Us",
//     },
//     {
//       id: 4,
//       image: "Banners/WebDevelpment.png",
//       logo: "image/s4.4.png",
//       heading: "3D & Motion",
//       text: "Bring your ideas to life with dynamic 3D motion graphics that captivate and engage. Our animations add depth, realism, and energy to your brand's storytelling.",
//       buttonText: "Contact Us",
//     },
//     {
//       id: 5,
//       image: "Banners/Coding.png",
//       logo: "image/s5.5.png",
//       heading: "Web Development",
//       text: "We build high-performance, responsive websites tailored to your business needs. From front-end to back-end, our development solutions ensure speed, security, and scalability.",
//       buttonText: "Contact Us",
//     },
//   ];

//   return (
//     <div className="cardeffort">
//       <h2 className="text-center card-top-text fw-bold pb-3">Our services</h2>
//       <div className="container px-md-4 px-lg-5"> {/* Added responsive padding */}
//         {cards.map((card, index) => (
//           <motion.div
//             key={card.id}
//             className={`row gx-md-4 mb-4 align-items-center ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
//             initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <div className="col-md-6 mb-2 px-md-3"> {/* Added padding */}
//               <img src={card.image} alt={`Card ${card.id}`} className="img-fluid w-100" />
//             </div>
//             <div className={`col-md-6 card-text-col px-md-4 ${index % 2 === 0 ? 'ps-md-3' : 'pe-md-3'}`}>
//               <img src={card.logo} alt="Logo" className="logo-img mb-4 mt-3" />
//               <h2 className="heading-with-logo">
//                 <span>{card.heading}</span>
//               </h2>
//               <p>{card.text}</p>
//               <button 
//                 className="btn btn-primary mb-4" 
//                 onClick={bookFreeCall}
//               >
//                 {card.buttonText}
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ZigzagCards;

import "./css/cardeffort.css";
import React,{useState} from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { bookFreeCall } from "../Whatsapp/whatsappUtils";
import ContactModal from "./ModalComponent";

const ZigzagCards = () => {
  const { t } = useTranslation("ourServices");
   const [showModal, setShowModal] = useState(false);
  const cards = t("cards", { returnObjects: true });
    const bookFreeCall = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cardeffort">
      <h2 className="text-center card-top-text fw-bold pb-3">{t("title")}</h2>
      <div className="container px-md-4 px-lg-5">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`row gx-md-4 mb-4 align-items-center ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="col-md-6 mb-2 px-md-3">
              <img src={card.image} alt={`Card ${card.id}`} className="img-fluid w-100" />
            </div>
            <div className={`col-md-6 card-text-col px-md-4 ${index % 2 === 0 ? 'ps-md-3' : 'pe-md-3'}`}>
              <img src={card.logo} alt="Logo" className="logo-img mb-4 mt-3" />
              <h2 className="heading-with-logo">
                <span>{card.heading}</span>
              </h2>
              <p>{card.text}</p>
              <button 
                className="btn btn-primary mb-4" 
                onClick={bookFreeCall}
              >
                {card.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      <ContactModal  show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default ZigzagCards;
