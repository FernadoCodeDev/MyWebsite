import React from "react";
import SVGgit from "../../assets/svg/git";
import SVGgitHub from "../../assets/svg/GitHub";
import SVGnpm from "../../assets/svg/npm";
import SVGgulp from "../../assets/svg/gulp";
import SVGpostman from "../../assets/svg/postman";
import SVGfigma from "../../assets/svg/figma";
import SVGcanva from "../../assets/svg/canva";

const page5 = () => {
  return (
    <div id="page-5" className="grid grid-cols-1 gap-4">
      <h2 className="text-2xl font-bold text-center md:text-4xl">
        Herramientas
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-orange-300 rounded-full">
            <SVGgit />
          </div>
          <h1 className="font-bold">GIT</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Aprender Git fue un cambio total en mi manera de trabajar. Me dio
              el control de cada versión, cada mejora, cada decisión. Trabajo en
              mi propia rama con orden, y cada commit que hago no es un parche:
              es un paso hacia algo mejor. Con Git puedo colaborar, organizar y
              asegurar que cada parte del proyecto esté bien gestionada.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-neutral-700">
            <SVGgitHub />
          </div>
          <h1 className="font-bold">GitHub</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Si aprendí Git, por supuesto tenía que dominar GitHub. Me encanta
              ver cómo cada commit, cada push, cada proyecto va llenando de
              verde mi panel de contribuciones. Ahí están Keys Homes, Cosmic
              Pizza, LandingMine y esta misma página. Todo es abierto, todo es
              real, todo hecho desde cero y con amor por el código.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-4 bg-red-300 rounded-full">
            <SVGnpm />
          </div>
          <h1 className="font-bold">NPM</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              NPM es una de esas herramientas que te hace crecer como
              desarrollador. Gracias a su ecosistema, trabajo con librerías,
              dependencias y herramientas que me permiten llevar mis proyectos
              al siguiente nivel. Aprendí no solo a usar paquetes, sino a
              entender cómo integrarlos, optimizarlos y mantenerlos en
              producción.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-rose-300">
            <SVGgulp />
          </div>
          <h1 className="font-bold">Gulp</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Gulp es eficiencia. Con esta herramienta automatizo tareas
              repetitivas para que pueda enfocarme en lo que realmente importa:
              desarrollar. En Keys Homes y Cosmic Pizza usé Gulp para compilar,
              minificar, mover archivos, recargar el navegador... todo sin
              perder tiempo, todo con un flujo de trabajo limpio y automatizado.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-orange-300 rounded-full">
            <SVGpostman />
          </div>
          <h1 className="font-bold">Postman</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Postman fue clave cuando comencé a trabajar con APIs. Durante el
              desarrollo de Keys Homes y Cosmic Pizza, aprendí a testear cada
              endpoint, validar respuestas, y asegurarme de que la comunicación
              entre cliente y servidor fuera clara y segura. Postman me dio el
              control necesario para entender y mejorar cada interacción en mis
              proyectos.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-pink-300 rounded-full">
            <SVGfigma />
          </div>
          <h1 className="font-bold">Figma</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Ver un proyecto nacer desde el diseño es algo que me motiva. Figma
              me permite visualizar, experimentar y pulir la estructura visual
              antes de escribir una sola línea de código. Me encanta esa
              transición de lo estático al código real. Esa evolución de lo que
              se imagina a lo que se construye es lo que más disfruto como
              desarrollador.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-cyan-300">
            <SVGcanva />
          </div>
          <h1 className="font-bold">Canva</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Canva me da flexibilidad y rapidez cuando quiero crear diseños
              visuales para mis proyectos. Lo uso junto con Figma, pero con
              Canva me siento especialmente cómodo para trabajar ideas,
              materiales visuales o recursos gráficos que luego llevaré al
              desarrollo. Me adapto a lo que necesito, y con Canva tengo una
              herramienta ágil que me acompaña en ese proceso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page5;
