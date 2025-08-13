import rea from "react";
import { useState as reactUseState } from "react";

const page1 = () => {
  return (

    <div id="page-1" className="flex flex-col items-start justify-start gap-4">
      <h2 className="text-2xl font-bold text-center md:text-4xl">Sobre mi</h2>

      <p className="text-base md:text-lg">
        Hola, soy <span className="font-bold">Fernando Mejía</span>, desarrollador web
        con experiencia en frontend y backend, y en constante aprendizaje para ampliar mis
        habilidades hacia el desarrollo con <span className="font-bold">WordPress</span>. 
        He trabajado con diversas tecnologías y frameworks, aplicando buenas prácticas 
        y arquitecturas como <span className="font-bold">MVC</span> para crear soluciones
        eficientes y escalables.
      </p>

      <p className="text-base md:text-lg">
        Uno de mis logros destacados fue participar en la
        <span className="font-bold">Hackathon de MiduDev 2025</span>,
        donde mi proyecto fue reconocido entre las propuestas más
        originales, lo que reforzó mi pasión por crear herramientas
        útiles y bien diseñadas.
      </p>

      <p className="text-base md:text-lg">
        Me motiva el aprendizaje continuo y la oportunidad de aportar 
        valor en cada proyecto, buscando siempre mejorar tanto en el 
        aspecto técnico como en la experiencia del usuario.
      </p>


    </div>
  );
};

export default page1;

