import React from "react";
import "./LoadingScreen.css"; // Import CSS for styling

const LoadingScreen = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingScreen;
