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

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-orange-300 rounded-full">
            <SVGgit />
          </div>
          <h1 className="font-bold">GIT</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-neutral-700">
            <SVGgitHub />
          </div>
          <h1 className="font-bold">GitHub</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-4 bg-red-300 rounded-full">
            <SVGnpm />
          </div>
          <h1 className="font-bold">NPM</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-rose-300">
            <SVGgulp />
          </div>
          <h1 className="font-bold">Gulp</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-orange-300 rounded-full">
            <SVGpostman />
          </div>
          <h1 className="font-bold">Postman</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-pink-300 rounded-full">
            <SVGfigma />
          </div>
          <h1 className="font-bold">Figma</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              corporis doloremque magnam amet excepturi a, natus aut ratione
              fugit mollitia repudiandae sit fugiat, molestias eos non at
              eligendi dicta id.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-cyan-300">
            <SVGcanva />
          </div>
          <h1 className="font-bold">Canva</h1>

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

export default page5;
