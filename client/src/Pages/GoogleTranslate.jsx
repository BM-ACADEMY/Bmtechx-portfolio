import React, { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";

const GoogleTranslate = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic (العربية)" },
    { code: "es", label: "Spanish (Español)" },
    { code: "fr", label: "French (Français)" },
    { code: "hi", label: "Hindi (हिन्दी)" },
    { code: "ru", label: "Russian (Русский)" },
    { code: "ta", label: "Tamil (தமிழ்)" },
  ];

  // Helper to read the Google Translate cookie
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  useEffect(() => {
    // 1. Read existing cookie to preserve user's language choice on load
    const googtrans = getCookie("googtrans");
    if (googtrans) {
      const parts = googtrans.split("/");
      const lang = parts[parts.length - 1];
      if (lang && languages.some((l) => l.code === lang)) {
        setSelectedLanguage(lang);
      }
    }

    // 2. Define the Google Translate init function
    window.googleTranslateElementInit = () => {
      if (!window.google || !window.google.translate) return;
      if (document.getElementById("google_translate_element")) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: languages.map((lang) => lang.code).join(","),
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL
          },
          "google_translate_element"
        );
      }
    };

    // 3. Load the Google Translate script dynamically if not present
    if (!document.getElementById("google_translate_script")) {
      const script = document.createElement("script");
      script.id = "google_translate_script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }
  }, []);

  const handleLanguageChange = (e) => {
    const langCode = e.target.value;
    setSelectedLanguage(langCode);
    const domain = window.location.hostname;

    if (langCode === "en") {
      // Clear cookies to revert back to English
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;
    } else {
      // Set the Google Translate cookie directly
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain};`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${domain};`;
    }

    // Try to dynamically change standard Google Translate select menu if it exists in DOM
    const googleCombo = document.querySelector(".goog-te-combo");
    if (googleCombo) {
      googleCombo.value = langCode;
      googleCombo.dispatchEvent(new Event("change"));
    }

    // Force a page reload to apply the translation cleanly across React DOM
    window.location.reload();
  };

  return (
    <div className="google-translate-floating">
      <FaGlobe className="globe-icon" style={{ color: "#f4cb00", flexShrink: 0, pointerEvents: "none" }} />

      <select
        value={selectedLanguage}
        onChange={handleLanguageChange}
        className="notranslate translate-select"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} style={{ backgroundColor: "#111111", color: "#cfcfcf" }}>
            {lang.label}
          </option>
        ))}
      </select>

      <div className="dropdown-arrow">▼</div>

      {/* --- Move Google Translate Element off-screen --- */}
      <div
        id="google_translate_element"
        style={{ 
            width: "1px", 
            height: "1px", 
            position: "absolute", 
            top: "-9999px", 
            left: "-9999px",
            overflow: "hidden"
        }}
      ></div>

      {/* --- STRICT CSS TO HIDE GOOGLE TOP BAR & FOOTER LOGOS + RESPONSIVE STYLING --- */}
      <style>{`
        /* Floating Select Component Styling (Desktop default) */
        .google-translate-floating {
            position: fixed;
            right: 20px;
            top: 22px; /* Desktop position aligning with header */
            z-index: 9999;
            display: flex;
            align-items: center;
            background-color: #111111;
            border: 1.9px solid #232219;
            border-radius: 30px;
            padding: 6px 14px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
            transition: all 0.3s ease;
        }

        .globe-icon {
            font-size: 16px;
        }

        .translate-select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: transparent;
            border: none;
            font-size: 14px;
            font-weight: 600;
            color: #cfcfcf;
            padding: 2px 20px 2px 8px;
            outline: none;
            cursor: pointer;
            min-width: 110px;
        }

        .dropdown-arrow {
            position: absolute;
            right: 14px;
            pointer-events: none;
            color: #f4cb00;
            font-size: 9px;
        }

        /* Responsive Mobile and Tablet screens (under 1024px) */
        @media (max-width: 1024px) {
            .google-translate-floating {
                top: 110px !important; /* Moves down below the header bar as requested */
                right: 15px !important;
                width: 42px !important;
                height: 42px !important;
                border-radius: 50% !important;
                padding: 0 !important;
                justify-content: center !important;
            }

            .globe-icon {
                font-size: 18px !important;
            }

            /* Make select invisible but cover the entire circular button */
            .translate-select {
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                opacity: 0 !important;
                min-width: unset !important;
                padding: 0 !important;
                z-index: 10 !important;
            }

            .dropdown-arrow {
                display: none !important; /* Hide arrow on mobile */
            }
        }

        /* 1. Hide the Google Top Bar (Banner) */
        .goog-te-banner-frame {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
        }
        .VIpgJd-ZVi9od-ORHb-OEVmcd {
            display: none !important;
            visibility: hidden !important;
        }
        
        /* 2. Reset Body Top (Google adds 40px) */
        body { 
            top: 0px !important; 
            position: static !important;
        }

        /* 3. Hide the Google Tooltip */
        .goog-tooltip {
            display: none !important;
        }
        .goog-text-highlight {
            background-color: transparent !important;
            box-shadow: none !important;
        }

        /* 4. Hide Google's Footer Logo */
        .goog-logo-link {
            display: none !important;
        }
        .goog-te-gadget {
            height: 0 !important;
            overflow: hidden !important;
        }
      `
      }</style>
    </div>
  );
};

export default GoogleTranslate;
