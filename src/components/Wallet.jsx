import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faQuestionCircle,
  faAngleRight,
  faHistory,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Wallet.css";

const Wallet = ({ onClose }) => {
  const [balance, setBalance] = useState(0);
  const [topupAmount, setTopupAmount] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleTopup = () => {
    const amount = parseFloat(topupAmount);
    if (!isNaN(amount) && amount > 0) {
      setBalance(balance + amount);
      setTopupAmount("");
    }
  };

  const handleRecommendedAmountClick = (amount) => {
    setTopupAmount(amount.toString());
  };

  const handleBackClick = () => {
    navigate("/home");
    onClose();
  };

  return (
    <div className="wallet-container">
      {/* Header */}
      <div className="wallet-header">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="icon"
          onClick={handleBackClick}
        />
        <h2 className="wallet-title">ZadPay Wallet</h2>
        <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
      </div>

      {/* Wallet Banner */}
      <div className="wallet-banner">
        <div className="banner-content">
          <p className="wallet-title">One Wallet For Every QR Code!</p>
          <p className="wallet-subtitle">
            Now scan any UPI QR code & pay directly with your ZadPay Wallet.
          </p>
          <button className="upgrade-btn">Upgrade Wallet &rsaquo;</button>
        </div>
      </div>

      {/* Wallet Balance */}
      <div className="wallet-balance">
        <h1
          className="balance-amount"
          style={{ color: balance > 100 ? "green" : "#e9695b" }}
        >
          ₹{balance.toFixed(2)}
        </h1>
      </div>

      {/* Topup Wallet Section */}
      <div className="topup-section">
        <p className="topup-title">Topup Wallet</p>
        <div className="topup-box">
          <span>₹</span>
          <input
            type="number"
            value={topupAmount}
            onChange={(e) => setTopupAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div className="recommended-amounts">
          <button onClick={() => handleRecommendedAmountClick(1000)}>
            ₹1,000
          </button>
          <button onClick={() => handleRecommendedAmountClick(1500)}>
            ₹1,500
          </button>
          <button onClick={() => handleRecommendedAmountClick(2000)}>
            ₹2,000
          </button>
        </div>
        <button
          className="topup-button"
          onClick={handleTopup}
          disabled={!topupAmount || parseFloat(topupAmount) <= 0}
        >
          PROCEED TO TOPUP
        </button>
      </div>

      {/* Options */}
      <div className="wallet-options">
        <div className="option">
            <div className="auto-topup-icon">
              <FontAwesomeIcon icon={faHistory} className="option-icon" />
            </div>
            <div>
              <p className="m-0">Set Auto Top-up</p>
              <small>Never run out of balance</small>
            </div>
            <FontAwesomeIcon icon={faAngleRight} className="option-arrow" />
         
        </div>
        {/* <div className="option">
                    <FontAwesomeIcon icon={faArrowUp} className="option-icon" />
                    <div>
                        <p>Upgrade Wallet</p>
                        <small>Complete your Full KYC</small>
                    </div>
                    <FontAwesomeIcon icon={faAngleRight} className="option-arrow" />
                </div> */}
        <div className="option d-flex justify-between">
          <FontAwesomeIcon
            icon={faRightLeft}
            className="option-icon"
            style={{ marginLeft: "10px" }}
          />
          <p className="m-0 p-2">Wallet Transaction History</p>
          <FontAwesomeIcon icon={faAngleRight} className="option-arrow" />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
