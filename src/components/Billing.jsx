import React from "react";
import { bill, google, apple } from "../assets";
function Billing() {
  return (
    <section id="Billing" className="flex flex-col-reverse md:flex-row mt-40">
      <div className="relative w-full h-full md:w-[50%] mt-10 md:mt-0">
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="font-poppins text-white text-[42px] font-semibold">
          Easily control your <br className="hidden sm:block" />
          billing & invoicing
        </h1>

        <p className="font-poppins max-w-[470px] mt-5 leading-6 text-dimWhite">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex gap-x-4 mt-8">
          <img src={apple} alt="apple store" />
          <img src={google} alt="google play" />
        </div>
      </div>
    </section>
  );
}

export default Billing;
