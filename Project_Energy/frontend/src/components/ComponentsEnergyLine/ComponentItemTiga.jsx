import React from 'react';
import './css/ComponentItemTiga.css';



export const ComponentItemTiga = () => {
  const handleClick = (link) => {
    window.location.href = link; // Navigasi ke link
  };

  return (
    <div className="item ItemTiga">
      <div className="box" onClick={() => handleClick('http://localhost:5173/cr_12')}>
        <div className="box-header">Listrik</div>
        <div className="box-body">Na</div>
      </div>
      <div className="box" onClick={() => handleClick('https://localhost/angin')}>
        <div className="box-header">Angin</div>
        <div className="box-body">Na</div>
      </div>
      <div className="box" onClick={() => handleClick('https://localhost/air')}>
        <div className="box-header">Air</div>
        <div className="box-body">Na</div>
      </div>
      <div className="box" onClick={() => handleClick('https://localhost/gas')}>
        <div className="box-header">Gas</div>
        <div className="box-body">Na</div>
      </div>
    </div>
  );
};
