import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import "./ReceiveMoney.css"; // Custom styling

const ReceiveMoney = ({ onClose }) => {
  const navigate = useNavigate();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  const shareQR = () => {
    alert("Share QR functionality will be implemented here.");
  };

  const downloadQR = () => {
    alert("Download QR functionality will be implemented here.");
  };

  const handleBackClick = () => {
    navigate("/home");
    onClose();
  };

  return (
    <div className="receive-money-container">
      {/* Header */}
      <div className="header_top">
        <FontAwesomeIcon icon={faArrowLeft} className="icon" onClick={handleBackClick} />
        <div className="header-text">
          <h5>Receive Money</h5>
          <p>From any UPI app</p>
        </div>
        <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
      </div>

      {/* Bank & UPI Info */}
      <div className="bank-info">
        <img src="./rafidianbank.png" alt="HDFC Bank" className="bank-logo" />
        <h6 className="m-0">Rafidian Bank - XX62</h6>
      </div>

      {/* QR Code Section */}
      <div className="container">
        <div className="qr-box">
          <img src="./zadqr.png" alt="QR Code" className="qr-img" />
          <div className="action-buttons">
            <button className="btn qr-btn" onClick={shareQR}>
              <i className="fas fa-share"></i> Share QR
            </button>
            <button className="btn qr-btn" onClick={downloadQR}>
              <i className="fas fa-download"></i> Download QR
            </button>
          </div>
        </div>

        {/* UPI IDs Section */}
        <div className="upi-section">
          <h6>
            UPI IDs and Numbers <span className=" float-end">MANAGE</span>
          </h6>
          {["123456789icici@ybl", "123456789icici@ibl", "123456789icici@axl"].map((upi, index) => (
            <div className="upi-item" key={index}>
              <span>{upi}</span>
              <i className="fas fa-copy copy-btn" onClick={() => copyToClipboard(upi)}></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReceiveMoney;
