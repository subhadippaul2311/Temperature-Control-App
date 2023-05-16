import React, { useState } from 'react';
import './Temperature.css';

const TemperatureControl = () => {
  const [temperature, setTemperature] = useState(20);

  const handleIncrement = () => {
    setTemperature(temperature + 1);
  };

  const handleDecrement = () => {
    if (temperature > 20) {
      setTemperature(temperature - 1);
    }
  };

  let backgroundColor = 'yellow';
  if (temperature > 30 && temperature <= 50) {
    backgroundColor = 'orange';
  } else if (temperature > 50) {
    backgroundColor = 'red';
  }

  return (
    <div className="mainDiv">
      <h1>Temperature Control App</h1>
      <h2 className="temp" style={{ backgroundColor }}>
        <p>{temperature}°C</p>
      </h2>
      <div className="button">
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default TemperatureControl;
