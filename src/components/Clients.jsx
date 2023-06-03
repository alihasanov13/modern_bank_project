import React from "react";
import { clients } from "../constants";
function Clients() {
  return (
    <section className="flex flex-wrap  justify-center gap-x-16 my-5">
      {clients.map((client) => (
        <div
          key={client.id}
          className="flex items-center justify-center sm:min-w-[192px] min-w-[120px] m-5"
        >
          <img
            src={client.logo}
            alt="client logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </section>
  );
}

export default Clients;
