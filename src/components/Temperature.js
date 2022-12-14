import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function Temperature() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>
      <div className="flex items-center justify-between py-3 text-xl text-white">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          alt="icon"
          className="w-20"
        />
        <p className="text-5xl"> 43°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-xs items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Feels Like:
            <span className="font-medium ml-1">32°</span>
          </div>

          <div className="flex font-light text-xs items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">20%</span>
          </div>

          <div className="flex font-light text-xs items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-xs  py-3">
        <UilSun />
        <p className="font-light text-xs">
          Sunrise <span className="font-medium ml-1"> 06:45 AM</span>
        </p>
        <p className="font-light text-xs">|</p>

        <UilSunset />
        <p className="font-light text-xs">
          Sunset <span className="font-medium ml-1"> 06:45 AM</span>
        </p>
        <p className="font-light text-xs">|</p>

        <UilArrowUp />
        <p className="font-light text-xs">
          High <span className="font-medium ml-1"> 45°</span>
        </p>
        <p className="font-light text-xs">|</p>

        <UilArrowDown />
        <p className="font-light text-xs">
          Low <span className="font-medium ml-1"> 30°</span>
        </p>
      </div>
    </div>
  );
}

export default Temperature;
