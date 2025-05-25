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
import CodiGol from "../../assets/img/CodiGolLogo.webp";
import CodiGolLogo from "../../assets/img/CódiGolLogo2.webp";
import Clerk from "../../assets/img/Clerk.webp";

const ThirdSection = () => {
  const isVisible = useScrollAnimation("second-section");
  return (
    <div
      className="relative flex flex-col items-center h-auto gap-8 p-4 text-black bg-white 2xl:text-2xl dark:text-white dark:bg-neutral-900"
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

        <div class="rounded-2xl bg-slate-100 dark:bg-neutral-800 p-2">
          <div class="mt-10 h-auto rounded-2xl bg-neutral-900 relative flex flex-col">
            <img
              src={CodiGolLogo}
              alt="CodiGolLogo"
              className="absolute w-12 h-auto dark:invert -top-7 left-5 "
            />

            <img
              src={CodiGol}
              alt="CodiGol"
              className="z-20 w-full h-auto p-4 rounded-2xl"
            />

            <div class="w-1/3 h-11 bg-neutral-900 z-30 rounded-2xl absolute transform -top-7 right-5 skew-x-[-40deg]"></div>
            <div class="w-1/4 h-11 bg-neutral-900 z-30 rounded-tr-2xl absolute transform -top-7 right-0 ">
              <div class="p-1 w-full h-12 absolute  flex flex-row justify-around">
                <a
                  href="https://codigol-demo.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8"
                >
                  <WebSVG />
                </a>
                <a
                  href="https://github.com/FernadoCodeDev/CodiGol-Demo"
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
              CódiGol
            </span>

            <div class="grid grid-cols-1 w-full justify-center mt-5">
              <div class="flex flex-col gap-2 text-center p-2 border-b border-black dark:border-white">
                <p class="block text-base md:text-xl">
                  Pequeño videojuego web diseñado para ayudarte a aprender y
                  practicar Tailwind CSS de forma divertida y diferente.
                  Inspirado en la emoción del fútbol, este juego te reta a
                  anotar goles completando desafíos de diseño utilizando
                  Tailwind.
                </p>

                <p class="block text-base md:text-xl">
                  Proyecto desarrollado y destacado en la{" "}
                  <a
                    href="https://github.com/midudev/hackaton-clerk-2025?tab=readme-ov-file#%EF%B8%8F-c%C3%B3mo-participar-en-la-hackat%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold transition-all duration-500 ease-in-out hover:text-sky-600"
                  >
                    Hackathon de MiduDev 2025,
                  </a>{" "}
                  Donde se integro{" "}
                  <a
                    href="https://clerk.com/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold transition-all duration-500 ease-in-out hover:text-gray-600"
                  >
                    Clerk SDK
                  </a>{" "}
                  para la autenticación de usuarios
                </p>
              </div>

              <div class="grid grid-cols-4  gap-4 m-auto items-center justify-center p-4">
                <div className="flex flex-col items-center justify-center w-12 h-12 p-1 bg-yellow-300 rounded-full md:w-20 md:h-20">
                  <SVGJS />
                </div>

                <div className="flex flex-col items-center justify-center w-12 h-12 p-1 rounded-full md:w-20 md:h-20 bg-sky-300">
                  <SVGRect />
                </div>

                <div className="flex flex-col items-center justify-center w-12 h-12 p-1 rounded-full md:w-20 md:h-20 bg-cyan-300">
                  <SVGTailwind />
                </div>

                <div className="flex flex-col items-center justify-center w-12 h-12 p-3 bg-purple-300 rounded-full md:p-4 md:w-20 md:h-20">
                  <img src={Clerk} alt="Clerk" className="invert" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-2xl bg-slate-100 dark:bg-neutral-800 flex flex-col p-2">
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

          <div class="p-2 mt-2 flex flex-col justify-center items-center flex-1">
            <h1 class="text-center font-extrabold text-2xl">Landing Mine</h1>

            <div class="flex flex-col justify-center flex-1">
              <div class="text-center">
                <h1 class="text-base md:text-xl">
                  Colección de landing pages con diversas temáticas, diseñadas
                  para crear interfaces modernas, atractivas y altamente
                  eficientes. con un total de 19 landing Pages.
                </h1>
              </div>

              <div class="w-full h-[1px] bg-black dark:bg-white my-4"></div>

              <div class="grid grid-cols-4 gap-4 items-center justify-center p-4 mx-auto">
                <div className="flex flex-col items-center justify-center w-12 h-12 p-1 bg-yellow-300 rounded-full md:w-20 md:h-20">
                  <SVGJS />
                </div>

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
            </div>
          </div>
        </div>

        <div class="rounded-2xl bg-slate-100 dark:bg-neutral-800 p-2">
          <div class="mt-10 h-auto rounded-2xl bg-[#0f2925] relative flex flex-col">
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

            <div class="grid grid-cols-1 w-full justify-center mt-5">
              <div class="flex-1 text-center p-2 border-b border-black dark:border-white">
                <h1 class="block text-base md:text-xl">
                  Plataforma web diseñada para una pizzería, integrando un
                  sistema de reservaciones que mejora la experiencia del usuario
                  y la gestión del negocio. Un proyecto que combina diseño
                  intuitivo con funcionalidad práctica.
                </h1>
              </div>

              <div class="grid grid-cols-4  gap-4 m-auto items-center justify-center p-4">
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

            <div class="grid grid-cols-1 w-full justify-center mt-5">
              <div class="flex-1 text-center p-2 border-b border-black dark:border-white">
                <h1 class="block text-base md:text-xl">
                  Plataforma web enfocada en bienes raíces, diseñada para
                  ofrecer una experiencia fluida y organizada en la búsqueda y
                  gestión de propiedades. Un desafío donde la estructura y la
                  optimización han sido clave para su desarrollo.
                </h1>
              </div>

              <div class="grid grid-cols-4 gap-4 m-auto items-center justify-center p-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
