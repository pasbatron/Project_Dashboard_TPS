// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [dateTime, setDateTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date().toLocaleString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="navbar">
            <div className="branding">OTICS INDONESIA</div>
            <div className="datetime">{dateTime}</div>
            <div className="features">
                <button className="feature">トップ</button>
                <button className="feature">一</button>
                <button className="feature">二</button>
                <button className="feature">三</button>
                <button className="feature">四</button>
            </div>
        </div>
    );
};

export default Navbar;
