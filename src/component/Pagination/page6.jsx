import React from "react";
import SVGdatabases from "../../assets/svg/databases";
import SVGresponsive from "../../assets/svg/responsive";
import MVC from "../../assets/img/MVC.webp";
import crud from "../../assets/img/crud.webp";
import SVGhttp from "../../assets/svg/http";
import Clerk from "../../assets/img/Clerk.webp";

const page6 = () => {
  return (
    <div id="page-6" className="grid grid-cols-1 gap-4">
      <h2 className="text-2xl font-bold text-center md:text-4xl">
        Prácticas de desarrollo
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div class="h-auto bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-teal-300 rounded-full">
            <SVGdatabases />
          </div>
          <h1 className="font-bold">
            Diseño y modelado de bases de datos relacionales
          </h1>

          <div className="overflow-hidden max-h-0 transition-all duration-700 ease-in-out group-hover:max-h-[500px]">
            <p className="text-base md:text-lg">
              Diseñar una base de datos no es solo crear tablas, es entender
              cómo organizar la información de forma lógica, eficiente y segura.
              Aprender a modelarlas correctamente me permite gestionar los datos
              de forma escalable, coherente y bien estructurada. Saber cómo
              relacionar entidades y aplicar buenas prácticas de normalización
              es una de mis mayores fortalezas al trabajar con proyectos reales.
            </p>
          </div>
        </div>

        <div class="h-auto bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-4 rounded-full bg-sky-300">
            <SVGresponsive />
          </div>
          <h1 className="font-bold">Diseño Responsive</h1>

          <div className="overflow-hidden max-h-0 transition-all duration-700 ease-in-out group-hover:max-h-[500px]">
            <p className="text-base md:text-lg">
              Un buen diseño debe adaptarse a todos. Siempre me aseguro de que
              cada interfaz que creo ya sea con CSS, SASS o Tailwind sea 100%
              responsive. Desde el móvil más pequeño hasta un monitor ultra
              ancho, el diseño fluye y se adapta. Proyectos como Keys Homes,
              Cosmic Pizza, LandingMine y esta misma página son prueba clara de
              mi compromiso con la experiencia visual en cualquier dispositivo.
            </p>
          </div>
        </div>

        <div class="h-auto bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-slate-800">
            <img src={MVC} alt="MVC" className="invert" />
          </div>
          <h1 className="font-bold">MVC (Model-View-Controller)</h1>

          <div className="overflow-hidden max-h-0 transition-all duration-700 ease-in-out group-hover:max-h-[500px]">
            <p className="text-base md:text-lg">
              Descubrir la arquitectura Modelo-Vista-Controlador (MVC) fue un
              antes y después para mí. La utilicé en Cosmic Pizza y comprobé lo
              poderosa que puede ser para organizar el código, separar
              responsabilidades y hacer que todo sea más mantenible. Con MVC no
              solo creo aplicaciones, creo estructuras sólidas que están listas
              para crecer.
            </p>
          </div>
        </div>

        <div class="h-auto bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-4 bg-blue-300 rounded-full">
            <img src={crud} alt="crud" className="invert" />
          </div>
          <h1 className="font-bold">CRUD (Create, Read, Update, Delete)</h1>

          <div className="overflow-hidden max-h-0 transition-all duration-700 ease-in-out group-hover:max-h-[500px]">
            <p className="text-base md:text-lg">
              El CRUD (Crear, Leer, Actualizar, Eliminar) es la base del
              funcionamiento de la mayoría de las aplicaciones. Al dominarlo
              tanto del lado del Back-End (como con PHP) como del Front-End,
              aseguro una experiencia fluida y funcional para los usuarios. Para
              mí, cada operación debe verse bien, funcionar bien y estar pensada
              para ser segura y eficiente.
            </p>
          </div>
        </div>

        <div class="h-auto bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-neutral-700">
            <SVGhttp />
          </div>
          <h1 className="font-bold">RESTful APIs</h1>

          <div className="overflow-hidden max-h-0 transition-all duration-700 ease-in-out group-hover:max-h-[500px]">
            <p className="text-base md:text-lg">
              Aprender sobre las RESTful APIs y la seguridad en las
              comunicaciones HTTP fue fundamental para proyectos como Keys Homes
              y Cosmic Pizza. Sé cómo estructurar, consumir y proteger APIs,
              permitiendo que las aplicaciones se comuniquen de forma clara,
              robusta y segura. Entiendo la importancia de cada endpoint y cómo
              cada petición es parte vital del sistema.
            </p>
          </div>
        </div>

        <div class="h-auto bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-4 bg-purple-300 rounded-full">
            <img src={Clerk} alt="Clerk" className="invert" />
          </div>

          <h1 className="font-bold">Clerk SDK</h1>

          <div className="overflow-hidden max-h-0 transition-all duration-700 ease-in-out group-hover:max-h-[500px]">
            <p className="text-base md:text-lg"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page6;
