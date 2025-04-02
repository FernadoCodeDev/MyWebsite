import React from "react";
import SVGdatabases from "../../assets/svg/databases";
import SVGresponsive from "../../assets/svg/responsive";
import MVC from "../../assets/img/MVC.webp";
import crud from "../../assets/img/crud.webp";
import SVGhttp from "../../assets/svg/http";

const page6 = () => {
  return (
    <div id="page-6" className="grid grid-cols-1 gap-4">
      <h2 className="text-2xl font-bold text-center md:text-4xl">Prácticas de desarollo</h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-teal-300 rounded-full">
            <SVGdatabases />
          </div>
          <h1 className="font-bold">Diseño y modelado de bases de datos relacionales</h1>

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
          <div className="flex flex-col items-center justify-center w-20 h-20 p-4 rounded-full bg-sky-300">
            <SVGresponsive />
          </div>
          <h1 className="font-bold">Diseño Responsive</h1>

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
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-slate-800">
            <img src={MVC} alt="MVC" className="invert"/>
          </div>
          <h1 className="font-bold">MVC (Model-View-Controller)</h1>

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
          <div className="flex flex-col items-center justify-center w-20 h-20 p-4 bg-blue-300 rounded-full">
          <img src={crud} alt="crud" className="invert"/>
          </div>
          <h1 className="font-bold">CRUD (Create, Read, Update, Delete)</h1>

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
            <SVGhttp />
          </div>
          <h1 className="font-bold">RESTful APIs</h1>

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

export default page6;
