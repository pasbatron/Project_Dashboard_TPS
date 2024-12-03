import React, { useEffect, useState } from 'react';
import naisImage from '../../assets/images/nais_otics.png';
import './css/ComponentNavbarEnergyListrik.css';

export const ComponentNavbarEnergyListrik = () => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
  
    useEffect(() => {
      const updateTime = () => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString('id-ID', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
        const formattedTime = now.toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        setDate(formattedDate);
        setTime(formattedTime);
      };
  
      updateTime();
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }, []);


    return (
      <div className="navbar">
        <div className="navbar-left">
          <img src={naisImage} alt="Home Icon" className="home-icon" />
        </div>
        <div className="navbar-center">
          <p>Display Monitoring Konsumsi Listrik Plant 1 <br/> プラント1の電力消費監視表示</p>
        </div>
        <div className="navbar-right">
          <div>{date}</div>
          <div>{time}</div>
        </div>
      </div>
    )
}
