import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "../constants";
function Buisness() {
  return (
    <section
      id="Buisness"
      className="mt-40 flex md:flex-row md:justify-between flex-col"
    >
      <div>
        <h1 className="text-white text-[44px] font-poppins font-semibold">
          {" "}
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h1>
        <p className="max-w-[470px] mt-5 leading-8 text-dimWhite ">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="font-poppins mt-10 py-4 px-8 rounded bg-blue-gradient text-[18px] cursor-pointer">
          Get Started
        </button>
      </div>
      <ul className="w-full md:w-[50%] md:mt-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            {...feature}
            index={index}
          ></FeatureCard>
        ))}
      </ul>
    </section>
  );
}

export default Buisness;
