const Switch = () => {
  return (
    <div>
      <div className="w-96 h-[300px] bg-gray-200 rounded-lg p-5 relative shadow-lg flex flex-col justify-between">
        <p className="text-2xl text-center text-gray-700 font-medium font-mono">
          Switch
        </p>
        <div className="flex items-center justify-between">
          <div className="size-12 bg-white rounded-full border-2 border-gray-500"></div>
          <div className="size-12 bg-white rounded-full border-2 border-gray-500"></div>
        </div>
        <div className="flex items-center justify-end">
          <button className="border border-gray-600 rounded-md py-1 px-3 bg-white text-black cursor-pointer">
            ON
          </button>
        </div>
      </div>
    </div>
  );
};

export default Switch;
