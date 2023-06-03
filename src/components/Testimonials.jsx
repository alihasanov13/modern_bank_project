import React from "react";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
function Testimonials() {
  return (
    <section id="clients" className="flex flex-col mt-40">
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="font-poppins text-white font-semibold text-[42px]">
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <p className="font-poppins w-full flex items-center justify-center max-w-[450px] text-dimWhite md:mr-32 mt-5 md:mt-0 text-lg">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] mt-10">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card}></FeedbackCard>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
