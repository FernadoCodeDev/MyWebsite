import React from "react";
import useScrollAnimation from "../hooks/ScrollAnimation";
import SVGhtml from "../../assets/svg/html";
import SVGcss from "../../assets/svg/css";
import SVGSass from "../../assets/svg/sass";
import SVGJS from "../../assets/svg/js";
import SVGTS from "../../assets/svg/ts";
import SVGJquery from "../../assets/svg/Jquery";
import SVGBootstrap from "../../assets/svg/Bootstrap";
import SVGRedux from "../../assets/svg/Redux";
import SVGReact from "../../assets/svg/svgreact"
import SVGTailwind from "../../assets/svg/Tailwind";

const SecondSection = () => {
  const isVisible = useScrollAnimation("second-section");
  return (
    <div
      className="relative flex flex-col items-center min-h-screen gap-8 p-4 text-black bg-white lg:text-2xl dark:text-white dark:bg-neutral-900"
      id="second-section"
    >
      <div
        className={`m-auto grid grid-cols-1 gap-4 max-w-[80rem] transition-all duration-1000 ease-in ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-2xl font-bold text-center md:text-4xl">Lorem</h1>

        <h3 className="text-xl font-bold text-center md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h3>

        <div id="Paginator" className="w-full ">
          <nav class="grid grid-cols-3 md:grid-cols-6">
            <button class="CurrentStage" type="button" data-page="1">1</button>
            <button type="button" data-page="2">2</button>
            <button type="button" data-page="3">3</button>
            <button type="button" data-page="4">4</button>
            <button type="button" data-page="5">5</button>
            <button type="button" data-page="6">6</button>
          </nav>

          <div id="page-1" className="grid grid-cols-1 gap-4">
            <h2 className="text-2xl font-bold md:text-4xl">Front-End</h2>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              <div class="bg-slate-100 dark:bg-neutral-800 shadow-xl p-4 text-center flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-orange-300 rounded-full">
                  <SVGhtml />
                </div>

                <h3 className="font-bold">HTML</h3>
              </div>

              <div class="bg-slate-100 dark:bg-neutral-800 shadow-xl p-4 text-center flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-indigo-300 rounded-full">
                  <SVGcss />
                </div>

                <h3 className="font-bold">CSS</h3>
              </div>

              <div class="bg-slate-100 dark:bg-neutral-800 shadow-xl p-4 text-center flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-pink-300 rounded-full">
                  <SVGSass />
                </div>

                <h3 className="font-bold">SASS</h3>
              </div>

              <div class="bg-slate-100 dark:bg-neutral-800 shadow-xl p-4 text-center flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-yellow-300 rounded-full">
                  <SVGJS />
                </div>

                <h3 className="font-bold">JavaScript</h3>
              </div>

              <div class="bg-slate-100 dark:bg-neutral-800 shadow-xl p-4 text-center flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-sky-300">
                  <SVGTS />
                </div>

                <h3 className="font-bold">Typescrip</h3>
              </div>

              <div class="bg-slate-100 dark:bg-neutral-800 shadow-xl p-4 text-center flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-cyan-300">
                  <SVGJquery />
                </div>

                <h3 className="font-bold">Jquery</h3>
              </div>

              <div class="bg-slate-100 dark:bg-neutral-800 shadow-xl p-4 text-center flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-violet-300">
                  <SVGBootstrap />
                </div>

                <h3 className="font-bold">Bootstrap</h3>
              </div>

              <div class="bg-slate-100 dark:bg-neutral-800 shadow-xl p-4 text-center flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-purple-300 rounded-full">
                  <SVGRedux />
                </div>

                <h3 className="font-bold">Redux</h3>
              </div>

              <div class="bg-slate-100 dark:bg-neutral-800 shadow-xl p-4 text-center flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-sky-300">
                  <SVGReact />
                </div>

                <h3 className="font-bold">React</h3>
              </div>

              <div class="bg-slate-100 dark:bg-neutral-800 shadow-xl p-4 text-center flex flex-col justify-center items-center gap-4">
                <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-cyan-300">
                  <SVGTailwind />
                </div>

                <h3 className="font-bold">Tailwind</h3>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
