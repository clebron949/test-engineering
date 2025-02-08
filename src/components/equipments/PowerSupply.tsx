// @ts-ignore
import { Knob } from "react-rotary-knob";
import { useState } from "react";

const PowerSupply = () => {
  const defaultIsDeviceOnCssClass = "border-gray-600 bg-white";

  const [value, setValue] = useState(0);
  const [isDeviceOnValue, setIsDeviceOnValue] = useState(false);
  const [isDeviceOnCssClass, setIsDeviceOnCssClass] = useState(
    defaultIsDeviceOnCssClass,
  );

  const handleChange = (value: number) => {
    setValue(value);
  };

  const setVoltageHandle = (value: number) => {
    handleChange(value);
  };

  const updateDeviceStatus = () => {
    if (isDeviceOnValue) {
      setIsDeviceOnValue(false);
      setIsDeviceOnCssClass(defaultIsDeviceOnCssClass);
    } else {
      setIsDeviceOnValue(true);
      setIsDeviceOnCssClass("border-emerald-600 bg-emerald-300");
    }
  };

  return (
    <main className="">
      <div className="w-96 bg-gray-200 rounded-lg p-5 relative shadow-lg">
        <p className="text-2xl text-center text-gray-700 font-medium font-mono">
          Voltage Power Supply
        </p>
        <div className="flex items-center justify-center gap-6 my-4">
          <div className="w-full h-20 border border-gray-500 bg-white rounded text-4xl flex items-center justify-center">
            <div className="flex items-center justify-between w-full px-6">
              <div>{isDeviceOnValue ? `${value.toFixed(1)} V` : ""}</div>
              <div>
                <div>{isDeviceOnValue ? "0.0 A" : ""}</div>
              </div>
            </div>
          </div>
          <div className="">
            <Knob
              value={value}
              onChange={handleChange}
              min={0}
              max={50}
              step={1}
            />
          </div>
        </div>
        <div>
          <div className="font-mono font-medium text-sm">Functions</div>
          <div className="flex items-center gap-6 my-2">
            <button
              className="border border-gray-600 rounded-md py-1 px-3 bg-white text-black cursor-pointer"
              onClick={() => setVoltageHandle(0)}
            >
              0 V
            </button>
            <button
              className="border border-gray-600 rounded-md py-1 px-3 bg-white text-black cursor-pointer"
              onClick={() => setVoltageHandle(5)}
            >
              5 V
            </button>
            <button
              className="border border-gray-600 rounded-md py-1 px-3 bg-white text-black cursor-pointer"
              onClick={() => setVoltageHandle(10)}
            >
              10 V
            </button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="ms-8 col-span-2 flex justify-center items-center gap-12">
              <div className="size-12 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xl">+</span>
              </div>
              <div className="size-12 bg-black rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xl">-</span>
              </div>
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <button
                onClick={updateDeviceStatus}
                className={`border ${isDeviceOnCssClass} rounded-md py-1 px-3 text-black cursor-pointer`}
              >
                ON
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PowerSupply;
