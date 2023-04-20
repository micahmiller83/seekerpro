import React, { useState } from 'react';
import { ref, onValue } from 'firebase/database';
import database from '../firebase';
import './DeviceIDInput.css';

const DeviceIDInput = ({ onDeviceFound }) => {
  const [inputValue, setInputValue] = useState('');
  const [warningVisible, setWarningVisible] = useState(false);

  const handleInputChange = (event) => {
    const rawValue = event.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
    setInputValue(rawValue.slice(0, 9));
  
    const formattedValue = rawValue.replace(/.{3}/g, (match, index) => (index < 6 ? match + '-' : match));
    
    if (formattedValue.length === 11) {
      setWarningVisible(!isValidID(formattedValue));
    } else {
      setWarningVisible(false);
    }
  };

  const isValidID = (value) => {
    return /^([A-Z0-9]{3}-){2}[A-Z0-9]{3}$/.test(value);
  };  

  const formattedValue = () => {
    return inputValue.replace(/.{3}/g, (match, index) => (index < 6 ? match + '-' : match));
  };

  const findDevice = (deviceID) => {
    const deviceRef = ref(database, `deviceIDs/${deviceID}`);

    onValue(deviceRef, (snapshot) => {
      if (snapshot.exists()) {
        const deviceData = snapshot.val();
        console.log(`Device found:`, deviceData);
        onDeviceFound(deviceData);
      } else {
        console.log('Device not found');
        // Handle the case when the device is not found
      }
    });
  };  
  
  return (
    <div className="device-id-input">
      <input
        type="text"
        value={formattedValue()}
        onChange={handleInputChange}
        maxLength="11"
        className="device-id-input__field"
        placeholder="XXX-XXX-XXX"
      />
      {warningVisible && (
        <div className="device-id-input__warning">
          Please enter a valid ID (XXX-XXX-XXX format with uppercase letters and numbers only).
        </div>
      )}
      <button className="device-id-input__button" onClick={() => findDevice(formattedValue())}>
        Find Device
      </button>
    </div>
  );
};

export default DeviceIDInput;

