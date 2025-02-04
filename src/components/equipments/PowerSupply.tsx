// @ts-ignore
import { Knob } from "react-rotary-knob";
import { useState } from "react";

const PowerSupply = () => {
  const [value, setValue] = useState(0);

  const handleChange = (value: number) => {
    setValue(value);
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
              <div>
                {value.toFixed(1)} <span className="">V</span>
              </div>
              <div>
                0.0 <span className="">A</span>
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
            <button className="border border-gray-600 rounded-md py-1 px-3 bg-white text-black cursor-pointer">
              0 V
            </button>
            <button className="border border-gray-600 rounded-md py-1 px-3 bg-white text-black cursor-pointer">
              5 V
            </button>
            <button className="border border-gray-600 rounded-md py-1 px-3 bg-white text-black cursor-pointer">
              10 V
            </button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="ms-8 col-span-2 flex justify-center items-center gap-12">
                <div className="size-12 bg-red-500 rounded-full border-2 border-white flex items-center justify-center"><span className="text-white text-xl">+</span></div>
                <div className="size-12 bg-black rounded-full border-2 border-white flex items-center justify-center"><span className="text-white text-xl">-</span></div>
            </div>
            <div className="col-span-1 flex items-center justify-end">
            <button className="border border-gray-600 rounded-md py-1 px-3 bg-white text-black cursor-pointer">
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
