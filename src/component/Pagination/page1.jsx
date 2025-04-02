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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-4 bg-indigo-300 rounded-full">
            <SVGcss />
          </div>

          <h3 className="font-bold">CSS</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-pink-300 rounded-full">
            <SVGSass />
          </div>

          <h3 className="font-bold">Sass</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-yellow-300 rounded-full">
            <SVGJS />
          </div>

          <h3 className="font-bold">JavaScript</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-sky-300">
            <SVGTS />
          </div>

          <h3 className="font-bold">Typescrip</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-cyan-300">
            <SVGJquery />
          </div>

          <h3 className="font-bold">Jquery</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-violet-300">
            <SVGBootstrap />
          </div>

          <h3 className="font-bold">Bootstrap</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-purple-300 rounded-full">
            <SVGRedux />
          </div>

          <h3 className="font-bold">Redux</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-sky-300">
            <SVGReact />
          </div>

          <h3 className="font-bold">React</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40  p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-cyan-300">
            <SVGTailwind />
          </div>

          <h3 className="font-bold">Tailwind</h3>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page1;
