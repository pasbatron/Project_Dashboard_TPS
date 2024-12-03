// src/components/Chart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = () => {
    const data = {
        labels: Array.from({ length: 20 }, (_, i) => i + 1),
        datasets: [
            { label: 'kWh Trend 1', data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 40)) },
            { label: 'kWh Trend 2', data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 40)) }
        ]
    };
    return (
        <div style={{ width: '80%', margin: '20px auto' }}>
            <Line data={data} />
        </div>
    );
};

export default Chart;
