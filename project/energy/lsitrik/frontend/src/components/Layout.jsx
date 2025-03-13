import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4" style={{marginLeft:'310px'}}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;