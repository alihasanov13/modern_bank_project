import React from "react";
import { card } from "../assets";
function CardDeal() {
  return (
    <section id="CardDeal" className="flex flex-col md:flex-row mt-40">
      <div className="">
        <h2 className="font-poppins text-white font-semibold text-[42px]">
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className="font-poppins max-w-[470px] mt-10 leading-6 text-dimWhite">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className="font-poppins bg-blue-gradient py-4 px-8 rounded text-[18px] mt-10">
          Get started
        </button>
      </div>
      <img
        src={card}
        alt="card"
        className="w-full h-full md:w-[50%] ml-0 mt-10 md:mt-0 md:ml-10"
      />
    </section>
  );
}

export default CardDeal;
