import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Punten Lepat Alamat</h1>
      <p style={styles.paragraph}>
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <button onClick={goHome} style={styles.button}>
        UIH DEI A
      </button>

    </div>
  );
};



const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: "'Arial', sans-serif",
  },
  heading: {
    fontSize: '2.5rem',
    color: '#ff4d4d',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '30px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  image: {
    marginTop: '30px',
    width: '80%',
    maxWidth: '400px',
    borderRadius: '8px',
  },
};

export default NotFound;
