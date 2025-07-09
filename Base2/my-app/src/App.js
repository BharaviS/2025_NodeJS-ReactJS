import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('/api/message')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage("Error: " + err.message));
  }, []);

  return (
    <body style={{ backgroundColor: "#282c34", color: "white", padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React + Node.js Connection</h1>
        <p>{message}</p>
      </div>
    </body>
  );
}

export default App;
