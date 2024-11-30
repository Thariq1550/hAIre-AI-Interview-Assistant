import React, { useState } from "react";
import "./App.css";
import logo from "./whu_logo_2.png"; // WHU logo file in the src folder
import welcomeImage from "./welcomeImage.png"; // Welcome image in the src folder
import profileIcon from "./profileIcon.png"; // Profile icon for the applicant

function App() {
  const videos = [
    "/videos/question1.mp4",
    "/videos/question2.mp4",
    "/videos/question3.mp4",
    "/videos/question4.mp4",
    "/videos/question5.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(-1);
  const [buttonsEnabled, setButtonsEnabled] = useState(false);

  const handleVideoEnd = () => {
    setButtonsEnabled(true);
  };

  const handleNext = () => {
    if (currentVideoIndex + 1 < videos.length) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      setButtonsEnabled(false);
    } else {
      alert("Interview Complete! Thank you.");
      setCurrentVideoIndex(-1); // Go back to welcome screen
    }
  };

  const handleRecord = () => {
    alert("Recording started (dummy action).");
  };

  return (
    <div className="app">
      {/* Render Welcome Screen */}
      {currentVideoIndex === -1 ? (
        <div className="welcome-screen">
          <div className="welcome-content">
            <img src={logo} alt="WHU Logo" className="welcome-logo" />
            <h2 className="welcome-title">Hello Applicant,</h2>
            <p className="welcome-message">
              Thank you for applying to our program.
            </p>
            <button
              className="welcome-button primary-button"
              onClick={() => setCurrentVideoIndex(0)}
            >
              Start
            </button>
            <p className="final-message">All the best for your Interview!</p>
          </div>
          <img src={welcomeImage} alt="WHU Welcome" className="welcome-image" />
        </div>
      ) : (
        // Render Video Screen
        <>
          <header className="header">
            <img src={logo} alt="WHU Logo" className="header-logo" />
            <h1 className="header-title">hAIre Interview Assistant - MSc Business Analytics Interview</h1>
            <div className="header-profile">
              <span>Applicant</span>
              <img src={profileIcon} alt="Profile Icon" className="profile-icon" />
            </div>
          </header>
          <div className="video-screen">
            <div className="video-container">
              <video
                className="interview-video"
                src={videos[currentVideoIndex]}
                controls
                autoPlay
                onEnded={handleVideoEnd}
              />
            </div>
            <div className="button-group">
              <button
                className={`button record-button ${!buttonsEnabled ? "disabled" : ""}`}
                onClick={handleRecord}
                disabled={!buttonsEnabled}
              >
                Record
              </button>
              <button
                className={`button primary-button ${!buttonsEnabled ? "disabled" : ""}`}
                onClick={handleNext}
                disabled={!buttonsEnabled}
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}

        {/* Footer */}
        <footer className="footer">
        <p>
          © {new Date().getFullYear()} hAIre - AI Interview Assistant. All Rights Reserved.
        </p>
        <p>
          <a href="https://www.whu.edu/" target="_blank" rel="noopener noreferrer">
            Visit WHU
          </a>
          |
          <a href="https://www.whu.edu/contact/" target="_blank" rel="noopener noreferrer">
            Contact Us
          </a>
        </p>
      </footer>

    </div>
  );
}

export default App;
