import React from "react";
import { arrowUp } from "../assets";

function GetStarted() {
  return (
    <div className="flex items-center justify-center w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer p-[2px] ">
      <div className="flex flex-col items-center justify-center bg-primary w-full h-full rounded-full">
        <p className="text-gradient flex items-end text-xl gap-x-1 mr-2 font-semibold">
          Get
          <img
            src={arrowUp}
            alt="arrow up "
            className="w-[20px] h-[20px] object-contain"
          />
        </p>
        <p className="text-gradient flex items-end text-xl font-semibold">
          Started
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
