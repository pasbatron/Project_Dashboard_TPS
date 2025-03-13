import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const pgGroups = {
  "Production Group 1.1": [
    { name: 'Retainer', db: 'db_retainer' },
    { name: 'Roller Arm', db: 'db_roller_arm' },
    { name: 'Balance Shaft 1', db: 'db_balance_shaft_1' },
    { name: 'Balance Shaft 2', db: 'db_balance_shaft_2' },
    { name: 'Connector', db: 'db_energy_connector' },
    { name: 'HLA', db: 'db_energy_hla' },
  ],
  "Production Group 2.1": [
    { name: 'Common Rail 4', db: 'db_common_rail_4' },
    { name: 'Common Rail 6', db: 'db_common_rail_6' },
    { name: 'Common Rail 9', db: 'db_common_rail_9' },
    { name: 'Common Rail 10', db: 'db_common_rail_10' },
    { name: 'Common Rail 11', db: 'db_common_rail_11' },
    { name: 'Common Rail 12', db: 'db_common_rail_12' }
  ],
  "Production Group 2.2": [
    { name: 'Common Rail 1', db: 'db_common_rail_1' },
    { name: 'Common Rail 2', db: 'db_common_rail_2' },
    { name: 'Common Rail 3', db: 'db_common_rail_3' },
    { name: 'Common Rail 5', db: 'db_common_rail_5' },
    { name: 'Common Rail 7', db: 'db_common_rail_7' },
    { name: 'Common Rail 8', db: 'db_common_rail_8' }
  ],
  "Production Group 2.3": [
    { name: 'Cam housing A dan B', db: 'db_camphousing_ab' },
    { name: 'Cam housing C dan D', db: 'db_camphousing_cd' },
    { name: 'Cam housing E dan F', db: 'db_camphousing_ef' },
    { name: 'Cam housing Assy A', db: 'db_camphousing_saa' },
    { name: 'Cam housing Assy B', db: 'db_camphousing_sab' },
    { name: 'Cam housing Assy C', db: 'db_camphousing_sac' },
  ],
  "Panel Facility": [
    { name: 'Lighting LPF3', db: 'db_energy_lpf3' },
    { name: 'QGate-Cutting Tools', db: 'db_energy_qg_ct' },
    { name: 'Lighting MTC Room', db: 'db_energy_lp_mtcr' },
    { name: 'Lighting Office LT 2', db: 'db_energy_lp_lt_2' },
    { name: 'Lighting F 2', db: 'db_energy_lp_f_2' },
    { name: 'QAD', db: 'db_energy_qad' },
    { name: 'Obeya', db: 'db_energy_obeya' },
    { name: 'TPS', db: 'db_energy_tps' },
    { name: 'Security', db: 'db_energy_security' },
    { name: 'Workshop Utility', db: 'db_energy_w_utility' }
  ]
};

const StatusAllLineProduction = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

  const fetchData = async () => {
    let allData = {};
    for (const [pg, lines] of Object.entries(pgGroups)) {
      const fetchedData = await Promise.all(
        (Array.isArray(lines) ? lines : Object.values(lines).flat()).map(async (line) => {
          try {
            const [response200, response220] = await Promise.all([
              axios.get(`http://192.168.239.225:3000/api/actual_total_kwh_panel/tb_total_kwh_pm200?db=${line.db}`),
              axios.get(`http://192.168.239.225:3000/api/actual_total_kwh_panel/tb_total_kwh_pm220?db=${line.db}`),
            ]);
            const value200 = Math.round((parseInt(response200.data?.[0]?.value) || 0));
            const value220 = Math.round((parseInt(response220.data?.[0]?.value) || 0));
            const totalKwh = value200 + value220;
            const status = totalKwh > 0 ? 'Active' : 'Inactive';
            return { name: line.name, status, value200, value220, totalKwh };
          } catch (error) {
            console.error(`Error fetching data for ${line.name}:`, error);
            return { name: line.name, status: 'Inactive', value200: 0, value220: 0, totalKwh: 0 };
          }
        })
      );

      allData[pg] = fetchedData;
    }
    setData(allData);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (lineName) => {
    navigate(`/production/${lineName}`); // Navigasi ke halaman detail produksi
  };

  return (
    <Container fluid className="p-1">
      <Row className='mt-0'>
        <Col>
          <h4><u>Data Total kWh Panel Distribusi</u></h4>
          <p>Note: kWh total</p>
        </Col>
      </Row>

      {Object.entries(data).map(([pg, entries]) => (
        <div key={pg}>
          <h5 className="mt-3 border border-dark border-1 rounded p-1 ">{pg}</h5>
          <Row>
            {entries.map((entry, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} xl={3} className="mb-4">
                <Card
                  className={`h-85 ${entry.status === 'Active' ? 'bg-info bg-opacity-25' : 'bg-danger bg-opacity-25'}`}
                  onClick={() => handleCardClick(entry.name)} // Tambahkan onClick di sini
                  style={{ cursor: 'pointer' }} // Ubah cursor menjadi pointer
                >
                  <Card.Body>
                    <Card.Title className="text-primary text-center" style={{ fontSize: '1.2rem' }}>
                      {entry.name}{' '}
                      {entry.status === 'Active' ? <FaCheckCircle className="text-success" /> : <FaTimesCircle className="text-danger" />}
                    </Card.Title>
                    <Card.Text className="text-muted" style={{ fontSize: '0.875rem' }}>
                      Status:{' '}
                      <span className={entry.status === 'Active' ? 'text-success' : 'text-danger'}>
                        {entry.status === 'Active' ? 'Activated' : 'Deactivated'}
                      </span>
                    </Card.Text>
                    <Card.Text className="display-6" style={{ fontSize: '1rem' }}>
                      PM220: <strong>{entry.value220.toLocaleString()} Wh</strong>
                    </Card.Text>
                    <Card.Text className="display-6" style={{ fontSize: '1rem' }}>
                      PM200: <strong> {entry.value200.toLocaleString()} Wh</strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default StatusAllLineProduction;