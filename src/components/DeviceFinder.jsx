import React, { useState, useEffect } from 'react';
import DeviceIDInput from './DeviceIDInput';
import './DeviceFinder.css';

const DeviceFinder = ({ onDeviceFound }) => {

  const handleDeviceFound = (data) => {
    console.log('DeviceFinder: handleDeviceFound:', data);
    if (onDeviceFound) {
      onDeviceFound(data);
    }
  };

  return (
    <div className="device-finder">
      <DeviceIDInput onDeviceFound={onDeviceFound} />
    </div>
  );
};

export default DeviceFinder;
