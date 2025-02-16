import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Chatbot from "./components/Chatbot";
import Auth from "./pages/Auth";
import OtpVerification from "./components/OtpVerification";
import Home from "./pages/Home";
import "./index.css";

const App = () => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading ? (
                <Loader onFinish={() => setLoading(false)} />
            ) : (
                <>
                    <Routes>
                        <Route path="/" element={<Auth />} />
                        <Route path="/otp" element={<OtpVerification />} /> {/* ✅ No wrapper needed */}
                        <Route path="/home" element={<Home />} />
                    </Routes>
                    <Chatbot />
                </>
            )}
        </>
    );
};

export default App;
