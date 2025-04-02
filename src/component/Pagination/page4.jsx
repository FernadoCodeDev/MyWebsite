import React from "react";
import SVGastro from "../../assets/svg/astro";

const page4 = () => {
  return (
    <div id="page-4" className="grid grid-cols-1 gap-4">
      <h2 className="text-2xl font-bold text-center md:text-4xl">Aprendiendo</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-orange-300 rounded-full">
            <SVGastro />
          </div>
          <h1 className="font-bold">Astro</h1>

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

export default page4;
