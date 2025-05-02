import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Home.css";
import { FaStar } from "react-icons/fa";
import { bookFreeCall } from "../Whatsapp/whatsappUtils";
import VideoSection from "./videosection";
import MarqueeSlider from "./Marquee";

export default function HeroSection() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="home-sectin-full">
      <div className="container-fluid home-section pt-5">
        <div>
          {/* Logo Image */}
          <img
            src="Banners/Logo.png"
            alt="Top Logo"
            className={`mb-1 top-image transition-all ${
              isToggled ? "grayscale" : ""
            }`}
          />

          {/* Heading with Toggle Button */}
          <div className="heading-container">
            <h1 className="display-4">
              Turning C<span className="toggle-container">
                <label className="toggle-label">
                  <input
                    type="checkbox"
                    className="toggle-input"
                    checked={isToggled}
                    onChange={() => setIsToggled(!isToggled)}
                  />
                  <span className="toggle-slider">
                    <span className="d-block"></span>
                  </span>
                </label>
              </span>l ideas
            </h1>
            <h1 className="display-4 -mb-1">to great products</h1>
          </div>

          <span className="text-secondary pt-3">
            BM Techx is your trusted digital partner, dedicated to
          </span>
          <br />
          <span className="text-secondary mt-2">
            driving business growth with innovative and effective digital
            strategies.
          </span>

          {/* Button using the imported WhatsApp function */}
          <div className="button-container pt-3 mb-3">
            <button className="book-button" onClick={bookFreeCall}>
              Book a Free Call
            </button>
          </div>

          {/* Rating Section */}
          <div className="rating-section text-center">
            {/* Rating Badge */}
            <div className="rating-badge d-inline-flex align-items-center justify-content-center mb-3">
              <span className="rating-text">4.8</span>
              <FaStar className="star-icon" />
            </div>

            {/* Brand Logos */}
            <div className="brand-logos flex justify-center items-center gap-4">
              <img src="/Brand/logo1.png" alt="Logo 1" width={100} />
              <img src="/Brand/logo2.png" alt="Logo 2" width={100} />
              <img src="/Brand/logo10.png" alt="Logo 3" width={100} />
              <img src="/Brand/logo5.png" alt="Logo 4" width={100} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <VideoSection/>
      </div>
      <div>
        <MarqueeSlider/>
      </div>
    </div>
  );
}
