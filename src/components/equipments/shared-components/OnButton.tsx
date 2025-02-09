import { useState } from "react";

interface OnButtonProps {
  onClick: () => void;
}

const OnButton = ({ onClick }: OnButtonProps) => {
    const offClass = "border-gray-600 bg-white";
    const onClass = "border-emerald-600 bg-emerald-300";
    const [statusClass, setStatusClass] = useState<string>(offClass);

    const toggleButton = () => {
        setStatusClass(prev => prev === offClass ? onClass : offClass);
        onClick();
    }

  return (
    <button
      onClick={toggleButton}
      className={`border ${statusClass} rounded-md py-1 px-3 text-black cursor-pointer active:scale-95 transition-transform`}
    >
      ON
    </button>
  );
};

export default OnButton;
