// src/pages/HomePage.tsx
import HeroCarousel from "../Components/Hero";
import Services from "../Components/Services";
import Fonctionnalite from "../Components/Fonctionnalite";

const HomePage = () => {
  return (
    <>
      <HeroCarousel />
      <Services />
      <Fonctionnalite />
    </>
  );
};

export default HomePage;
