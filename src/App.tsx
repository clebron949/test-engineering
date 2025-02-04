// import { useState } from "react";
import Dmm from "./components/equipments/dmm";
import PowerSupply from "./components/equipments/PowerSupply";

function App() {
  return (
    <div className="p-6 flex justify-center gap-6 h-screen">
      <Dmm />
      <PowerSupply />
    </div>
  );
}

export default App;
