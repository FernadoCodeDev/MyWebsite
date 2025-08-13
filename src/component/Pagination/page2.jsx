import rea from "react";
import { useState as reactUseState } from "react";

import FrontEnd from "../../assets/svg/FrontEnd"
import SVGhtml from "../../assets/svg/html";
import SVGcss from "../../assets/svg/css";
import SVGSass from "../../assets/svg/sass";
import SVGJS from "../../assets/svg/js";
import SVGTS from "../../assets/svg/ts";
import SVGJquery from "../../assets/svg/Jquery";
import SVGBootstrap from "../../assets/svg/Bootstrap";
import SVGRedux from "../../assets/svg/Redux";
import SVGReact from "../../assets/svg/svgreact";
import SVGastro from "../../assets/svg/astro";
import SVGTailwind from "../../assets/svg/Tailwind";
import SVGVite from "../../assets/svg/Vite";

import BackEnd from "../../assets/svg/BackEnd";
import SVGphp from "../../assets/svg/php";
import SVGlaravel from "../../assets/svg/laravel";
import SVGnode from "../../assets/svg/node";

import DataBase from "../../assets/svg/Database";
import SVGmysql from "../../assets/svg/mysql";
import SVGsqlite from "../../assets/svg/sqlite";
import SVGpostgresql from "../../assets/svg/postgresql";

import Learning from "../../assets/svg/Learning"
import SVGdocker from "../../assets/svg/docker";
import SVGWordPress from "../../assets/svg/wordpressSVG";

import Tools from "../../assets/svg/Tools";
import SVGgit from "../../assets/svg/git";
import SVGgitHub from "../../assets/svg/Github2";
import SVGnpm from "../../assets/svg/npm";
import SVGgulp from "../../assets/svg/gulp";
import SVGpostman from "../../assets/svg/postman";
import SVGfigma from "../../assets/svg/figma";
import SVGcanva from "../../assets/svg/canva";

import Development from "../../assets/svg/DevelopmentSVG";
import SVGdatabases from "../../assets/svg/Database";
import SVGresponsive from "../../assets/svg/responsive";
import SVGhttp from "../../assets/svg/http";


const page2 = () => {
  return (

    <div id="page-2" className="grid grid-cols-1 gap-4">
      <h1 className="text-xl font-bold text-center md:text-2xl">Tecnologías que domino y sigo perfeccionandoACK</h1>
      <p className="text-lg text-center f md:text-xl">Mi experiencia y enfoque trabajando con Front-end, Back-end, bases de datos, herramientas, prácticas de desarrollo y tecnologías que actualmente estoy aprendiendo.</p>

      <div className="flex flex-row items-center gap-2">
        <div className="w-8 h-auto">
          <FrontEnd />
        </div>
        <h5 className="font-bold">Front-End</h5>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-1 text-white">
        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center text-orange-500 bg-orange-500 shadow-xl"
        >
          <div
            className="flex items-center justify-center w-12 h-auto"
          >
            <SVGhtml />
          </div>

          <h1 className="font-bold text-white">HTML</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center text-indigo-500 bg-indigo-500 shadow-xl "
        >
          <div
            className="flex flex-row items-center justify-center w-12 h-auto"
          >
            <SVGcss />
          </div>

          <h3 className="font-bold text-white">CSS</h3>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-pink-500 shadow-xl"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto p-2"
          >
            <SVGSass />
          </div>

          <h3 className="font-bold">Sass</h3>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-yellow-500 text-gray-950 "
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto "
          >
            <SVGJS />
          </div>

          <h3 className="font-bold">JavaScript</h3>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-blue-500 "
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto "
          >
            <SVGTS />
          </div>

          <h3 className="font-bold">TypeScript</h3>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-cyan-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGJquery />
          </div>

          <h3 className="font-bold">Jquery</h3>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-violet-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGBootstrap />
          </div>

          <h3 className="font-bold">Bootstrap</h3>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-purple-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGRedux />
          </div>

          <h3 className="font-bold">Redux</h3>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-sky-500 "
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGReact />
          </div>

          <h3 className="font-bold">React</h3>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-orange-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGastro />
          </div>
          <h1 className="font-bold">Astro</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-cyan-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGTailwind />
          </div>

          <h3 className="font-bold">Tailwind</h3>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center text-violet-500 bg-violet-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGVite />
          </div>

          <h3 className="font-bold text-white">Vite</h3>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div className="w-8 h-auto">
          <BackEnd />
        </div>
        <h5 className="font-bold">Back-end</h5>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-1 text-white">
        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-indigo-500 "
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGphp />
          </div>
          <h1 className="font-bold">PHP</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-red-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGlaravel />
          </div>
          <h1 className="font-bold">Laravel</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center text-gray-950 bg-lime-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGnode />
          </div>
          <h1 className="font-bold">Node.js</h1>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div className="w-8 h-auto">
          <DataBase />
        </div>
        <h5 className="font-bold">Base de datos</h5>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-1 text-white">
        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-orange-500 "
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGmysql />
          </div>
          <h1 className="font-bold">MySQL</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-sky-800"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGsqlite />
          </div>
          <h1 className="font-bold">SQlite</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-blue-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGpostgresql />
          </div>
          <h1 className="font-bold">PostgreSQL</h1>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div className="w-8 h-auto">
          <Learning />
        </div>
        <h5 className="font-bold">Aprendiendo</h5>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-1 text-white">
        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-sky-500 "
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGWordPress />
          </div>
          <h1 className="font-bold">WordPress</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-blue-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGdocker />
          </div>
          <h1 className="font-bold">Docker</h1>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div className="w-8 h-auto">
          <Tools />
        </div>
        <h5 className="font-bold">Herramientas</h5>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-1 text-white">
        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center text-orange-500 bg-orange-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGgit />
          </div>
          <h1 className="font-bold text-white">GIT</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-neutral-900 "
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGgitHub />
          </div>
          <h1 className="font-bold">GitHub</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center text-red-500 bg-red-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGnpm />
          </div>
          <h1 className="font-bold text-white">NPM</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-rose-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGgulp />
          </div>
          <h1 className="font-bold">Gulp</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center text-orange-500 bg-orange-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGpostman />
          </div>
          <h1 className="font-bold text-white">Postman</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-pink-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGfigma />
          </div>
          <h1 className="font-bold">Figma</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-cyan-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGcanva />
          </div>
          <h1 className="font-bold">Canva</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-purple-500"
        >
          <div
            className="flex flex-col items-center justify-center h-auto w-9"
          >
            <img src="/img/Clerk.webp" alt="Clerk" className="mr-2 invert" />
          </div>

          <h1 className="font-bold">Clerk SDK</h1>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div className="w-8 h-auto">
          <Development />
        </div>
        <h5 className="font-bold">Prácticas de Desarrollo</h5>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-1 text-white">
        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-teal-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGdatabases />
          </div>
          <h1 className="font-bold">
            Diseño y modelado de bases de datos relacionales
          </h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-sky-500"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGresponsive />
          </div>
          <h1 className="font-bold">Diseño Responsive</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-slate-800 "
        >
          <div
            className="flex flex-col items-center justify-center w-[3.25rem] h-auto"
          >
            <img src="/img/MVC.webp" alt="MVC" className="invert" />
          </div>
          <h1 className="font-bold">MVC (Model-View-Controller)</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-blue-500 "
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <img src="/img/crud.webp" alt="crud" className="invert" />
          </div>
          <h1 className="font-bold">CRUD (Create, Read, Update, Delete)</h1>
        </div>

        <div
          className="flex flex-row items-center justify-center h-auto gap-2 p-2 text-center bg-neutral-700"
        >
          <div
            className="flex flex-col items-center justify-center w-12 h-auto"
          >
            <SVGhttp />
          </div>
          <h1 className="font-bold">RESTful APIs</h1>
        </div>
      </div>

    </div>

  );
};

export default page2;

