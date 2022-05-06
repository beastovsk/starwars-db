import React from "react";

import './ErrorMessage.css'
import icon from './death-star.png'

function ErrorMessage() {
    return (
        <div className="error-container">
            <img src={icon} alt="error img" />
            <span className="boom">BOOM!</span>
            <span>Something has gone terribly wrong</span>
            <span>But we've already sent drones to fix it.</span>
        </div>
    );
}

export default ErrorMessage;
