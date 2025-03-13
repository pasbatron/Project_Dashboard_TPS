import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
  const data = [
    { name: "PG1.1", consumption: 1 },
    { name: "PG1.2", consumption: 1 },
    { name: "PG2.1", consumption: 1 },
    { name: "PG2.2", consumption: 1 },
    { name: "PG2.3", consumption: 2 },
  ];

  // Menentukan konsumsi listrik tertinggi
  const maxConsumption = Math.max(...data.map((item) => item.consumption));

  return (
    <div
      className="d-flex flex-column flex-shrink-0 text-dark bg-info bg-opacity-10"
      style={{
        width: "310px",
        height: "100vh", // Full height
        position: "fixed", // Fixed to the left side
        top: 0,
        left: 0,
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        overflowY: "auto", // Allow scrolling if content overflows
        zIndex: 1030, // Ensure it stays above other elements
      }}
    >
      <div
        className="position-sticky top-0 p-2 bg-primary bg-opacity-10 mb-3"
        style={{ zIndex: 1000 }}
      >
        <Link
          to="/"
          className="d-flex align-items-center mb-2 text-dark text-decoration-none"
        >
          <span className="fs-4 fw-bold">OTICS Energy Listrik</span>
        </Link>
        <hr className="mt-0" />
      </div>
      <ul className="nav nav-pills flex-column mb-auto p-3 pt-0">
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link text-dark d-flex align-items-center border border-dark border-1 rounded bg-info bg-opacity-25 shadow-sm p-1 m-1"
          >
            <i className="bi bi-speedometer2 me-2"></i>
            <span className="fs-5">Dashboard Energy Listrik</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/status"
            className="nav-link text-dark d-flex align-items-center border border-dark border-1 rounded bg-info bg-opacity-25 shadow-sm p-1 m-1"
          >
            <i className="bi bi-info-circle me-2"></i>
            <span className="fs-5">Status Semua Line</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/pg"
            className="nav-link text-dark d-flex align-items-center border border-dark border-1 rounded bg-info bg-opacity-25 shadow-sm p-1 m-1"
          >
            <i className="bi bi-info-circle me-2"></i>
            <span className="fs-5">Layout Distribusi Panel</span>
          </Link>
        </li>
        <hr />
        <li className="nav-item">
          <span className="nav-link text-dark d-flex align-items-center">
            <i className="bi bi-building me-2"></i>
            <span className="fs-5">Kubikal</span>
          </span>
          <div className="d-flex flex-wrap">
            <div className="p-1" style={{ width: "50%" }}>
              <Link
                to="/kubikal1"
                className="nav-link text-dark text-center p-1 border border-dark border-1 rounded bg-white shadow-sm"
              >
                <span className="fs-6">Kubikal 1</span>
              </Link>
            </div>
            <div className="p-1" style={{ width: "50%" }}>
              <Link
                to="/kubikal2"
                className="nav-link bg-danger bg-opacity-25 text-dark text-center p-1 border border-dark border-1 rounded shadow-sm "
              >
                <span className="fs-6">Kubikal 2</span>
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item mt-4">
          <div className="d-flex flex-column">
            {data.map((pg, index) => (
              <div key={index} className="d-flex align-items-center mb-2">
                <span className="fs-6 text-dark me-2" style={{ minWidth: "70px" }}>
                  <i className="bi bi-box-seam me-1"></i> {pg.name}:
                </span>
                <div className="progress flex-grow-1" style={{ height: "15px" }}>
                  <div
                    className={`progress-bar ${
                      pg.consumption === maxConsumption ? "bg-danger text-white" : "bg-info text-black"
                    }`}
                    role="progressbar"
                    style={{ width: `${pg.consumption}%` }}
                  >
                    {pg.consumption}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </li>
      </ul>
      <hr />
      <div className="d-flex justify-content-between p-3">
        <div className="">
          <a
            href="#"
            className="d-flex align-items-center text-dark text-decoration-none"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-house-door me-2"></i>
            <strong>Menu Utama</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
