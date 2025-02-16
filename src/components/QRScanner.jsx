import React, { useState, useRef, useEffect } from "react";
import QrReader from "react-qr-scanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faImage, faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./QRScanner.css";

const QRScanner = ({ onClose }) => {
    const [scannedResult, setScannedResult] = useState(null);
    const [flashOn, setFlashOn] = useState(false);
    const qrReaderRef = useRef(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleScan = (data) => {
        if (data) {
            setScannedResult(data.text);
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    const handleBackClick = () => {
        if (qrReaderRef.current) {
            qrReaderRef.current.stop();
        }
        navigate("/home");
        onClose();
    };

    const handleFlashClick = () => {
        setFlashOn(!flashOn);
        // Implement flash toggle functionality if supported by the scanner
    };

    const handleGalleryClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Implement file handling and QR code scanning from the selected file
        }
    };

    const handleContactClick = () => {
        // Implement functionality to open contacts
    };

    useEffect(() => {
        const qrReader = qrReaderRef.current;
        return () => {
            if (qrReader) {
                qrReader.stop();
            }
        };
    }, []);

    return (
        <div className="qr-scanner-container">
            <div className="scanner-header">
                <button className="back-button" onClick={handleBackClick}> ← </button>
                <h2 className="scanner-title m-0">Scan Any QR Code</h2>
            </div>
            <div className="qr-reader">
                <QrReader
                    ref={qrReaderRef}
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: "100%" }}
                />
            </div>
            {scannedResult && <p className="scan-result">Scanned: {scannedResult}</p>}
            <button className="show-payment">Show Payment Code</button>
            <div className="scanner-icons">
                <button className="icon-button flash-button" onClick={handleFlashClick}>
                    <FontAwesomeIcon icon={faBolt} />
                </button>
                <button className="icon-button gallery-button" onClick={handleGalleryClick}>
                    <FontAwesomeIcon icon={faImage} />
                </button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
            </div>
            <div className="input-container">
                <input type="text" placeholder="Enter Mobile Number or Name" className="input-field" />
                <button className="contact-icon" onClick={handleContactClick}>
                    <FontAwesomeIcon icon={faAddressBook} />
                </button>
            </div>
        </div>
    );
};

export default QRScanner;
