import { useState } from 'react';

export const useSwitch = () => {
  const [isDeviceOn, setIsDeviceOn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDevice = () => {
    setIsDeviceOn(prev => !prev);
  };

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  return {
    isDeviceOn,
    toggleDevice,
    isOpen,
    toggleOpen,
  };
}; 