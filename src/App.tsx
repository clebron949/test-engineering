// import { useState } from "react";
import Dmm from "./components/equipments/digital-muiltimeter/Dmm";
import PowerSupply from "./components/equipments/power-supply/PowerSupply";
import Switch from "./components/equipments/switch/Switch";

function App() {
  return (
    <div className="p-6 flex justify-center gap-6 h-screen">
      <PowerSupply />
      <Switch />
      <Dmm />
    </div>
  );
}

export default App;
