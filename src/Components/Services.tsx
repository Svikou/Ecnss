import { capabilitiesCards } from "./Data.json";
import React from "react";

const Services: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-2xl">
        <h2 className="mb-5 text-center text-responsive font-semibold text-[#3baa35e7]">
          Mon espace eCNSS
        </h2>

        <p className="text-responsive text-para-color mb-4 text-center lg:text-2xl">
          Tous les services de la CNSS en ligne
        </p>
      </div>

      <div className="pb-4 text-white" id="benefits">
        <div
          className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:w-[90%] lg:w-[86%]  text-center"
          id="services"
        >
          {capabilitiesCards.map((card, index) => (
            <div
              className="flex flex-col items-center justify-center rounded-lg border border-[#324f535b] px-6 py-8 transition-all hover:bg-bgCard/20"
              key={index}
            >
              <img
                src={card.image}
                className="mb-4 w-20 h-20"
                alt={card.title}
              />
              <h5 className="mb-4 text-md font-semibold text-[#8d9191]">
                {card.title}
              </h5>
              <p className=" text-responsive mb-8 text-black">
                {card.description}
              </p>
              <a
                className="rounded-md bg-[#3baa35e7] hover:bg-[#3baa35] px-10 py-2 text-sm font-medium text-white"
                href="#"
              >
                Accédez
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
