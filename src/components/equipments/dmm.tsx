import { useState } from "react";

type MeasurementMode = "Voltage" | "Current" | "Resistance";

const Multimeter: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>("0.00 V");

  const setMode = (mode: MeasurementMode): void => {
    switch (mode) {
      case "Voltage":
        setDisplayValue(`${(Math.random() * 10).toFixed(2)} V`);
        break;
      case "Current":
        setDisplayValue(`${(Math.random() * 5).toFixed(2)} A`);
        break;
      case "Resistance":
        setDisplayValue(`${(Math.random() * 1000).toFixed(0)} Ω`);
        break;
      default:
        setDisplayValue("0.00 V");
    }
  };

  const buttons: MeasurementMode[] = ["Voltage", "Current", "Resistance"];

  return (
    <main className="flex justify-center items-center">
      <div className="w-64 h-96 bg-black rounded-lg p-5 text-white text-center relative">
        <div className="w-full h-12 bg-green-500 text-xl flex items-center justify-center mb-4">
          {displayValue}
        </div>
        <div className="w-20 h-20 bg-gray-500 rounded-full mx-auto mb-4"></div>
        <div className="flex flex-col gap-2">
          {buttons.map((mode) => (
            <button
              key={mode}
              className="p-2 bg-yellow-400 text-black cursor-pointer"
              onClick={() => setMode(mode)}
            >
              {mode}
            </button>
          ))}
        </div>
        {/* Ports for terminals */}
        <div className="absolute bottom-2 left-10 w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
        <div className="absolute bottom-2 right-10 w-6 h-6 bg-black rounded-full border-2 border-white"></div>
        <p className="absolute bottom-0 left-8 text-xs text-red-500">+</p>
        <p className="absolute bottom-0 right-8 text-xs text-white">-</p>
      </div>
    </main>
  );
};

export default Multimeter;
