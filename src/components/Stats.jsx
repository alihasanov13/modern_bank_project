import React from "react";
import { stats } from "../constants";
function Stats() {
  return (
    <section id="Stats" className="flex justify-between">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-wrap items-center justify-center gap-x-4"
        >
          <span className="font-poppins font-semibold text-[32px] sm:text-[44px] text-white">
            {stat.value}
          </span>
          <p className="font-poppins text-center text-[14px] sm:text-[16px] text-dimWhite text-gradient uppercase">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
