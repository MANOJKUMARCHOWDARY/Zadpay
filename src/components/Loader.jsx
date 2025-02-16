import React, { useEffect, useState } from "react";
import "../index.css";

const Loader = ({ onFinish }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
            if (onFinish) onFinish();
        }, 2000);
    }, [onFinish]);

    return (
        visible && (
            <div className="page-loader">
                <div className="loader-container">
                    <div className="loader"></div>
                    <p>Loading...</p>
                </div>
            </div>
        )
    );
};

export default Loader;
