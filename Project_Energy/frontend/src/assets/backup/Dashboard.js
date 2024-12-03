// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-wrapper">
            <div className="summary-container">
                <div className="summary-box">電力 / Listrik (kWh) <span>9.106354363 MWh</span></div>
                <div className="summary-box">水 / Air (m³) <span>0 m³</span></div>
                <div className="summary-box">空気 / Udara (m³) <span>0 m³</span></div>
                <div className="summary-box">ガス / Gas (m³) <span>0 m³</span></div>
            </div>
            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>受電 / Power Reception</th>
                            <th>現在値 / Current Value</th>
                            <th>目標比 / Target Ratio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>瞬時電力 / Instant Power</td><td>151 kW</td><td>30.2 %</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
