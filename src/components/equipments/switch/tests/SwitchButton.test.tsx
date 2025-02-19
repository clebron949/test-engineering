import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import SwitchButton from '../components/SwitchButton';

describe('SwitchButton', () => {
  test('should have green background when device is on and switch is open', () => {
    render(
      <SwitchButton 
        isDeviceOn={true}
        isOpen={true}
        onClick={() => {}}
      />
    );
    const button = screen.getByRole("button");
    expect(button.className).toContain("bg-green-500");
  });

  test('should have white background when device is on and switch is closed', () => {
    render(
      <SwitchButton 
        isDeviceOn={true}
        isOpen={false}
        onClick={() => {}}
      />
    );
    const button = screen.getByRole("button");
    expect(button.className).toContain("bg-white");
  });

  test('should have gray background when device is off', () => {
    render(
      <SwitchButton 
        isDeviceOn={false}
        isOpen={false}
        onClick={() => {}}
      />
    );
    const button = screen.getByRole("button");
    expect(button.className).toContain("bg-gray-200");
  });
});
