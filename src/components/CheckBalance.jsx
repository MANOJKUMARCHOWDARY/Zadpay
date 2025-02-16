import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faRedo, faQuestionCircle, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./CheckBalance.css"; // Import CSS for styling

const CheckBalance = ({ onClose }) => {
  // Dummy bank data
  const bankAccounts = [
    { name: "Rafidain Bank", number: "1522", logo: "/rafidianbank.png" },
    { name: "Rasheed Bank", number: "4873", logo: "/rasheedbank.png" },
    { name: "Byblos Bank", number: "XX77", logo: "/byblos.png" },
    { name: "Bank of Baghdad", number: "XX62", logo: "/bagdadh.png" },
    { name: "National Bank Iraq", number: "7460", logo: "/nationalbank.png" }
  ];

  const prepaidBalances = [
    { name: "Zadpay Wallet", logo: "zad.png" }
  ];

  const handleRefreshClick = () => {
    // Define what happens when the refresh button is clicked
    console.log("Refresh button clicked");
  };

  return (
    <div className="check-balance-container">
      <header className="header_top">
        <button className="back-button" onClick={onClose}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2 className="header-title">Check Balance</h2>
        <div className="header-icons">
          <FontAwesomeIcon icon={faRedo} className="icon" onClick={handleRefreshClick} />
          <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
        </div>
      </header>

      {/* Accounts on UPI */}
      <div className="section">
        <h6>Accounts on UPI</h6>
        {bankAccounts.map((bank, index) => (
          <div className="bank-item" key={index}>
            <img src={bank.logo} alt={bank.name} className="bank-logo" />
            <span>{bank.name} - {bank.number}</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        ))}
      </div>

      {/* Pre-Paid Balance */}
      <div className="section">
        <h6>Pre-Paid Balance</h6>
        {prepaidBalances.map((balance, index) => (
          <div className="bank-item" key={index}>
            <img src={balance.logo} alt={balance.name} className="bank-logo" />
            <span>{balance.name}</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckBalance;
