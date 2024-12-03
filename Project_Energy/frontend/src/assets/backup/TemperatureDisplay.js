// src/components/TemperatureDisplay.js
import React from 'react';
import './TemperatureDisplay.css';

const TemperatureDisplay = () => {
    return (
        <div className="temperature-container">
            <div className="temperature-box outside-temp">
                <div>外気 温度 / Outside Temperature</div>
                <div className="temperature-value">38.3<span className="unit">°C</span></div>
            </div>
            <div className="temperature-box inside-temp">
                <div>工場内温度 / Inside Temperature</div>
                <div className="temperature-value">36.2<span className="unit">°C</span></div>
            </div>
        </div>
    );
};

export default TemperatureDisplay;
