import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check } from "lucide-react";
import "./css/LanguageSelector.css";

const LanguageSelector = ({ className }) => {
  const { i18n } = useTranslation("footer");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "ta", name: "தமிழ்" },
    { code: "fr", name: "Français" },
    { code: "hi", name: "हिंदी" },
    { code: "ru", name: "Русский" },
    { code: "es", name: "Español" },
    { code: "ja", name: "Japanese" },
    { code: "ar", name: "العربية" },
  ];

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`language-selector ${className || ""}`}>
      <button
        className="globe-button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <Globe size={24} />
      </button>
      {isOpen && (
        <ul className="language-menu">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`language-option ${i18n.language.split("-")[0] === lang.code ? "selected" : ""}`}
              onClick={() => changeLang(lang.code)}
              role="option"
              aria-selected={i18n.language.split("-")[0] === lang.code}
            >
              {lang.name}
              {i18n.language.split("-")[0] === lang.code && (
                <Check size={16} className="check-icon" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;