// RealtimeChart.jsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { ComponentItemSatu } from './ComponentItemSatu';
import { ComponentItemDua } from './ComponentItemDua';
import { ComponentItemTiga } from './ComponentItemTiga';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const defaultData = {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    datasets: [
        {
            label: 'Suhu Saat ini (°C)',
            data: [30, 45, 40, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39, 39],
            borderColor: 'rgba(75, 192, 192, 0.8)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            tension: 0.5,
        },
        {
            label: 'Suhu Max (53 °C)',
            data: Array(24).fill(53),
            borderColor: 'rgba(255, 99, 132, 0.8)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            borderDash: [10, 5],
        },
    ],
};

export const ComponentRealtimeChart = ({ mqttData }) => {
    const [chartData, setChartData] = useState(defaultData);

    useEffect(() => {
        if (mqttData !== null) {
            setChartData((prevData) => {
                const newData = [...prevData.datasets[0].data];
                newData.shift(); // Hapus data pertama
                newData.push(mqttData); // Tambahkan data baru di akhir

                return {
                    ...prevData,
                    datasets: [
                        {
                            ...prevData.datasets[0],
                            data: newData,
                        },
                        prevData.datasets[1],
                    ],
                };
            });
        }
    }, [mqttData]);

    return (




        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            minHeight: '80vh',
            padding: '20px',
            background: 'linear-gradient(to bottom, #d0f0fd, #ffffff)',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '20px',
            }}>
                <ComponentItemSatu />
                {/* <ComponentItemDua /> */}
                <ComponentItemTiga />
            </div>
            <div style={{
                width: '700px',
                height: '390px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: 'white',
            }}>
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: true, position: 'top' },
                            title: { display: true, text: 'Monitoring Suhu Otics (°C)', font: { size: 20 } },
                            tooltip: {
                                callbacks: {
                                    label: (context) => `${context.dataset.label}: ${context.raw} °C`,
                                },
                            },
                        },
                        scales: {
                            y: {
                                min: 0,
                                max: 60,
                                title: { display: true, text: 'Suhu (°C)' },
                            },
                            x: {
                                title: { display: true, text: 'Waktu (Jam)' },
                            },
                        },
                    }}
                />
            </div>
        </div>





    );
};
