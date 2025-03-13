import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner, Button, Form, Table } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import axios from 'axios';
import { Bold } from 'lucide-react';
import { FaSync, FaBolt, FaChartLine, FaArrowUp, FaMoneyBillWave, FaLeaf } from 'react-icons/fa';

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalConsumption, setTotalConsumption] = useState(0);
  const [averageDailyConsumption, setAverageDailyConsumption] = useState(0);
  const [totalShift1, setTotalShift1] = useState(0);
  const [totalShift2, setTotalShift2] = useState(0);
  const [maxShiftValue, setMaxShiftValue] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState('February');
  const [totalCost, setTotalCost] = useState(0);
  const [totalCO2, setTotalCO2] = useState(0);
  const [uniqueDays, setUniqueDays] = useState(0);

  const fetchData = async (month) => {
    setLoading(true);
    try {
      // const response = await axios.get(`http://172.27.63.180:3000/api/tb_pershift_kub/month/${month}?db=db_energy_area_compressor`);
      const response = await axios.get(`http://192.168.239.225:3000/api/tb_pershift_kub/month/${month}?db=db_energy_area_compressor`);
      // const response = await axios.get(`http://localhost:3000/api/tb_pershift_kub/month/${month}`);
      // const response = await axios.get(`http://192.168.1.10:3000/api/tb_pershift_kub/month/${month}`);
      const data = response.data;

      const groupedData = data.reduce((acc, entry) => {
        const dayKey = `${month.slice(0, 3)} ${entry.day}`;
        const existingEntry = acc.find(item => item.day === dayKey);

        if (existingEntry) {
          existingEntry[entry.shift] = Number(entry.consumption_energy) || 0;
        } else {
          acc.push({
            day: dayKey,
            shift_1: entry.shift === "shift_1" ? Number(entry.consumption_energy) || 0 : 0,
            shift_2: entry.shift === "shift_2" ? Number(entry.consumption_energy) || 0 : 0,
          });
        }
        return acc;
      }, []);

      setChartData(groupedData);
      setTotalShift1(groupedData.reduce((sum, item) => sum + item.shift_1, 0));
      setTotalShift2(groupedData.reduce((sum, item) => sum + item.shift_2, 0));



      // total kwh
      const total = Math.ceil(
        data.reduce((sum, entry) => sum + (Number(entry.consumption_energy) || 0), 0) / 1000
      );
      setTotalConsumption(total);
      // avg daily
      const uniqueDaysCount = new Set(data.map(entry => entry.day)).size;
      setUniqueDays(uniqueDaysCount);
      setAverageDailyConsumption(Math.ceil((total / uniqueDaysCount)));
      // max value
      const maxShift = Math.ceil(
        Math.max(...data.map(entry => (Number(entry.consumption_energy) || 0) / 1000))
      );
      setMaxShiftValue(maxShift);
      // Assuming the cost per kWh is 2092.94 IDR
      const costPerKWh = 2092.94;
      setTotalCost(Math.ceil(total * costPerKWh));


      // Assuming the CO2 emission factor is 0.92 kg CO2 per kWh
      const co2EmissionFactor = 0.92;
      setTotalCO2(total * co2EmissionFactor / 1000);

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedMonth);

    const interval = setInterval(() => {
      fetchData(selectedMonth);
    }, 3600000); // 10 detik

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedMonth]);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <Container fluid className="p-1">

      <Row className="mb-4">
        <Col>
          <Card className="text-center shadow-sm border border-dark">
            <Card.Body>
              <Card.Title className="text-primary">
                <FaBolt className="me-2" />
                Total Energy
              </Card.Title>
              <Card.Text className="display-6" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                {totalConsumption.toLocaleString()} kWh
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center shadow-sm border border-dark">
            <Card.Body>
              <Card.Title className="text-primary">
                <FaChartLine className="me-2" />
                Avg Daily
              </Card.Title>
              <Card.Text className="display-6" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                {averageDailyConsumption.toLocaleString()} kWh
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center shadow-sm border border-dark">
            <Card.Body>
              <Card.Title className="text-primary">
                <FaArrowUp className="me-2" />
                Max Shift Value
              </Card.Title>
              <Card.Text className="display-6" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                {maxShiftValue.toLocaleString()} kWh
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center shadow-sm border border-dark">
            <Card.Body>
              <Card.Title className="text-primary">
                <FaMoneyBillWave className="me-2" />
                Total Cost
              </Card.Title>
              <Card.Text className="display-6" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>
                Rp {totalCost.toLocaleString()}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row>
        <Col>
          <Card className="shadow-sm border border-dark">
            <Card.Body>
              <Card.Title className="text-primary d-flex justify-content-between align-items-center">
                Monthly Energy Consumption
                <Form.Select value={selectedMonth} onChange={handleMonthChange} style={{ width: '200px' }}>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </Form.Select>
                <Button variant="outline-primary" className="ms-3" onClick={() => fetchData(selectedMonth)}>
                  <FaSync />
                </Button>
              </Card.Title>
              <p style={{ textAlign: "center", color: "#34495E" }}>
                Total Shift 1: <strong>{totalShift1.toLocaleString()} Wh</strong> | Total Shift 2: <strong>{totalShift2.toLocaleString()} Wh</strong>
              </p>
              {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '300px' }}>
                  <Spinner animation="border" variant="info" />
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={270}>
                  <BarChart data={chartData} barGap={2} barCategoryGap={5} margin={{ left: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                    <XAxis dataKey="day" stroke="#34495E" />
                    <YAxis stroke="#34495E" />
                    <Tooltip contentStyle={{ backgroundColor: "#F8F9FA", borderRadius: "8px", border: "none", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)" }} />
                    <Legend verticalAlign="top" height={40} />
                    <Bar dataKey="shift_1" fill="#14c5f6" name="Shift 1" radius={[2, 2, 0, 0]}>
                      {/* <LabelList dataKey="shift_1" position="top" fill="#000000" fontSize={14} fontWeight={Bold} /> */}
                    </Bar>
                    <Bar dataKey="shift_2" fill="#e5d817" name="Shift 2" radius={[2, 2, 0, 0]}>
                      {/* <LabelList dataKey="shift_2" position="top" fill="#000000" fontSize={14} fontWeight={Bold} /> */}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card className="text-center shadow-sm border border-danger">
            <Card.Body>
              <Card.Title className="text-danger">
                <FaLeaf className="me-2" />
                Total CO2 Emissions
              </Card.Title>
              <Card.Text className="display-6" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {totalCO2.toLocaleString()} kg CO2
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center shadow-sm border border-danger">
            <Card.Body>
              <Card.Title className="text-danger">
                <FaLeaf className="me-2" />
                Avg Daily CO2 Emissions
              </Card.Title>
              <Card.Text className="display-6" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {(totalCO2 / uniqueDays).toFixed(2).toLocaleString()} kg CO2
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <Row className="mt-4">
        <Col>
          <h3 className="text-primary mb-2">CO2 Emissions Analysis</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
                <th>Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Energy Consumption</td>
                <td>{totalConsumption.toLocaleString()}</td>
                <td>Wh</td>
              </tr>
              <tr>
                <td>CO2 Emission Factor</td>
                <td>0.92</td>
                <td>kg CO2 per kWh</td>
              </tr>
              <tr>
                <td>Total CO2 Emissions</td>
                <td>{totalCO2.toLocaleString()}</td>
                <td>kg CO2</td>
              </tr>
              <tr>
                <td>Average Daily CO2 Emissions</td>
                <td>{(totalCO2 / uniqueDays).toFixed(2).toLocaleString()}</td>
                <td>kg CO2</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row> */}
    </Container>
  );
};

export default Dashboard;