import React from "react";
import SVGmysql from "../../assets/svg/mysql";
import SVGsqlite from "../../assets/svg/sqlite";
import SVGpostgresql from "../../assets/svg/postgresql";

const page3 = () => {
  return (
    <div id="page-3" className="grid grid-cols-1 gap-4">
      <h2 className="text-2xl font-bold text-center md:text-4xl">
        Base de datos
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-4 bg-orange-300 rounded-full">
            <SVGmysql />
          </div>
          <h1 className="font-bold">MySQL</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Fue la primera base de datos que aprendí, y me ayudó a entender a
              fondo cómo funciona una base relacional. Con proyectos como Keys
              Homes y Cosmic Pizza puse en práctica todo lo que sé sobre diseño
              de tablas, relaciones, consultas eficientes y operaciones CRUD. Me
              encargo de que cada dato esté bien estructurado y seguro, listo
              para usarse cuando se necesite.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-sky-300">
            <SVGsqlite />
          </div>
          <h1 className="font-bold">SQlite</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Aunque es ligera, con SQLite sé cómo manejar los datos de forma
              ordenada y efectiva, especialmente en aplicaciones móviles y de
              escritorio. Gestiono cada archivo de base de datos con
              responsabilidad, asegurando que la información esté siempre
              disponible y bien almacenada, sin complicaciones.
            </p>
          </div>
        </div>

        <div class="bg-slate-100 relative group dark:bg-neutral-800 shadow-xl dark:shadow-neutral-700/40 p-4 text-center flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-blue-300 rounded-full">
            <SVGpostgresql />
          </div>
          <h1 className="font-bold">PostgreSQL</h1>

          <div className="hidden transition-all duration-700 ease-out group-hover:flex">
            <p className="text-base md:text-lg">
              Después de trabajar con MySQL, sabía que debía subir de nivel con
              PostgreSQL. Con este poderoso motor mejoro la fiabilidad,
              flexibilidad y el rendimiento de mis bases de datos. Su capacidad
              para manejar estructuras complejas y grandes volúmenes de
              información lo convierte en una herramienta clave cuando un
              proyecto necesita potencia y precisión.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page3;
