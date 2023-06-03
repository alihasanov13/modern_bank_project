import React from "react";

function Cta() {
  return (
    <section className="bg-black-gradient rounded-[20px] box-shadow flex flex-col sm:flex-row p-6 sm:p-16 mt-20">
      <div className="flex flex-col flex-1">
        <h2 className="font-poppins text-[40px] sm:text-[48px] text-white font-semibolds">
          Let’s try our service now!
        </h2>
        <p className="font-poppins text-dimWhite text-[18px] max-w-[470px] mt-5">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex items-center justify-start sm:justify-center ml-0 sm:ml-10 mt-5 sm:mt-0">
        <button className="font-poppins bg-blue-gradient py-4 px-8 rounded text-[18px]">
          Get started
        </button>
      </div>
    </section>
  );
}

export default Cta;
