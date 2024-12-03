import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ComponentKubikalList = () => {
    const [items, setItems] = useState([]); // Data dari API
    const [totalEnergy, setTotalEnergy] = useState(0); // Total energi (kWh)
    const [co2Reduction, setCo2Reduction] = useState(0); // Total pengurangan CO₂
    const [chartData, setChartData] = useState({}); // Data untuk grafik

    const co2ConversionFactor = 0.233; // Konversi CO₂: 1 kWh = 0.233 kg CO₂
    const maxDisplay = 5; // Batas maksimal data ditampilkan

    useEffect(() => {
        fetchData();
    }, []);

    // Fetch data dari API
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/energy");
            if (Array.isArray(response.data) && response.data[0]?.payload?.data) {
                const data = response.data[0].payload.data;
                setItems(data);

                // Hitung total energi
                const totalEnergyConsumption = data.reduce((sum, item) => sum + parseFloat(item.value_item), 0);
                setTotalEnergy(totalEnergyConsumption);

                // Hitung pengurangan CO₂
                const co2ReductionValue = totalEnergyConsumption * co2ConversionFactor;
                setCo2Reduction(co2ReductionValue);

                // Siapkan data untuk grafik
                generateChartData(data);
            } else {
                console.error("Invalid response structure:", response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Membuat data untuk grafik
    const generateChartData = (data) => {
        const labels = data.slice(0, maxDisplay).map((item) => item.name_item);
        const values = data.slice(0, maxDisplay).map((item) => parseFloat(item.value_item));

        setChartData({
            labels: labels,
            datasets: [
                {
                    label: "Konsumsi Energi (kWh)",
                    data: values,
                    backgroundColor: values.map(
                        (value, index) =>
                            `rgba(${75 + index * 10}, ${192 - index * 10}, ${192 + index * 5}, 0.6)`
                    ),
                    borderColor: values.map(
                        (value, index) =>
                            `rgba(${75 + index * 10}, ${192 - index * 10}, ${192 + index * 5}, 1)`
                    ),
                    borderWidth: 2,
                },
            ],
        });
    };

    // Opsi konfigurasi tambahan untuk mempercantik chart
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    font: { size: 14, weight: "bold" },
                    color: "#333",
                },
            },
            tooltip: {
                enabled: true,
                backgroundColor: "#fff",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
                titleColor: "#333",
                bodyColor: "#666",
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { font: { size: 12 }, color: "#555" },
            },
            y: {
                grid: { color: "rgba(200, 200, 200, 0.3)", borderDash: [5, 5] },
                ticks: { font: { size: 12 }, color: "#555" },
            },
        },
        animation: { duration: 1500, easing: "easeInOutBounce" },
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Energy Storage List</h1>

            {/* Tabel Data */}
            <table border="1" cellPadding="8" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Item</th>
                        <th>Nilai (kWh)</th>
                        <th>Unit</th>
                        <th>Waktu Dibuat</th>
                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 ? (
                        items.slice(0, maxDisplay).map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name_item}</td>
                                <td>{item.value_item}</td>
                                <td>{item.unit}</td>
                                <td>{item.formatted_created}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }}>
                                Tidak ada data.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Summary */}
            <div style={{ marginTop: "20px" }}>
                <h2>Summary</h2>
                <p><strong>Total Energy:</strong> {totalEnergy.toFixed(2)} kWh</p>
                <p><strong>Total CO₂ Reduction:</strong> {co2Reduction.toFixed(2)} kg</p>
                <p>
                    <strong>Detail Perhitungan:</strong><br />
                    Total Energi (kWh) × Faktor Konversi CO₂ (0.233) = {co2Reduction.toFixed(2)} kg
                </p>
            </div>

            {/* Grafik */}
            <h2>Grafik Konsumsi Energi</h2>
            {chartData.labels && chartData.labels.length > 0 ? (
                <div style={{ width: "80%", margin: "20px auto" }}>
                    <Bar data={chartData} options={chartOptions} />
                </div>
            ) : (
                <p>Data grafik tidak tersedia.</p>
            )}
        </div>
    );
};

export default ComponentKubikalList;
