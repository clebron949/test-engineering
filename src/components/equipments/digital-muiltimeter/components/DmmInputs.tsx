export function DmmInputs() {
  return (
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
  );
} 