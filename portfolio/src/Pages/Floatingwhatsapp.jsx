import React from 'react'; // Update this path to your icon

const WhatsAppFloat = () => {
  return (
    <>
      <a
        href="https://wa.me/919944940051?text=Hi%20BM%20TechX,%20I%20would%20like%20to%20connect%20with%20you."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img src='/image/whatsapp.png' alt="WhatsApp" />
      </a>

      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 40px;
          right: 20px;
          z-index: 999;
          border-radius: 50%;
          box-shadow: 0 8px 70px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .whatsapp-float img {
          width: 50px;
          height: 50px;
        }

        .whatsapp-float:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 10px 24px rgba(37, 211, 102, 0.4);
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloat;
