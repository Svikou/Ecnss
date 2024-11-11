import { capabilitiesCards } from "./Data.json";
import React from "react";

const Services: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-2xl">
        <h1 className="mb-5 text-center text-5xl font-semibold text-[#3baa35e7]">
          Mon espace Ecnss
        </h1>
        <h3 className="text-para-color mb-4 text-center text-2xl">
          Rétrouvez tout les services de la cnss en ligne
        </h3>
      </div>
      <div className="pb-4 text-white" id="benefits">
        <div
          className="mx-auto grid w-[90%] grid-cols-4 gap-3 pb-4 pt-10 text-center"
          id="services"
        >
          {capabilitiesCards.map((card, index) => (
            <div
              className="flex flex-col items-center justify-center rounded-lg border border-[#324f535b] px-10 py-12 transition-all hover:bg-bgCard/20"
              key={index}
            >
              <img src={card.image} className="mb-4 size-20" alt={card.title} />
              <h5 className="mb-4 text-md font-semibold text-[#8d9191]">
                {card.title}
              </h5>
              <p className="text-md mb-8 text-black">{card.description}</p>
              <a
                className="rounded-md bg-[#3baa35e7] hover:bg-[#3baa35]   px-14 py-3 text-sm font-medium text-white"
                href="#"
              >
                Accedez
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
