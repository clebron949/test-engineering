import { useState, useEffect } from "react";

interface SwitchButtonProps {
  isDeviceOn: boolean;
  isOpen: boolean;
  onClick: () => void;
}

const DEFAULT_CSS_CLASS =
  "border border-gray-600 rounded-md p-8 bg-white text-black cursor-pointer active:bg-gray-200 active:scale-95 transition-transform";

const SwitchButton = ({ isDeviceOn, isOpen, onClick }: SwitchButtonProps) => {
  const [buttonClass, setButtonClass] = useState(DEFAULT_CSS_CLASS);

  useEffect(() => {
    if (isDeviceOn) {
      if (isOpen) {
        updateButtonClass("bg-green-500", true, true);
      } else {
        updateButtonClass("bg-white", true, true);
      }
    } else {
      updateButtonClass("bg-gray-200", false, false);
    }
  }, [isOpen, isDeviceOn]);

  function updateButtonClass(
    backgroundColor: string,
    isCursor: boolean,
    isAnimationActive: boolean
  ): void {
    setButtonClass(
      [
        "border border-gray-600 rounded-md p-8 text-black",
        backgroundColor,
        isCursor ? "cursor-pointer" : "cursor-not-allowed",
        isAnimationActive
          ? "active:bg-gray-200 active:scale-95 transition-transform"
          : "",
      ]
        .filter(Boolean)
        .join(" ")
    );
  }

  return (
    <>
      <button className={buttonClass} onClick={onClick} disabled={!isDeviceOn}>
        {isOpen ? "Open" : "Closed"}
      </button>
    </>
  );
};

export default SwitchButton;
