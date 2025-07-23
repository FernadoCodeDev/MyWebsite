import React from "react";
import SVGdocker from "../../assets/svg/docker";
import SVGWordPress from "../../assets/svg/wordpressSVG";

const page4 = () => {
  return (
    <div id="page-4" className="grid grid-cols-1 gap-4">
      <h2 className="text-2xl font-bold text-center md:text-4xl">
        Aprendiendo
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="h-auto bg-slate-100 dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-sky-700">
            <SVGWordPress />
          </div>
          <h1 className="font-bold">WordPress</h1>
        </div>

        <div class="h-auto bg-slate-100 dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-blue-300 rounded-full">
            <SVGdocker />
          </div>
          <h1 className="font-bold">Docker</h1>
        </div>
      </div>
    </div>
  );
};

export default page4;
