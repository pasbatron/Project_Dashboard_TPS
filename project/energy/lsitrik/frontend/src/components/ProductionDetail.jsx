import React from 'react';
import { useParams } from 'react-router-dom';

const ProductionDetail = () => {
  const { lineName } = useParams(); // Ambil parameter dari URL

  return (
    <div>
      <h1>Detail Produksi: {lineName}</h1>
      {/* Tampilkan detail produksi berdasarkan lineName */}
      <p>Informasi detail untuk line produksi {lineName} akan ditampilkan di sini.</p>
    </div>
  );
};

export default ProductionDetail;