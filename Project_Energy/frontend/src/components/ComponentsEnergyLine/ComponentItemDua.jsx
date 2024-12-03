import React from 'react'
import './css/ComponentItemDua.css';

export const ComponentItemDua = () => {
  return (
    <div className="item ItemDua">
        <div className="panel">
            <div className="indicator">
                <span>CMP1</span>
                <div className="light red" id="cmp1"></div>
            </div>
            <div className="indicator">
                <span>CMP2</span>
                <div className="light red" id="cmp2"></div>
            </div>
            <div className="indicator">
                <span>CMP3</span>
                <div className="light green" id="cmp3"></div>
            </div>
            <div className="indicator">
                <span>CMP4</span>
                <div className="light red" id="cmp4"></div>
            </div>

        </div>
    </div>
  );
};
