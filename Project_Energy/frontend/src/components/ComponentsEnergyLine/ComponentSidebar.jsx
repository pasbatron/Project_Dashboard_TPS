import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
import { MdTimeline } from "react-icons/md";
import { FaChartLine } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { MdWorkHistory } from "react-icons/md";
import { alignProperty } from '@mui/material/styles/cssUtils';

const Sidebar = () => {
  const generateRandomData = (count, min, max) => {
    return Array.from({ length: count }, () =>
      Math.floor(Math.random() * (max - min + 1)) + min
    );
  };

  // Data untuk Bar Chart
  const totalDays = 15
  ;
  const barData = {
    labels: Array.from({ length: totalDays }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Shift 1 (kWh)',
        data: generateRandomData(totalDays, 100, 150),
        backgroundColor: '#e8c333',
        borderColor: '#d4a12a',
        borderWidth: 1,
      },
      {
        label: 'Shift 2 (kWh)',
        data: generateRandomData(totalDays, 120, 180),
        backgroundColor: '#58a1e0',
        borderColor: '#457fa8',
        borderWidth: 1,
      },
    ],
  };

  // Data untuk Line Chart
  const lineData = {
    labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
    datasets: [
      {
        label: 'Production (tons)',
        data: generateRandomData(12, 500, 1000),
        borderColor: '#3e95cd',
        backgroundColor: 'rgba(62, 149, 205, 0.4)',
        tension: 0.3,
      },
    ],
  };

  // Data untuk Pie Chart
  const pieData = {
    labels: ['Shift 1', 'Shift 2', 'Shift 3'],
    datasets: [
      {
        data: [300, 400, 200],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
        hoverBackgroundColor: ['#ff4b67', '#2491d4', '#a751fc'],
      },
    ],
  };

  // Options untuk semua chart
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true },
    },
    scales: {
      y: { beginAtZero: true },
      x: { title: { display: true, text: 'Categories' } },
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.title}>CO2</h2>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="#home" style={styles.navLink}>
            <MdTimeline /> 
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#about" style={styles.navLink}>
            <FaChartLine />
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#services" style={styles.navLink}>
            <BiSolidReport />
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="#contact" style={styles.navLink}>
            <MdWorkHistory />
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}


      <div style={styles.mainContent}>
        {/* Bar Chart */}



        <div style={styles.chartContainer}>
          <Bar
            data={barData}
            options={{
              ...options,
              plugins: { ...options.plugins, title: { text: 'Bar Chart: Energy Consumption' } },
            }}
          />
          
        </div>

        {/* Line Chart & Pie Chart */}
        <div style={styles.smallChartRow}>
          {/* <p>I want you to the bone-</p> */}

          {/* <div style={styles.smallChartContainer}>
            <Line
              data={lineData}
              options={{
                ...options,
                plugins: { ...options.plugins, title: { text: 'Line Chart: Monthly Production' } },
              }}
            />
          </div> */}
          {/* <div style={styles.smallChartContainer}>
            <Pie
              data={pieData}
              options={{
                ...options,
                plugins: { ...options.plugins, title: { text: 'Pie Chart: Shift Distribution' } },
              }}
            />
          </div> */}
        </div>

        {/* <p>Data is The Key to Transforming Waste Into Value - <strong>Ahmad Cahyadi</strong></p> */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '70vh',
  },
  sidebar: {
    width: '55px',
    backgroundColor: '#f5f5f5',
    color: '#000',
    padding: '10px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    overflowY: 'auto',
    borderRight: "1px solid",
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '19px',
    padding: '10px',
    backgroundColor:'#66c1fa',
    borderRadius: '10px',
    border: '1px solid',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
  },
  navItem: {
    marginBottom: '10px',
    
  },
  navLink: {
    textAlign:'center',
    textDecoration: 'none',
    color: '#000000',
    fontSize: '23px',
    display: 'block',
    padding: '5px 5px',
    borderRadius: '5px',
    transition: 'all 0.3s',
    backgroundColor: '#78f0e6',
    border: '1px solid',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
  },




  chartContainer: {
    marginBottom: '20px',
    width:'550px',
    // width:'60%',
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  smallChartRow: {
    display: 'flex',
    width:'550px',
    // width:'50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '20px',
  },
  smallChartContainer: {
    flex: 1,
    // width:'500px',
    width:'100%',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Sidebar;
