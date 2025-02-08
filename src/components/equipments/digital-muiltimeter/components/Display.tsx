interface DisplayProps {
  value: string;
  isDeviceOn: boolean;
}

export function Display({ value, isDeviceOn }: DisplayProps) {
  return (
    <div className="h-[64px] bg-gray-700 p-4 rounded-md flex items-center justify-center">
      <div className={`font-mono text-4xl ${isDeviceOn ? 'text-white' : 'text-gray-600'}`}>
        {isDeviceOn ? value : ''}
      </div>
    </div>
  );
} 