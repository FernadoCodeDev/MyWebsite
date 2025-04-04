import React from "react";
import useScrollAnimation from "../hooks/ScrollAnimation";
import Github2SVG from "../../assets/svg/Github2";
import WebSVG from "../../assets/svg/web";
import SVGRect from "../../assets/svg/svgreact";
import SVGTailwind from "../../assets/svg/Tailwind";
import SVGresponsive from "../../assets/svg/responsive";
import SVGJS from "../../assets/svg/js";
import SVGphp from "../../assets/svg/php";
import SVGmysql from "../../assets/svg/mysql";
import MVC from "../../assets/img/MVC.webp";
import SVGSass from "../../assets/svg/sass";

import LandingMine from "../../assets/img/LandingMine.webp";
import CosmicPizza from "../../assets/img/CosmicPizza.webp";
import KeysHomes from "../../assets/img/KeysHomes.webp";
import KeysHomesB from "../../assets/img/KeysHomesB.webp";
import CosmicPizzaB from "../../assets/img/CosmicPizzaB.webp";
import LandingMineVideo from "../../assets/video/LandingMineVideo.mp4";

const ThirdSection = () => {
  const isVisible = useScrollAnimation("second-section");
  return (
    <div
      className="relative flex flex-col items-center min-h-screen gap-8 p-4 text-black bg-white 2xl:text-2xl dark:text-white dark:bg-neutral-900"
      id="second-section"
    >
      <div
        className={`w-full m-auto grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[80rem] transition-all duration-1000 ease-in ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        id="Project"
      >
        <h1 className="text-2xl font-bold text-center md:text-4xl md:col-span-2">
          Mis Proyectos
        </h1>

        <h3 className="text-xl font-bold text-center md:text-2xl md:col-span-2">
          Creando, Aprendiendo y Evolucionando
        </h3>

        <div class="md:col-span-2 rounded-2xl bg-slate-100 dark:bg-neutral-800 p-2">
          <div class="mt-10 h-auto rounded-l-2xl rounded-br-2xl rounded-bl-2xl bg-blue-950 relative flex flex-col">
            <img
              src={LandingMine}
              alt={LandingMine}
              className="absolute w-8 h-auto dark:invert -top-7 left-5 "
            />

            <video
              className="z-20 w-full h-auto p-4 rounded-2xl"
              loop
              autoPlay
              muted
              playsInline
            >
              <source src={LandingMineVideo} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>

            <div class="w-1/3 h-11 bg-blue-950 z-10 rounded-2xl absolute transform -top-7 right-5 skew-x-[-40deg]"></div>
            <div class="w-1/4 h-11 bg-blue-950 z-10 rounded-tr-2xl absolute transform -top-7 right-0 ">
              <div class="p-1 w-full h-12 absolute  flex flex-row justify-around">
                <a
                  href="https://landingmine.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8"
                >
                  <WebSVG />
                </a>
                <a
                  href="https://github.com/FernadoCodeDev/LandingMine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8"
                >
                  <Github2SVG />
                </a>
              </div>
            </div>
          </div>

          <div class="mt-4 p-2">
            <span class="block text-center font-extrabold text-2xl tracking-wide">
              Landing Mine
            </span>

            <div class="grid grid-cols-2 w-full justify-center mt-5">
              <div class="grid grid-cols-2 gap-4 m-auto items-center justify-center p-4">
                <div className="flex flex-col items-center justify-center w-12 h-12 p-1 rounded-full md:w-20 md:h-20 bg-sky-300">
                  <SVGRect />
                </div>

                <div className="flex flex-col items-center justify-center w-12 h-12 p-1 rounded-full md:w-20 md:h-20 bg-cyan-300">
                  <SVGTailwind />
                </div>

                <div className="flex flex-col items-center justify-center w-12 h-12 p-3 rounded-full md:w-20 md:h-20 bg-sky-300">
                  <SVGresponsive />
                </div>
              </div>

              <div class="flex-1 text-center p-2  border-l border-black dark:border-white">
                <h1 class="block text-base md:text-xl">
                  Colección de landing pages con diversas temáticas, diseñadas
                  para crear interfaces modernas, atractivas y altamente
                  eficientes. con un total de 18 landing Pages.
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-2xl bg-slate-100 dark:bg-neutral-800 p-2">
          <div class="mt-10 h-auto rounded-l-2x rounded-bl-2xl bg-[#0f2925] relative flex flex-col">
            <img
              src={CosmicPizza}
              alt={CosmicPizza}
              className="absolute w-5 h-auto dark:invert -top-7 left-5 "
            />

            <img
              src={CosmicPizzaB}
              alt="KeysHomesB"
              className="z-20 w-full h-auto rounded-2xl"
            />

            <div class="w-1/3 h-11 bg-[#090f1f] z-30 rounded-2xl absolute transform -top-7 right-5 skew-x-[-40deg]"></div>
            <div class="w-1/4 h-11 bg-[#090f1f] z-30 rounded-tr-2xl absolute transform -top-7 right-0 ">
              <div class="p-1 w-full h-12 absolute  flex flex-row justify-around">
                <a
                  href="https://github.com/FernadoCodeDev/Cosmic-Pizza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8"
                >
                  <Github2SVG />
                </a>
              </div>
            </div>
          </div>

          <div class="mt-4 p-2">
            <span class="block text-center font-extrabold text-2xl tracking-wide">
              Cosmic Pizza
            </span>

            <div class="grid grid-cols-2 w-full justify-center mt-5">
              <div class="grid grid-cols-2 gap-4 m-auto items-center justify-center p-4 ">
                <div className="flex flex-col items-center justify-center w-12 h-12 p-1 bg-yellow-300 rounded-full md:w-20 md:h-20">
                  <SVGJS />
                </div>

                <div className="flex flex-col items-center justify-center w-12 h-12 p-1 bg-indigo-300 rounded-full md:w-20 md:h-20">
                  <SVGphp />
                </div>

                <div className="flex flex-col items-center justify-center w-12 h-12 p-2 bg-orange-300 rounded-full md:p-4 md:w-20 md:h-20">
                  <SVGmysql />
                </div>

                <div className="flex flex-col items-center justify-center w-12 h-12 p-2 rounded-full md:p-4 md:w-20 md:h-20 bg-slate-800">
                  <img src={MVC} alt="MVC" className="invert" />
                </div>
              </div>

              <div class="flex-1 text-center p-2 border-l border-black dark:border-white">
                <h1 class="block text-base md:text-xl">
                  Plataforma web diseñada para una pizzería, integrando un
                  sistema de reservaciones que mejora la experiencia del usuario
                  y la gestión del negocio. Un proyecto que combina diseño
                  intuitivo con funcionalidad práctica.
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-2xl bg-slate-100 dark:bg-neutral-800 p-2">
          <div class="mt-10 h-auto rounded-l-2xl rounded-br-2xl rounded-bl-2xl bg-[#0f2925] relative flex flex-col">
            <img
              src={KeysHomes}
              alt={KeysHomes}
              className="absolute w-5 h-auto dark:invert -top-7 left-5 "
            />

            <img
              src={KeysHomesB}
              alt="KeysHomesB"
              className="z-20 w-full h-auto rounded-2xl"
            />

            <div class="w-1/3 h-11 bg-[#0f2925] z-30 rounded-2xl absolute transform -top-7 right-5 skew-x-[-40deg]"></div>
            <div class="w-1/4 h-11 bg-[#0f2925] z-30 rounded-tr-2xl absolute transform -top-7 right-0 ">
              <div class="p-1 w-full h-12 absolute  flex flex-row justify-around">
                <a
                  href="http://keyshome.atwebpages.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8"
                >
                  <WebSVG />
                </a>
                <a
                  href="https://github.com/FernadoCodeDev/KeysHomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8"
                >
                  <Github2SVG />
                </a>
              </div>
            </div>
          </div>

          <div class="mt-4 p-2">
            <span class="block text-center font-extrabold text-2xl tracking-wide">
              Keys Homes
            </span>

            <div class="grid grid-cols-2 w-full justify-center mt-5">
              <div class="grid grid-cols-2 gap-4 m-auto items-center justify-center p-4   dark:border-white">
                <div className="flex flex-col items-center justify-center w-12 h-12 p-1 bg-yellow-300 rounded-full md:w-20 md:h-20">
                  <SVGJS />
                </div>

                <div className="flex flex-col items-center justify-center w-12 h-12 p-2 bg-pink-300 rounded-full md:w-20 md:h-20">
                  <SVGSass />
                </div>

                <div className="flex flex-col items-center justify-center w-12 h-12 p-1 bg-indigo-300 rounded-full md:w-20 md:h-20">
                  <SVGphp />
                </div>

                <div className="flex flex-col items-center justify-center w-12 h-12 p-2 bg-orange-300 rounded-full md:p-4 md:w-20 md:h-20">
                  <SVGmysql />
                </div>
              </div>

              <div class="flex-1 text-center p-2 border-l border-black dark:border-white">
                <h1 class="block text-base md:text-xl">
                  Plataforma web enfocada en bienes raíces, diseñada para
                  ofrecer una experiencia fluida y organizada en la búsqueda y
                  gestión de propiedades. Un desafío donde la estructura y la
                  optimización han sido clave para su desarrollo.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
