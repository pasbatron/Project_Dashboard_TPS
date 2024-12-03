import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EnergyConsumptionChart = () => {
  // Fungsi untuk menghasilkan data random
  const generateRandomData = (days, min, max) => {
    return Array.from({ length: days }, () =>
      Math.floor(Math.random() * (max - min + 1)) + min
    );
  };

  // Konfigurasi data
  const totalDays = 30; // Jumlah hari dalam sebulan
  const daysInMonth = Array.from({ length: totalDays }, (_, i) => i + 1);
  const shift1Data = generateRandomData(totalDays, 100, 150);
  const shift2Data = generateRandomData(totalDays, 120, 180);

  const data = {
    labels: daysInMonth.map((day) => `Day ${day}`),
    datasets: [
      {
        label: 'Shift 1 (kWh)',
        data: shift1Data,
        backgroundColor: '#e8c333',
        borderColor: '#d4a12a',
        borderWidth: 1,
      },
      {
        label: 'Shift 2 (kWh)',
        data: shift2Data,
        backgroundColor: '#58a1e0',
        borderColor: '#457fa8',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Energy Consumption Chart',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Energy (kWh)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Days',
        },
      },
    },
  };

  return (
    <div
      style={{
        maxWidth: '980px',
        margin: '0 auto',
        backgroundColor: '#f5f7fa',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default EnergyConsumptionChart;
