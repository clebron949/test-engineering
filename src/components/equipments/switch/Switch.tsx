import { useSwitch } from "./hooks/useSwitch";
import OnButton from "../shared-components/OnButton";
import SwitchButton from "./components/SwitchButton";

const Switch = () => {
  const { isDeviceOn, toggleDevice, isOpen, toggleOpen } = useSwitch();

  return (
    <div>
      <div className="w-96 h-[300px] bg-gray-200 rounded-lg p-5 relative shadow-lg flex flex-col justify-between">
        <p className="text-2xl text-center text-gray-700 font-medium font-mono">
          Switch
        </p>
        <div className="flex items-center justify-between">
          <div className="size-12 bg-white rounded-full border-2 border-gray-500"></div>
          <SwitchButton
            isDeviceOn={isDeviceOn}
            isOpen={isOpen}
            onClick={toggleOpen}
          />
          <div className="size-12 bg-white rounded-full border-2 border-gray-500"></div>
        </div>
        <div className="flex items-center justify-end">
          <OnButton onClick={toggleDevice} />
        </div>
      </div>
    </div>
  );
};

export default Switch;
