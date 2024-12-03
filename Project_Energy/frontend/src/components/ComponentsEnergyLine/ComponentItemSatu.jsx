import React from 'react';
import './css/ComponentItemSatu.css';





export const ComponentItemSatu = () => {
  return (
    <div className="item ItemSatu">
        <div className="status-table-container">
            <table className="status-table">
                <thead>
                <tr>
                    <th>Daya<br/>受 電</th>
                    <th>Nilai Saat Ini<br/>現在 値</th>
                    <th>Perbandingan Target<br/>目標比</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Daya Saat Ini<br/>瞬時電力</td>
                    <td>1888 <span>kW</span></td>
                    <td>Na<span>%</span></td>
                </tr>
                <tr>
                    <td>Demand<br/>現在デマンド</td>
                    <td>Na <span>kW</span></td>
                    <td>Na <span>%</span></td>
                </tr>
                <tr>
                    <td>Demand Prediction<br/>予測デマンド</td>
                    <td>Na <span>kW</span></td>
                    <td>Na <span>%</span></td>
                </tr>
                <tr>
                    <td>Kontrak Daya <br/> 目標値</td>
                    <td>2400 <span>kW</span></td>
                    <td>
                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{ width: '70%' }}></div>
                    </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className="status-icon">
                <div id="emoji" className="emoji"></div>
            </div>
        </div>
    </div>
  );
};
