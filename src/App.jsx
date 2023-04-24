import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Header from './components/Header';
import DeviceIDInput from './components/DeviceIDInput';
import BluetoothTracker from './components/BluetoothTracker';
import DynamicCompass from './components/DynamicCompass';
import Map from './components/Map';
import './App.css';

function App() {
  const [bluetoothTracking, setBluetoothTracking] = useState(false);
  const [deviceLocation, setDeviceLocation] = useState(null);

  const handleDeviceFound = (location) => {
    console.log('App: handleDeviceFound:', location);
    setDeviceLocation(location);
  };

  return (
    <div className="App">
      <Header />
      <DeviceIDInput onDeviceFound={handleDeviceFound} />
      {deviceLocation && <Map location={deviceLocation} />}
      {bluetoothTracking && (
        <BluetoothTracker
          isEnabled={bluetoothTracking}
          onToggle={(enabled) => setBluetoothTracking(enabled)}
        />
      )}
      {bluetoothTracking && <DynamicCompass />}
    </div>
  );
}

export default App;
