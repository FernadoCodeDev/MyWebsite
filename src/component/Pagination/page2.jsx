import React from "react";
import SVGphp from "../../assets/svg/php";
import SVGlaravel from "../../assets/svg/laravel";
import SVGpython from "../../assets/svg/python";
import SVGnode from "../../assets/svg/node";

const page2 = () => {
  return (
    <div id="page-2" className="grid grid-cols-1 gap-4">
      <h2 className="text-2xl font-bold text-center md:text-4xl">Back-End</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div class="h-auto bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-indigo-300 rounded-full">
            <SVGphp />
          </div>
          <h1 className="font-bold">PHP</h1>

          <div className="overflow-hidden max-h-0 transition-all duration-700 ease-in-out group-hover:max-h-[500px]">
            <p className="text-base md:text-lg">
              Fue el primer lenguaje Back-End que aprendí, y con él construí la
              base de proyectos como Keys Homes y Cosmic Pizza. Sé cómo proteger
              datos, hashear contraseñas, manejar formularios, validar entradas,
              y estructurar todo usando arquitectura MVC. PHP me permitió
              entender a fondo cómo fluye la lógica en el servidor, y hoy lo uso
              con total confianza para que cada proyecto funcione de forma
              segura y eficiente.
            </p>
          </div>
        </div>

        <div class="h-auto bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-red-300 rounded-full">
            <SVGlaravel />
          </div>
          <h1 className="font-bold">Laravel</h1>

          <div className="overflow-hidden max-h-0 transition-all duration-700 ease-in-out group-hover:max-h-[500px]">
            <p className="text-base md:text-lg">
              Al conocer PHP, tenía claro que debía dominar su mejor aliado que es
              Laravel. Con este framework optimizo y organizo el Back-End con
              autenticación, enrutamiento, validación, control de sesiones y
              mucho más. Laravel me permite escribir código limpio, escalable y
              bien estructurado. Con él aseguro que cada parte del sistema
              funcione al 200%.
            </p>
          </div>
        </div>

        <div class="h-auto bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-yellow-300 rounded-full">
            <SVGpython />
          </div>
          <h1 className="font-bold">Python</h1>

          <div className="overflow-hidden max-h-0 transition-all duration-700 ease-in-out group-hover:max-h-[500px]">
            <p className="text-base md:text-lg">
              Me atrajo su claridad, y me quedé por su versatilidad. Python me
              ha servido tanto para desarrollo web como para automatización y
              análisis de datos. Su sintaxis legible y su potencia me permiten
              resolver problemas de forma directa y elegante. Si algo se puede
              hacer con Python, conmigo va de un{" "}
              <span className="font-bold">print("Dicho y Hecho")</span> a la
              acción real sin rodeos.
            </p>
          </div>
        </div>

        <div class="h-auto bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-lime-300">
            <SVGnode />
          </div>
          <h1 className="font-bold">Node.js</h1>

          <div className="overflow-hidden max-h-0 transition-all duration-700 ease-in-out group-hover:max-h-[500px]">
            <p className="text-base md:text-lg">
              Al trabajar con JavaScript, sabía que tenía que dominar también su
              entorno en el servidor. Con Node.js puedo construir APIs robustas,
              mejorar la capa del servidor y trabajar con arquitecturas como
              MVC. Me permite crear todo el flujo de datos de una aplicación
              moderna, desde el cliente hasta la base, con eficiencia y control
              total.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page2;
