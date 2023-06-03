import React, { useState } from "react";

function FeatureCard({ icon, title, content, index }) {
  return (
    <div
      className={`flex items-center p-6 rounded-[20px] ${
        index !== 2 ? "mb-6" : "mb-0"
      } gap-x-4 feature-card`}
    >
      <div className="flex items-center justify-center w-[48px] sm:w-[64px] h-[48px] sm:h-[64px] rounded-full bg-dimBlue">
        <img
          src={icon}
          alt="feature icon"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <h2 className="font-poppinst text-white text-lg font-semibold">
          {title}
        </h2>
        <p className="font-poppins text-dimWhite leading-6">{content}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
