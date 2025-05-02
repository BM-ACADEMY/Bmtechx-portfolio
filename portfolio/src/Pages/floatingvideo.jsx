import React, { useState, useRef, useEffect } from 'react';

const FloatingVideoPlayer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const videoUrl = "Banners/floatingvideo.mp4"; // Replace with your actual video path

  const handleClose = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  // Handle autoplay
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay might be blocked by browser:", error);
        });
      }
    }
  }, [isMuted]);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleClick = () => {
    if (videoRef.current) {
      const currentlyMuted = videoRef.current.muted;
      videoRef.current.muted = !currentlyMuted;
      setIsMuted(!currentlyMuted);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`floating-video-container ${isFading ? 'fade-out' : ''}`}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        width: '120px',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
        transition: 'opacity 0.3s ease',
        backgroundColor: '#000',
      }}
    >
      <div style={{ position: 'relative' }}>
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          playsInline
          muted={isMuted}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          style={{
            width: '100%',
            height: '200px', // ✅ Set fixed height here
            display: 'block',
            objectFit: 'cover',
            cursor: 'pointer',
          }}
        />
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '8px',
            right: '4px',
            background: 'none',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
          aria-label="Close video"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default FloatingVideoPlayer;
