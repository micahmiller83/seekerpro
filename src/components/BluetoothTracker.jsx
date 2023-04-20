import React, { useState } from 'react';
import './BluetoothTracker.css';
import DynamicCompass from './DynamicCompass';

const BluetoothTracker = ({ onBluetoothTrackingToggle }) => {
  const [trackingEnabled, setTrackingEnabled] = useState(false);

  const handleToggle = () => {
    setTrackingEnabled(!trackingEnabled);
    onBluetoothTrackingToggle(!trackingEnabled);
  };

  return (
    <div className="bluetooth-tracker">
      <button
        onClick={handleToggle}
        className={`bluetooth-tracker__button ${
          trackingEnabled ? 'bluetooth-tracker__button--enabled' : ''
        }`}
      >
        {trackingEnabled ? 'Disable Bluetooth Tracking' : 'Enable Bluetooth Tracking'}
      </button>
      {/* Add your dynamic compass component here */}
      <DynamicCompass />
    </div>
  );
};

export default BluetoothTracker;