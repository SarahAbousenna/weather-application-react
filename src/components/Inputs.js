import React from "react";
import { UilSearch, UilLocationArrow } from "@iconscout/react-unicons";

function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search for city..."
          className="text-xl p-2 font-medium w-full shadow-xl focus:outline-none capitalize opacity-60 rounded placeholder:lowercase"
        />
        <UilSearch
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationArrow
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <div className="flex flex-row w-1/4 items-center justify-center">
          <button
            name="metric"
            className="text-xl text-white transition ease-out hover:scale-110 hover:text-gray-300
          "
          >
            °C
          </button>
          <p className="text-xl text-white mx-1">|</p>
          <button
            name="imperial"
            className="text-xl text-white transition ease-out hover:scale-110 hover:text-gray-300
          "
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
