import React from "react";
import ImgFirstSection from "../../assets/img/ImgFirstSection.webp";
import useScrollAnimation from "../hooks/ScrollAnimation";

const FirstSection = () => {
  const isVisible = useScrollAnimation("second-section");
  return (
    <div
      id="second-section"
      className="relative flex flex-col items-center h-auto gap-8 p-4 text-black bg-white lg:text-2xl dark:text-white dark:bg-neutral-900"
    >
      <div
        className={`m-auto grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[80rem] transition-all duration-1000 ease-in ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        id="Me"
      >
        <div className="order-2 p-4 md:order-1">
          <img src={ImgFirstSection} alt="ImgFirstSection" />
        </div>
        <div className="flex flex-col justify-center order-1 gap-4 md:order-2">
          <h1 className="text-2xl font-bold text-center md:text-4xl md:text-start">
            Construyendo soluciones que combinan lógica, diseño y propósito
          </h1>
          <h3 className="text-xl font-bold text-center md:text-2xl">
            Desarrollo con enfoque humano, técnico y eficiente.
          </h3>
          <p className="text-base md:text-lg">
            Me apasiona crear experiencias digitales que funcionen bien y se
            vean bien. Con formación en frontend y backend, me adapto con
            facilidad a los retos de cada proyecto. Creo en la mejora constante,
            el código claro y en trabajar con personas que valoren tanto el
            detalle como el impacto de lo que construimos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
