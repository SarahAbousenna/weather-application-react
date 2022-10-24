import "./App.css";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";

import TopBtns from "./components/TopBtns";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import Temperature from "./components/Temperature";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="App">
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopBtns />
        <Inputs />

        <TimeAndLocation />

        <Temperature />

        <Forecast title="Hourly Forecast" />
        <Forecast title="Daily Forecast" />
      </div>
    </div>
  );
}

export default App;
