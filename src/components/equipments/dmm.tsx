import { useState } from "react";

type MeasurementMode = "Voltage (V)" | "Current (A)" | "Resistance (Ω)";

function Dmm() {
  const [displayValue, setDisplayValue] = useState<string>("0.00 V");

  const setMode = (mode: MeasurementMode): void => {
    switch (mode) {
      case "Voltage (V)":
        setDisplayValue(`${(Math.random() * 10).toFixed(2)} V`);
        break;
      case "Current (A)":
        setDisplayValue(`${(Math.random() * 5).toFixed(2)} A`);
        break;
      case "Resistance (Ω)":
        setDisplayValue(`${(Math.random() * 1000).toFixed(0)} Ω`);
        break;
      default:
        setDisplayValue("0.00 V");
    }
  };

  const buttons: MeasurementMode[] = [
    "Voltage (V)",
    "Current (A)",
    "Resistance (Ω)",
  ];

  return (
    <main className="">
      <div className="w-3xl bg-gray-200 rounded-lg p-5 relative shadow-lg">
        <p className="text-2xl text-start text-gray-700 font-medium font-mono">Digital Multimeter</p>
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <div className="w-full h-24 border border-gray-500 bg-white rounded text-4xl flex items-center justify-center my-8">
              {displayValue}
            </div>
            <div className="grid grid-cols-3 gap-x-12 gap-y-6">
              {buttons.map((mode) => (
                <button
                  key={mode}
                  className="border border-gray-600 rounded-md py-1.5 bg-white text-black cursor-pointer"
                  onClick={() => setMode(mode)}
                >
                  {mode}
                </button>
              ))}
              <button className="border border-gray-600 rounded-md py-1.5 bg-white text-black cursor-pointer">
                Single
              </button>
              <button className="border border-emerald-600 rounded-md py-1.5 bg-emerald-300 text-gray-800 cursor-pointer ">
                Continuous
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex-grow flex flex-col items-center gap-3">
              <div className="text-xl text-gray-700 font-medium font-mono">Inputs</div>
              <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="size-9 bg-red-500 rounded-full border-2 border-white"></div>
                <div className="text-xl">Hi</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-9 bg-black rounded-full border-2 border-white"></div>
                <div className="text-xl">Lo</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-9 bg-red-500 rounded-full border-2 border-white"></div>
                <div className="text-xl">A</div>
              </div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button className="border border-emerald-600 rounded-md py-1.5 px-3 bg-emerald-300 text-gray-800 cursor-pointer">
              ON
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dmm;
