import { expect, test } from 'vitest'
import { usePowerSupply } from '../hooks/usePowerSupply'
import { renderHook, act } from '@testing-library/react'

test('usePowerSupply hook test default values', () => {
  const { result } = renderHook(() => usePowerSupply());
  expect(result.current.voltage).toBe(0);
  expect(result.current.isDeviceOn).toBe(false);
  expect(result.current.setVoltage).toBeDefined();
  expect(result.current.handleVoltagePreset).toBeDefined();
  expect(result.current.toggleDevice).toBeDefined();
})

test('turn on the power supply', () => {
  const { result } = renderHook(() => usePowerSupply());
  
  // Initially the device should be off
  expect(result.current.isDeviceOn).toBe(false);
  
  // Turn on the device
  act(() => {
    result.current.toggleDevice();
  });
  
  // Device should now be on
  expect(result.current.isDeviceOn).toBe(true);
  
  // Turn off the device
  act(() => {
    result.current.toggleDevice();
  });
  
  // Device should be off again
  expect(result.current.isDeviceOn).toBe(false);
});

test('handleVoltagePreset should only work when device is on', () => {
  const { result } = renderHook(() => usePowerSupply());
  const presetValues = [0, 5, 10];
  
  // Test presets when device is off
  act(() => {
    result.current.handleVoltagePreset(5);
  });
  expect(result.current.voltage).toBe(0); // Should remain 0 when device is off
  
  // Turn on the device
  act(() => {
    result.current.toggleDevice();
  });
  
  // Test different presets when device is on
  for (const voltage of presetValues) {
    act(() => {
      result.current.handleVoltagePreset(voltage);
    });
    expect(result.current.voltage).toBe(voltage);
  }
});