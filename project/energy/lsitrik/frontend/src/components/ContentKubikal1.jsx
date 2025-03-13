import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContentKubikal1 = () => {
  const [data, setData] = useState([]);
  const [summaryData, setSummaryData] = useState({ average: 0, max: 0, total: 0, lastValue: 0 });

  const fetchData = async () => {
    try {
        const response = await axios.get('http://192.168.239.225:3000/api/last_kub?db=db_energy_area_compressor');
        // const response = await axios.get('http://172.27.63.180:3000/api/last_kub?db=db_energy_area_compressor');
        // Ambil data dari response.data.data
        const rawData = response.data?.data;

        // Pastikan data adalah array sebelum diproses
        if (!Array.isArray(rawData)) {
            console.error('Invalid data format:', response.data);
            return;
        }

        const convertedData = rawData.map(entry => ({
            ...entry,
            date_time: moment(entry.date_time).tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss'),
            value: Math.ceil(Number(entry.value))
        }));

        // Jika tidak ada data, set default summary
        if (convertedData.length === 0) {
            setData([]);
            setSummaryData({ average: 0, max: 0, total: 0, lastValue: 0 });
            return;
        }

        const chartData = convertedData.slice(0, 200);
        const values = convertedData.map(entry => entry.value).filter(Number.isFinite);

        const total = values.reduce((sum, val) => sum + val, 0);
        const max = values.length > 0 ? Math.max(...values) : 0;
        const average = values.length > 0 ? total / values.length : 0;
        const lastValue = values.length > 0 ? values[0] : 0;

        setData(chartData);
        setSummaryData({ average, max, total, lastValue });

    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
  };



  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const contractLimitData = data.map(entry => ({
    date_time: entry.date_time,
    value: 2400
  }));
  const lastData = data.length > 0 ? data[0] : null;


  return (
    <div className="container mt-2">
    {/* Last Data Display */}
    {lastData && (
      <div
        className={`alert text-center fs-4 p-2 d-flex justify-content-between align-items-center ${
          lastData.value <= 2000 ? 'alert-success' : 'alert-danger'
        }`}
      >
        <span>
          {lastData.value <= 2000 ? 'Kondisi Aman ✅' : 'WASPADA ⚠️'}
        </span>
        <span>
        <strong className="text-primary">{lastData.value} kWh</strong>, Data Terakhir : {lastData.date_time}
        </span>
      </div>
    )}



      {/* Chart Section */}
      <div className="card p-4 shadow-sm mb-4">
        <h5 className="text-center">Kubikal 1 Active Power kWh</h5>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={[...data].reverse()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date_time" 
              tickFormatter={(tick) => moment(tick).format("HH:mm")} 
            />
            <YAxis domain={[0, 2500]} /> 
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="value" 
              name="Active Power"
              stroke="#8884d8" 
              strokeWidth={2} 
              dot={false} 
            >
              {lastData && (
                <Label 
                  value={`${lastData.value} kWh`} 
                  position="top" 
                  fill="#8884d8" 
                  fontSize={12} 
                  offset={10} 
                />
              )}
            </Line>
            <Line 
              type="monotone" 
              dataKey="value"
              name="Kontrak Daya"
              data={[...contractLimitData].reverse()} 
              stroke="#ff0000" 
              strokeWidth={2} 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Table Section */}
      <div className="card p-2 shadow-sm">
        <p style={{ fontSize: "20px", textAlign:"center"}}>Kondisi Data Active Power</p>
        <div className="table-responsive">
          <table className="table table-striped table-bordered mt-1">
            <thead className="thead-dark">
              <tr>
                <th>Item</th>
                <th>Besaran</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>Kontrak Daya</td>
                <td></td>
                <td className='bg-danger text-white fw-bold' >2400 kWh</td>
              </tr> */}
              {/* {data.slice(0, 1).map((entry, index) => (
                <tr key={index}>
                  <td>Active Power</td>
                  <td>{entry.date_time}</td>
                  <td className="fw-bold">{entry.value} kWh</td>
                </tr>
              ))} */}
              <tr>
                <td>Kontrak Daya</td>

                <td className='bg-danger text-white fw-bold' >2400 kVA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContentKubikal1;
