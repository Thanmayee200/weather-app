import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);

  const getWeather = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/weather/${city}`);
      setData(res.data);
    } catch {
      alert('City not found');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Weather App</h1>
      <input value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city" />
      <button onClick={getWeather}>Get Weather</button>
      {data && (
        <div>
          <h2>{data.city}</h2>
          <p>{data.temperature} °C</p>
        </div>
      )}
    </div>
  );
}

export default App;