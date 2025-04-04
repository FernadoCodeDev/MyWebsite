import React, { useState, useEffect } from "react";
import MobileMenuIcon from "../../assets/img/MobileMenu.webp";

const MobileMenu = ({
  textColor = "text-gray-500",
  hoverColor = "hover:text-gray-700",
  bgColor = "bg-transparent",
  invertColor = "invert",
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`p-2 h-full flex flex-col items-center`}>
      {isMobile && (
        <img
          src={MobileMenuIcon}
          alt="Mobile Menu"
          className={`w-24 h-auto cursor-pointer ${invertColor}`}
          onClick={toggleMenu}
        />
      )}

      <nav
        className={`m-auto w-full text-center transition-all duration-500 ease-in-out overflow-hidden 
        ${menuOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"} 
        ${isMobile ? "flex flex-col" : "flex flex-row max-h-none opacity-100"}`}
      >
        <a
          href="#Me"
          className={`p-2 text-base md:text-2xl font-bold ${bgColor} ${textColor} ${hoverColor}`}
        >
          Sobre mí
        </a>
        <a
          href="#Skills"
          className={`p-2 text-base md:text-2xl font-bold ${bgColor} ${textColor} ${hoverColor}`}
        >
          Tecnologías 
        </a>
        <a
          href="#Project"
          className={`p-2 text-base md:text-2xl font-bold ${bgColor} ${textColor} ${hoverColor}`}
        >
          Proyectos
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;