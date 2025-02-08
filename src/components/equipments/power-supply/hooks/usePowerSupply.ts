import { useState } from 'react';

export const usePowerSupply = () => {
  const [voltage, setVoltage] = useState(0);
  const [isDeviceOn, setIsDeviceOn] = useState(false);

  const handleVoltagePreset = (value: number) => {
    if (isDeviceOn) {
      setVoltage(value);
    }
  };

  const toggleDevice = () => {
    setIsDeviceOn(prev => !prev);
  };

  return {
    voltage,
    isDeviceOn,
    setVoltage,
    handleVoltagePreset,
    toggleDevice,
  };
}; 