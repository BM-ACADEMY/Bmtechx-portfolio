import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import i18n from './i18n.jsx'; // Make sure this exports the i18n instance

// Set initial direction
const rtlLanguages = ['ar'];
document.documentElement.dir = rtlLanguages.includes(i18n.language) ? 'rtl' : 'ltr';

// Listen to language changes and update direction dynamically
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = rtlLanguages.includes(lng) ? 'rtl' : 'ltr';
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
