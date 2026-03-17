import React from 'react';
import axios from 'axios';
import './WeatherApplication.css'
function Weather() {
  const [Data, setData] = React.useState(''); 
  const [WData, setWData] = React.useState(null); 

  const HandleClick = () => {
    const apiKey = '2fc7d89c27d54f68aba124124250504';
   
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${Data}&aqi=no`)
      .then((res) => {
        console.log(res.data);
        setWData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
    <nav className="glass-nav">
  <div className="nav-container">
    <div className="logo">
      <span className="brand-icon">☁️</span>
      <span className="brand-name">SKYCAST</span>
    </div>
    
    <div className="nav-date">
      {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
    </div>
  </div>
</nav>
<div className="main-wrapper">
  <label style={{marginBottom: '10px', opacity: 0.8}}>Search Global Weather</label>
  <input
    type="text"
    className="city-input"
    placeholder="e.g. New York..."
    onChange={(e) => setData(e.target.value)}
  />
  <button className="submit-btn" onClick={HandleClick}>
    Get Report
  </button>

  {WData && (
    <div id="weather-info">
      <h3>{WData.location.name}, {WData.location.country}</h3>
      <div className="temp-text">{WData.current.temp_c}°C</div>
      
      <div className="weather-detail">
        <span>Condition</span>
        <strong>{WData.current.condition.text}</strong>
      </div>
      <div className="weather-detail">
        <span>Humidity</span>
        <strong>{WData.current.humidity}%</strong>
      </div>
      <div className="weather-detail">
        <span>Wind Speed</span>
        <strong>{WData.current.wind_kph} km/h</strong>
      </div>
    </div>
  )}
</div>
    </>
  );
}

export default Weather;
 
