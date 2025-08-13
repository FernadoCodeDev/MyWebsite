import rea from "react";
import { useState as reactUseState } from "react";
import Web from "../../assets/svg/web";
import GitHub2 from "../../assets/svg/Github2";


import SVGastro from "../../assets/svg/astro";
import SVGReact from "../../assets/svg/svgreact";
import SVGTS from "../../assets/svg/ts";
import SVGTailwind from "../../assets/svg/Tailwind";
import AIsvg from "../../assets/svg/AI";

const page3 = () => {
  return (

    <div id="page-3" className="flex flex-col gap-2 items-center justify-center">
      <h2 className="text-2xl font-bold text-center md:text-4xl">Proyectos</h2>

      <details>
        <summary>StarIA - Agente de IA</summary>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between gap-2">

            <h1 className="font-bold text-xl">StarIA</h1>

            <div className="flex flex-row gap-4">
              <a
                href="https://www.udemy.com/certificate/UC-48c1ec75-7b1f-46ed-b2d4-ccf2ce18306f/"
                target="_blank"
                className="w-8 h-auto"
              >
                <Web />
              </a>

              <a
                href="https://www.udemy.com/certificate/UC-48c1ec75-7b1f-46ed-b2d4-ccf2ce18306f/"
                target="_blank"
                className="w-8 h-auto"
              >
                <GitHub2 />
              </a>
            </div>
          </div>

          <img src="/public/img/StarIA.webp" alt="StarIA" className="rounded-lg" />


          <p className="text-base">
            Agente conversacional impulsado por IA, diseñado con la API de OpenAI.
            Una plataforma visual y funcional para configurar agentes de
            inteligencia artificial conversacional.

          </p>

          <p className="text-base">
            Ideal para equipos, negocios o profesionales que buscan
            integrar un agente conversacional en sus plataformas.
          </p>

          <div className="flex flex-wrap items-center mt-4 justify-start gap-1 text-white">

            <div
              className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-orange-500"
            >
              <div
                className="flex flex-col items-center justify-center w-8 h-auto"
              >
                <SVGastro />
              </div>
              <h1 className="font-bold">Astro</h1>
            </div>

            <div
              className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-sky-500 "
            >
              <div
                className="flex flex-col items-center justify-center w-8 h-auto"
              >
                <SVGReact />
              </div>

              <h3 className="font-bold">React</h3>
            </div>

            <div
              className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-blue-500 "
            >
              <div
                className="flex flex-col items-center justify-center w-8 h-auto "
              >
                <SVGTS />
              </div>

              <h3 className="font-bold">TypeScript</h3>
            </div>

            <div
              className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-cyan-500"
            >
              <div
                className="flex flex-col items-center justify-center w-8 h-auto"
              >
                <SVGTailwind />
              </div>

              <h3 className="font-bold">Tailwind</h3>
            </div>

            <div
              className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-emerald-500"
            >
              <div
                className="flex flex-col items-center justify-center w-8 h-auto"
              >
                <AIsvg />
              </div>

              <h3 className="font-bold">API-DE-OPENAI</h3>
            </div>


          </div>

        </div>
      </details>
    </div>
  );
};

export default page3;

