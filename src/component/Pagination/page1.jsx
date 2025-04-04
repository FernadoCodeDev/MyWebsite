import React from "react";
import SVGhtml from "../../assets/svg/html";
import SVGcss from "../../assets/svg/css";
import SVGSass from "../../assets/svg/sass";
import SVGJS from "../../assets/svg/js";
import SVGTS from "../../assets/svg/ts";
import SVGJquery from "../../assets/svg/Jquery";
import SVGBootstrap from "../../assets/svg/Bootstrap";
import SVGRedux from "../../assets/svg/Redux";
import SVGReact from "../../assets/svg/svgreact";
import SVGTailwind from "../../assets/svg/Tailwind";

const page1 = () => {
  return (
    <div id="page-1" className="grid grid-cols-1 gap-4">
      <h2 className="text-2xl font-bold text-center md:text-4xl">Front-End</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-orange-300 rounded-full">
            <SVGhtml />
          </div>
          <h1 className="font-bold">HTML</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Es la base de todo, y me aseguro de usarlo con propósito. No se
              trata solo de estructurar una página, sino de construirla con
              inteligencia. Uso cada etiqueta con intención, como un arquitecto
              que conoce cada material de su obra. No importa la etiqueta, sabré
              usarla bien para darle sentido, semántica y solidez a tu proyecto.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-4 bg-indigo-300 rounded-full">
            <SVGcss />
          </div>

          <h3 className="font-bold">CSS</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Es lo que da vida al diseño, y con él puedo crear cualquier estilo
              que un proyecto necesite. Desde un botón sutil hasta una interfaz
              con animaciones complejas, sé cómo hacer que cada detalle cuente.
              Puedo trabajar efectos como hover, transiciones, o animaciones
              fluidas, todo con puro CSS y sin complicaciones.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-pink-300 rounded-full">
            <SVGSass />
          </div>

          <h3 className="font-bold">Sass</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              CSS con superpoderes, y yo me encargo de llevarlos al máximo. Uso
              mixins, funciones, anidamiento, variables y estructuras
              reutilizables que hacen mi código más limpio, escalable y potente.
              Si SASS amplía el poder del CSS, yo lo uso para escribir estilos
              más inteligentes, ordenados y eficientes. Proyectos como Keys
              Homes y Cosmic Pizaa lo demuestran.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-yellow-300 rounded-full">
            <SVGJS />
          </div>

          <h3 className="font-bold">JavaScript</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              La interactividad empieza aquí, y estoy listo para hacer que
              cualquier elemento cobre vida. Me siento cómodo enfrentando
              desafíos con JavaScript, creando funciones claras, manejando
              eventos y haciendo que cada parte del proyecto responda como debe.
              Si hay algo que necesita movimiento, lógica o dinamismo, sé que
              puedo lograrlo.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-sky-300">
            <SVGTS />
          </div>

          <h3 className="font-bold">Typescrip</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Si la interactividad empieza con JavaScript, con TypeScript sé que
              puedo llevarla a otro nivel. Gracias a su tipado estático,
              interfaces, clases y control estricto, puedo escribir código más
              predecible, organizado y fácil de mantener. Todo lo que ya sé que
              puedo hacer con JavaScript, sé que con TypeScript lo hago mejor,
              más limpio y con menos errores.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-cyan-300">
            <SVGJquery />
          </div>

          <h3 className="font-bold">Jquery</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              jQuery fue una de las primeras herramientas que me ayudó a
              entender lo poderoso que puede ser JavaScript en el navegador. Hoy
              la uso cuando quiero soluciones rápidas y eficientes para tareas
              comunes. Sé cómo sacarle provecho para simplificar el DOM, manejar
              eventos y agilizar la creación de funcionalidades web sin perder
              claridad.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-violet-300">
            <SVGBootstrap />
          </div>

          <h3 className="font-bold">Bootstrap</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Uno de los primeros frameworks que aprendí, y al día de hoy sigue
              siendo una gran herramienta en mi flujo de trabajo. Con Bootstrap
              sé crear componentes responsivos, formularios y plantillas que
              facilitan la experiencia del usuario y aceleran el desarrollo sin
              sacrificar calidad ni estilo.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-purple-300 rounded-full">
            <SVGRedux />
          </div>

          <h3 className="font-bold">Redux</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Una librería que uso cuando el estado de una aplicación necesita
              estar bien controlado. Con Redux puedo gestionar flujos de datos
              complejos de forma clara, centralizada y eficiente. Me permite
              mantener el orden en aplicaciones grandes, asegurando que todo
              funcione como debe, sin perder el control en ningún momento.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-sky-300">
            <SVGReact />
          </div>

          <h3 className="font-bold">React</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Si aprendí JavaScript, tenía que dominar uno de sus frameworks más
              populares. Con React puedo construir interfaces modernas y
              dinámicas, utilizando componentes reutilizables y hooks que llevan
              el desarrollo al siguiente nivel. Proyectos como LandingMine lo
              demuestran, y esta misma página personal lo confirma. Con React,
              no solo desarrollo rápido, desarrollo bien.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-cyan-300">
            <SVGTailwind />
          </div>

          <h3 className="font-bold">Tailwind</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Después de trabajar con CSS y SASS, sabía que tenía que dominar
              Tailwind. Este framework me permite personalizar cada detalle
              visual con precisión y agilidad. Gracias a su sistema de clases
              utilitarias, puedo crear diseños limpios y consistentes en menos
              tiempo. En LandingMine lo integré con React, y esta página también
              lo utiliza para mostrar que diseño y funcionalidad pueden ir de la
              mano.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page1;
