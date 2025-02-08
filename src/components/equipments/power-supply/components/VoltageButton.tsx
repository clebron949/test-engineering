interface VoltageButtonProps {
  voltage: number;
  isActive: boolean;
  onClick: (voltage: number) => void;
}

const VoltageButton = ({ voltage, isActive, onClick }: VoltageButtonProps) => {
  const activeClass = isActive
    ? "active:bg-amber-200 transition-colors duration-150"
    : "";
  return (
    <button
      className={`border border-gray-600 rounded-md py-1 px-3 bg-white text-black cursor-pointer ${activeClass}`}
      onClick={() => onClick(voltage)}
    >
      {voltage} V
    </button>
  );
};

export default VoltageButton;
