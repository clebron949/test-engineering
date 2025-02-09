interface VoltageButtonProps {
  voltage: number;
  isActive: boolean;
  onClick: (voltage: number) => void;
}

const VoltageButton = ({ voltage, isActive, onClick }: VoltageButtonProps) => {
  const activeClass = isActive
    ? "active:scale-95 transition-transform"
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
