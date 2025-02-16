import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircleQuestion, faCheckCircle, faSimCard } from "@fortawesome/free-solid-svg-icons";

const SimSelection = () => {
  const [selectedSim, setSelectedSim] = useState(null);
  const navigate = useNavigate();

  const handleSimSelect = (sim) => {
    setSelectedSim(sim);
  };

  return (
    <div className="sim-container">
      <div className="sim-card">
        {/* Header with Back Button and Info Icon */}
        <div className="sim-header">
          <button onClick={() => navigate(-1)} className="sim-back-btn">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span className="sim-title">Continue with Zadpay</span>
          <FontAwesomeIcon icon={faCircleQuestion} className="sim-info-icon" />
        </div>

        {/* Logo */}
        <div className="login-logo my-3 ">
          <img src="/zadPay.png" width="100" alt="Zad Logo" />
        </div>

        <h5 className="sim-heading">Verify your mobile number</h5>
        <p className="sim-subtitle">This verifies your identity and helps you securely log in to ZadPay.</p>

        {/* SIM Selection Box */}
        <div className="sim-selection-box">
          <label className="sim-label">Choose SIM which belongs to</label>
          <span className="sim-number">+971 - 1234567890</span>

          {/* SMS Charges Notice */}
          <div className="sim-warning">Standard SMS charges may apply</div>

          {/* SIM Options */}
          <div
            className={`sim-option ${selectedSim === 1 ? "selected" : ""}`}
            onClick={() => handleSimSelect(1)}
          >
            <div className="sim-icon">
              <FontAwesomeIcon icon={faSimCard} size="lg" style={{ color: "#ffffff", fontSize: "26px" }} />
            </div>
            <span className={`sim-text ${selectedSim === 1 ? "text-selected" : "text-white"}`}>SIM 1 - Airtel</span>
            {selectedSim === 1 && <FontAwesomeIcon icon={faCheckCircle} className="sim-check-icon" />}
          </div>

          <div
            className={`sim-option ${selectedSim === 2 ? "selected" : ""}`}
            onClick={() => handleSimSelect(2)}
          >
            <div className="sim-icon">
              <FontAwesomeIcon icon={faSimCard} size="lg" style={{ color: "#ffffff", fontSize: "26px" }} />
            </div>
            <span className={`sim-text ${selectedSim === 2 ? "text-selected" : "text-white"}`}>SIM 2 - Airtel</span>
            {selectedSim === 2 && <FontAwesomeIcon icon={faCheckCircle} className="sim-check-icon" />}
          </div>
        </div>

        {/* Send SMS Button */}
        <button className="sim-send-btn" disabled={!selectedSim}>Send SMS</button>

        {/* Footer Link */}
        <p className="sim-footer">
          <a href="#">Unable to send SMS? Try another way</a>
        </p>
      </div>
    </div>
  );
};

export default SimSelection;
