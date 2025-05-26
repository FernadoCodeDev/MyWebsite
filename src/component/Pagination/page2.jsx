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
        <div class="h-auto bg-slate-100 dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-indigo-300 rounded-full">
            <SVGphp />
          </div>
          <h1 className="font-bold">PHP</h1>
        </div>

        <div class="h-auto bg-slate-100 dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-red-300 rounded-full">
            <SVGlaravel />
          </div>
          <h1 className="font-bold">Laravel</h1>
        </div>

        <div class="h-auto bg-slate-100 dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-yellow-300 rounded-full">
            <SVGpython />
          </div>
          <h1 className="font-bold">Python</h1>
        </div>

        <div class="h-auto bg-slate-100 dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-lime-300">
            <SVGnode />
          </div>
          <h1 className="font-bold">Node.js</h1>
        </div>
      </div>
    </div>
  );
};

export default page2;
