import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircleQuestion, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import LoginMethods from "./LoginMethods";

const OtpVerification = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [timer, setTimer] = useState(44);
    const [showOtp, setShowOtp] = useState(false);
    const [redirect, setRedirect] = useState(false); // ✅ Force re-render on OTP success
    const navigate = useNavigate();

    useEffect(() => {
        let countdown = 44;
        setTimer(countdown);
        const interval = setInterval(() => {
            countdown -= 1;
            setTimer(countdown);
            if (countdown <= 0) {
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // ✅ Redirect when OTP is correct
    useEffect(() => {
        if (redirect) {
            navigate("/home", { replace: true }); // ✅ Force navigation on state update
        }
    }, [redirect, navigate]);

    const handleOtpChange = (index, e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value) && value.length <= 1) {
            let newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value !== "" && index < 3) {
                document.getElementById(`otp-${index + 1}`).focus();
            }

            if (newOtp.every((digit) => digit !== "")) {
                if (newOtp.join('') === '1234') {
                    setRedirect(true); // ✅ Triggers re-render & redirect
                } else {
                    alert("Invalid OTP, try again.");
                    setOtp(["", "", "", ""]); // Reset OTP input
                }
            }
        }
    };

    return (
        <div className="otp-container">
            <div className="otp-card">
                <div className="d-flex justify-content-between align-items-center text-white">
                    <button onClick={() => navigate("/")} className="otp-back-btn">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <span className="text_greymain"><b>Continue with ZadPay </b></span>
                    <FontAwesomeIcon icon={faCircleQuestion} />
                </div>

                <div className="d-flex flex-column align-items-center">
                    <div className="login-logo my-3">
                        <img src="/zadPay.png" width="100" alt="Zad Logo" />
                    </div>

                    <h5 className="mt-3 text-white">Verify your mobile number</h5>
                    <p className="otp-subtitle text-center">
                        This verifies your identity and helps you securely log in.
                    </p>

                    <label className="otp-label">Enter OTP sent to +971 - 1234567890</label>
                    <div className="d-flex justify-content-center w-100 position-relative mt-2 mb-4">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                type={showOtp ? "text" : "password"}
                                maxLength="1"
                                className="otp-input"
                                value={digit}
                                onChange={(e) => handleOtpChange(index, e)}
                                inputMode="numeric"
                                style={{ marginRight: index < 3 ? "10px" : "0" }}
                            />
                        ))}
                        <button
                            type="button"
                            className="otp-toggle-btn"
                            onClick={() => setShowOtp(!showOtp)}
                            style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
                        >
                            <FontAwesomeIcon icon={showOtp ? faEyeSlash : faEye} />
                        </button>
                    </div>

                    <div className="otp-timer">
                        <div className="otp-timer-animation"></div>
                        Auto-reading OTP {timer > 0 ? `0:${timer}` : "Expired"}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpVerification;
