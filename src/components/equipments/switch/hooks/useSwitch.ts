import { useState } from 'react';

export const useSwitch = () => {
  const [isDeviceOn, setIsDeviceOn] = useState(false);

  const toggleDevice = () => {
    setIsDeviceOn(prev => !prev);
  };

  return {
    isDeviceOn,
    toggleDevice,
  };
}; 