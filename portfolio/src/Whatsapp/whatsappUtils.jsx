// whatsappUtils.js
export const bookFreeCall = () => {
    const phoneNumber = "9944940051"; // Your WhatsApp number with country code (no + or spaces)
    const message = "Hi BM TechX, I would like to connect with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };