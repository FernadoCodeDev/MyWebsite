import React from "react";
import MobileMenu from "../ui/MobileMenu";
import DarkMode from "../ui/DarkMode";
import Modal from "../ui/Modal";
import TypingEffect from "../ui/TypingEffect ";

import Logo from "../../assets/img/Logo.webp";
import Background from "../../assets/img/Background.webp";
import ContributionSnake from "../../assets/video/ContributionSnake.gif";
import Linkedin from "../../assets/svg/Linkedin";
import GitHub from "../../assets/svg/GitHub";
import Gmail from "../../assets/svg/Gmail";

const Header = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute inset-0 w-full min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>

      <div className="relative grid items-center h-auto grid-cols-2 gap-2 p-4 md:grid-cols-3">
        <div className="order-3 col-span-2 mx-auto md:col-span-1 md:order-2 md:w-auto md:h-20 md:bg-white/20 md:bg-backdrop-blur-[2px]">
          <MobileMenu
            textColor="text-white transition-all duration-700 ease-out"
            hoverColor="hover:text-sky-400"
            bgColor="bg-backdrop-blur-[2px] last-of-type:rounded-b-3xl bg-white/20 md:bg-transparent"
            invertColor="invert-0"
          />
        </div>

        <img
          src={Logo}
          alt="Logo"
          className="order-1 w-full md:max-w-[15rem] h-auto mx-auto cursor-pointer md:order-1"
        />

        <div className=" w-fit ms-auto order-2 md:order-3 backdrop-blur-[4px] bg-white/20 p-2 rounded-3xl">
          <DarkMode />
        </div>

        <div className="relative order-4 col-span-2 mt-8 md:col-span-3">
          <div className="flex flex-col justify-center items-center gap-4 m-auto max-w-[100rem]">
            <TypingEffect />

            <div className="p-4 bg-white rounded-3xl max-w-[60rem]">
              <h1 className="text-base text-center md:text-xl">
                Soy un desarrollador apasionado por la tecnología y el código
                limpio. Mi compromiso es crear soluciones innovadoras,
                optimizadas y escalables, siempre enfocado en mejorar y superar
                expectativas
              </h1>
              <img
                src={ContributionSnake}
                alt="Contribution animation"
                className="w-full h-auto"
              />
            </div>

            <div className="grid items-center justify-center w-full max-w-[60rem] grid-cols-2 gap-4 md:grid-cols-4">
              <a
                href="https://www.linkedin.com/in/fernando-mej%C3%ADa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="group w-16 hover:w-full h-20 hover:bg-sky-600  bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
                  <Linkedin />
                  <span class="origin-left text-xl md:text-2xl inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                    Linkedin
                  </span>
                </button>
              </a>

              <a
                href="https://github.com/FernadoCodeDev "
                target="_blank"
                rel="noopener noreferrer"
              >
                <button class="group w-16 hover:w-full h-20 hover:bg-black relative bg-neutral-900 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:rotate-45">
                  <GitHub />
                  <span class="origin-center text-xl md:text-2xl inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                    GitHub
                  </span>
                </button>
              </a>

              <Modal />

              <a href="mailto:fernando.e.mejia.e@gmail.com">
                <button class="group w-16 hover:w-full h-20 hover:bg-amber-400 relative bg-amber-300 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6  before:rotate-45">
                  <Gmail />
                  <span class="origin-center text-xl md:text-2xl inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                    Gmail
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
