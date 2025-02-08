import { Display } from "./components/Display";
import { DmmInputs } from "./components/DmmInputs";
import OnButton from "../shared-components/OnButton";
import { useDmm } from "./hooks/useDmm";
import type { MeasurementMode } from "./constants/constants";

function Dmm() {
  const { displayValue, isDeviceOn, setMode, toggleDevice } = useDmm();

  const buttons: MeasurementMode[] = ["Voltage (V)", "Current (A)", "Ohms (Ω)"];

  return (
    <div className="">
      <div className="w-[650px] h-[300px] bg-gray-200 rounded-lg p-5 relative shadow-lg">
        <div className="h-full grid grid-cols-3">
          <div className="h-full col-span-2 flex flex-col justify-between">
            <h1 className="text-2xl text-start text-gray-700 font-medium font-mono">
              Digital Multimeter
            </h1>
            <Display value={displayValue} isDeviceOn={isDeviceOn} />
            <div className="grid grid-cols-3 gap-x-12 gap-y-6">
              {buttons.map((mode) => (
                <button
                  key={mode}
                  className="border border-gray-600 rounded-md py-1.5 bg-white text-black cursor-pointer"
                  onClick={() => setMode(mode)}
                  disabled={!isDeviceOn}
                >
                  {mode}
                </button>
              ))}
              <button
                className="border border-gray-600 rounded-md py-1.5 bg-white text-black cursor-pointer"
                disabled={!isDeviceOn}
              >
                Single
              </button>
              <button
                className="border border-emerald-600 rounded-md py-1.5 bg-emerald-300 text-gray-800 cursor-pointer"
                disabled={!isDeviceOn}
              >
                Continuous
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <DmmInputs />
            <div className="flex items-center justify-end">
              <OnButton onClick={toggleDevice} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dmm;
