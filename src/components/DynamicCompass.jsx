import React from 'react';
import './DynamicCompass.css';

const DynamicCompass = ({ angle }) => {
  const compassStyle = {
    transform: `rotate(${angle}deg)`,
  };

  return (
    <div className="dynamic-compass">
      <div className="dynamic-compass__container">
        <div className="dynamic-compass__needle" style={compassStyle}></div>
      </div>
      <div className="dynamic-compass__direction">Direction: {angle}°</div>
    </div>
  );
};

export default DynamicCompass;
