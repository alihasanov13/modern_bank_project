import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
function Hero() {
  return (
    <section id="hero" className="flex flex-col md:flex-row sm:py-16 py-6">
      <div
        className={`flex-1 flex justify-center items-start flex-col xl:px-0 `}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex justify-between items-center w-full gap-x-4">
          <h1 className="font-poppins text-[52px] ss:text-[72px] text-white font-semibold leading-[92px]">
            The Next
            <div className="text-gradient leading-[92px]">Generation</div>
          </h1>
          <div className="hidden ss:flex">
            <GetStarted></GetStarted>
          </div>
        </div>
        <p className="font-poppins text-[52px] ss:text-[72px] text-white font-semibold leading-[92px]">
          Paymanent Method
        </p>
        <p className="font-poppinst text-dimWhite  max-w-[470px] mt-4 leading-8">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="relative my-10 md:my-0">
        <img
          src={robot}
          alt="robot"
          className="w-full h-full relative z-[5] object-contain"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
}

export default Hero;
