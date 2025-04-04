import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-6 text-white bg-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-4 text-lg font-bold leading-relaxed">
          ¿Quieres saber más?
        </h1>

        <p className="mb-4 text-lg leading-relaxed">
          Soy un desarrollador apasionado por la creación de soluciones web
          modernas y eficientes. Si deseas conocer más sobre mis proyectos,
          habilidades o colaborar en algún reto, no dudes en echar un vistazo a
          los repositorios y versiones desplegadas de mis proyectos.
        </p>
      </div>

      <div className="mt-8 border-t-2 border-white opacity-50 "></div>

      <p className="mt-6 text-sm text-center">
        Siempre estoy aprendiendo, mejorando y buscando nuevas formas de
        optimizar cada línea de código. ¡Gracias por visitar mi página!
      </p>
    </footer>
  );
};

export default Footer;
