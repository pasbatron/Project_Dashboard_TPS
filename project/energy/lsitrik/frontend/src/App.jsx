import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import StatusAllLineProduction from './components/StatusAllLineProduction';
import ContentKubikal1 from './components/ContentKubikal1';
import ProductionDetail from './components/ProductionDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='kubikal1' element={<ContentKubikal1 />} />
          <Route path='kubikal2' element={<div className={`alert text-center fw-bold fs-4 p-0 bg-warning text-black`}>Dalam Proses Pengembangan Dan Perbaikan Sistem</div>} />
          <Route path="status" element={<StatusAllLineProduction />} />
          <Route path="/production/:lineName" element={<ProductionDetail />} />



          <Route path="pg" element={<div className={`alert text-center fw-bold fs-4 p-0 bg-warning text-black`}>Dalam Proses Pengembangan Dan Perbaikan Sistem</div>} />
          <Route path="pg1" element={<div className={`alert text-center fw-bold fs-4 p-0 bg-warning text-black`}>Dalam Proses Pengembangan Dan Perbaikan Sistem</div>} />
          <Route path="pg2" element={<div className={`alert text-center fw-bold fs-4 p-0 bg-warning text-black`}>Dalam Proses Pengembangan Dan Perbaikan Sistem</div>} />
          <Route path="pg3" element={<div className={`alert text-center fw-bold fs-4 p-0 bg-warning text-black`}>Dalam Proses Pengembangan Dan Perbaikan Sistem</div>} />
          <Route path="line2" element={<div className={`alert text-center fw-bold fs-4 p-0 bg-warning text-black`}>Dalam Proses Pengembangan Dan Perbaikan Sistem</div>} />
          <Route path="line3" element={<div className={`alert text-center fw-bold fs-4 p-0 bg-warning text-black`}>Dalam Proses Pengembangan Dan Perbaikan Sistem</div>} />
          <Route path="line4" element={<div className={`alert text-center fw-bold fs-4 p-0 bg-warning text-black`}>Dalam Proses Pengembangan Dan Perbaikan Sistem</div>} />
          <Route path="line5" element={<div className={`alert text-center fw-bold fs-4 p-0 bg-warning text-black`}>Dalam Proses Pengembangan Dan Perbaikan Sistem</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;