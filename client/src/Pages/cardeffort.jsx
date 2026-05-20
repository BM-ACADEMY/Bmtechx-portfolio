
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
