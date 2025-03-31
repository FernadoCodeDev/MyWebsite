import React from "react";
import MobileMenu from "./MobileMenu";
import DarkMode from "./DarkMode";
import Logo from "../img/Logo.webp";
import Background from "../img/Background.webp";
import ContributionSnake from "../video/ContributionSnake.gif";
import TypingEffect from "./TypingEffect ";

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
            hoverColor="hover:text-orange-300"
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
                Soy un desarrollador apasionado por la tecnología y
                el código limpio. Mi compromiso es crear soluciones innovadoras,
                optimizadas y escalables, siempre enfocado en mejorar y superar
                expectativas
              </h1>
              <img
                src={ContributionSnake}
                alt="Contribution animation"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
