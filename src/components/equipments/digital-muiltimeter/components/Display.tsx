interface DisplayProps {
  value: string;
  isDeviceOn: boolean;
}

export function Display({ value, isDeviceOn }: DisplayProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-md">
      <div className={`font-mono text-4xl ${isDeviceOn ? 'text-green-500' : 'text-gray-600'}`}>
        {isDeviceOn ? value : '----'}
      </div>
    </div>
  );
} 