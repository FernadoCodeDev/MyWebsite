import rea from "react";
import { useState as reactUseState } from "react";
import Projects from "../sections/Projects";

const page3 = () => {
  return (

    <div id="page-3" className="flex flex-col justify-start gap-4">
      <h2 className="text-2xl font-bold md:text-4xl">Proyectos</h2>

      <Projects />
    </div>
  );
};

export default page3;

