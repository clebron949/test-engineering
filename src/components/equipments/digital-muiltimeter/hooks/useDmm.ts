import { useState } from 'react';
import { MeasurementMode } from '../constants/constants';

export function useDmm() {
  const [displayValue, setDisplayValue] = useState<string>("0.00 V");
  const [isDeviceOn, setIsDeviceOn] = useState<boolean>(false);

  const setMode = (mode: MeasurementMode): void => {
    if (!isDeviceOn) return;
    
    switch (mode) {
      case "Voltage (V)":
        setDisplayValue(`${(Math.random() * 10).toFixed(2)} V`);
        break;
      case "Current (A)":
        setDisplayValue(`${(Math.random() * 5).toFixed(2)} A`);
        break;
      case "Ohms (Ω)":
        setDisplayValue(`${(Math.random() * 1000).toFixed(0)} Ω`);
        break;
      default:
        setDisplayValue("0.00 V");
    }
  };

  const toggleDevice = () => {
    setIsDeviceOn(prev => !prev);
  };

  return {
    displayValue,
    isDeviceOn,
    setMode,
    toggleDevice
  };
} 