// @ts-ignore
import { Knob } from "react-rotary-knob";
import VoltageButton from './components/VoltageButton';
import { Display } from './components/Display';
import { TerminalConnectors } from './components/TerminalConnectors';
import { usePowerSupply } from './hooks/usePowerSupply';
import OnButton from '../shared-components/OnButton';

const VOLTAGE_PRESETS = [0, 5, 10] as const;
const VOLTAGE_RANGE = {
  min: 0,
  max: 50,
  step: 1,
} as const;

const PowerSupply = () => {
  const {
    voltage,
    isDeviceOn,
    setVoltage,
    handleVoltagePreset,
    toggleDevice,
  } = usePowerSupply();

  return (
    <main>
      <div className="w-[400px] h-[300px] bg-gray-200 rounded-lg p-5 relative shadow-lg flex flex-col justify-between">
        <h1 className="text-xl text-start text-gray-700 font-medium font-mono">
          Voltage Power Supply
        </h1>
        
        <div className="flex items-center justify-center gap-6">
          <Display voltage={voltage} isDeviceOn={isDeviceOn} />
          <div>
            <Knob
              value={voltage}
              onChange={setVoltage}
              min={VOLTAGE_RANGE.min}
              max={VOLTAGE_RANGE.max}
              step={VOLTAGE_RANGE.step}
            />
          </div>
        </div>

        <div>
          <div className="font-mono font-medium text-sm">Functions</div>
          <div className="flex items-center gap-6 my-2">
            {VOLTAGE_PRESETS.map((preset) => (
              <VoltageButton
                key={preset}
                voltage={preset}
                isActive={isDeviceOn}
                onClick={handleVoltagePreset}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="flex-grow">
              <TerminalConnectors />
          </div>
          <div className="flex items-end">
            <OnButton onClick={toggleDevice} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PowerSupply;
