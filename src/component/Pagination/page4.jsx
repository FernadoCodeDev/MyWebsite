import React from "react";
import SVGastro from "../../assets/svg/astro";
import SVGdocker from "../../assets/svg/docker";

const page4 = () => {
  return (
    <div id="page-4" className="grid grid-cols-1 gap-4">
      <h2 className="text-2xl font-bold text-center md:text-4xl">
        Aprendiendo
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div class="h-auto bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-orange-300 rounded-full">
            <SVGastro />
          </div>
          <h1 className="font-bold">Astro</h1>

          <div className="overflow-hidden max-h-0 transition-all duration-700 ease-in-out group-hover:max-h-[500px]">
            <p className="text-base md:text-lg">
              Decidí aprender Astro porque el desarrollo web moderno necesita
              velocidad, rendimiento y eficiencia. Me atrajo su enfoque en
              enviar solo lo necesario al navegador, optimizando al máximo cada
              carga. Estoy explorando cómo integrar frameworks, componentes y
              contenido de forma más ligera y modular, para llevar mis proyectos
              a otro nivel. Con Astro, quiero construir sitios rápidos, modernos
              y listos para cualquier dispositivo.
            </p>
          </div>
        </div>

        <div class="h-auto bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-blue-300 rounded-full">
            <SVGdocker />
          </div>
          <h1 className="font-bold">Docker</h1>

          <div className="overflow-hidden max-h-0 transition-all duration-700 ease-in-out group-hover:max-h-[500px]">
            <p className="text-base md:text-lg">
              Aprender Docker es clave para cualquier desarrollador que busque
              profesionalizar su flujo de trabajo. Me interesa por su capacidad
              de crear entornos consistentes y replicables, sin importar dónde
              se ejecute el proyecto. Estoy aprendiendo a contenerizar
              aplicaciones, manejar imágenes y desplegar con confianza. Con
              Docker, quiero asegurar que cada proyecto que desarrolle pueda
              escalar, migrar y funcionar igual en cualquier entorno.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page4;
