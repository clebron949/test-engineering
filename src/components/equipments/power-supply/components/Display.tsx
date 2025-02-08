interface DisplayProps {
  voltage: number;
  isDeviceOn: boolean;
}

export const Display = ({ voltage, isDeviceOn }: DisplayProps) => (
  <div className="flex-grow h-[60px] p-4 border border-gray-500 bg-white rounded text-4xl flex items-center justify-center">
    <div className="flex items-center justify-between w-full text-gray-700">
      <div>{isDeviceOn ? `${voltage.toFixed(1)} V` : ""}</div>
      <div>
        <div>{isDeviceOn ? "0.0 A" : ""}</div>
      </div>
    </div>
  </div>
); 