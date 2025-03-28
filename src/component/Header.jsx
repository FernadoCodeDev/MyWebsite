import React from "react";
import MobileMenu from "./MobileMenu";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <div className="relative grid items-start w-full h-screen min-h-screen grid-cols-2 gap-2 text-white lg:text-2xl md:grid-cols-3 bg-white">
      <div className="items-center order-3 col-span-2 mx-auto md:col-span-1 md:order-1 md:w-auto ">
          <MobileMenu
            textColor="text-black transition-all duration-700 ease-out"
            hoverColor="hover:text-red-200"
            bgColor="bg-backdrop-blur-[4px] last-of-type:rounded-b-3xl bg-white/20 md:bg-transparent"
            invertColor="invert"
          />
        </div>

      <div className="order-2 p-4 w-fit ms-auto md:order-3">
        <DarkMode />
      </div>

      <div className="h-auto ms-auto grid grid-cols-1 gap-4 md:grid-cols-2 max-w-[100rem] relative order-4 col-span-2 md:col-span-3">

      </div>

    </div>
  );
};

export default Header;