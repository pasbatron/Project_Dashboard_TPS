import React from 'react';
import { NavbarEnergyListrikPG } from '../components/ComponentsEnergyLine/NavbarEnergyListrikPG';
import './css/subMenuPG.css';

const PageControlEnergy_PG = () => {
  const data = [
    { id: 1, title: 'DATA PG1', description: 'Total Energy Shift-1' },
    { id: 2, title: 'DATA PG2', description: 'Total Energy Shift-2' },
    { id: 3, title: 'DATA PG3', description: 'Total Energy Shift-3' },

  ];


  
  return (
    <div>
      <NavbarEnergyListrikPG />
      <div className="subMenuPG">
        <div className="grid-container">
          <div className="card">
            <h2 className="card-title">PG1</h2>
            <p className="card-description">Data</p>
          </div>




        </div>

      </div>
    </div>
  );
};

export default PageControlEnergy_PG;
