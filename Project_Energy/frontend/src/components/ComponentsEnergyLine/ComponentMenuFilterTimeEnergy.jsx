import React from 'react'
import naisImage from '../../assets/images/nais_otics.png';


const MenuFilterTime = () => {
  return (
    <>
    <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            padding: "10px 10px",
            marginTop: "0px",
            marginBottom: "5px",
            borderRadius: "2px",
            borderBottom: "1px solid",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
    >     
        <p
            style={{
                fontSize: "25px",
                color: "#4d2870",
                textShadow: "1px 1px 1px rgba(0, 0, 0, 0.2)",
                fontFamily: "'Roboto', sans-serif",
                fontWeight: "bold",
                margin: 0,
                
            }}
        >
             Monitoring Energy Common Rail 12
        </p>
            <div>
                <button
                style={{
                    margin: "1px 1px 1px 5px",
                    padding: "10px",
                    fontWeight: "bold",
                    backgroundColor: "#4d2870",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
                >
                Per Shift
                </button>
                <button
                style={{
                    margin: "1px 1px 1px 5px",
                    padding: "10px",
                    fontWeight: "bold",
                    backgroundColor: "#4d2870",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
                >
                Per Minggu
                </button>
                <button
                style={{
                    margin: "1px 1px 1px 5px",
                    padding: "10px",
                    fontWeight: "bold",
                    backgroundColor: "#4d2870",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
                >
                Per Bulan
                </button>
                <button
                style={{
                    margin: "1px 1px 1px 5px",
                    padding: "10px",
                    fontWeight: "bold",
                    backgroundColor: "#4d2870",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
                >
                Per Tahun
                </button>
            </div>
        </div>
    </>
  );
};

export default MenuFilterTime;
