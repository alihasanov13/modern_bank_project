import React from "react";
import { quotes } from "../assets";
function FeedbackCard({ name, title, content, img }) {
  return (
    <div className="flex flex-col gap-y-4 justify-between py-12 px-10 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="quote"
        className="w-[42.6px] h-[27.6px] object-contain"
      />
      <p className="font-poppins text-dimWhite leading-6">{content}</p>
      <div className="flex gap-x-6">
        <img
          src={img}
          alt="avatar"
          className="w-[48px] h-[48px] rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-poppins font-semibold text-white text-[18px]">
            {name}
          </h3>
          <span className="font-poppins text-dimWhite text-[14px]">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
