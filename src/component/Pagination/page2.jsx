import rea from "react";
import { useState as reactUseState } from "react";

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

import SVGphp from "../../assets/svg/php";
import SVGlaravel from "../../assets/svg/laravel";
import SVGnode from "../../assets/svg/node";

import SVGmysql from "../../assets/svg/mysql";
import SVGsqlite from "../../assets/svg/sqlite";
import SVGpostgresql from "../../assets/svg/postgresql";

import SVGdocker from "../../assets/svg/docker";
import SVGWordPress from "../../assets/svg/wordpressSVG";

import SVGgit from "../../assets/svg/git";
import SVGgitHub from "../../assets/svg/Github2";
import SVGnpm from "../../assets/svg/npm";
import SVGgulp from "../../assets/svg/gulp";
import SVGpostman from "../../assets/svg/postman";
import SVGfigma from "../../assets/svg/figma";
import SVGcanva from "../../assets/svg/canva";

import SVGdatabases from "../../assets/svg/Database";
import SVGresponsive from "../../assets/svg/responsive";
import SVGhttp from "../../assets/svg/http";

const page2 = () => {
  return (

    <div id="page-2" className="grid grid-cols-1 gap-4">
           <h2 className="text-2xl font-bold text-center md:text-4xl">sTACK</h2>
      <h2 className="text-2xl font-bold text-center md:text-4xl">Front-End</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-orange-300 rounded-full"
          >
            <SVGhtml />
          </div>

          <h1 className="font-bold">HTML</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-4 bg-indigo-300 rounded-full"
          >
            <SVGcss />
          </div>

          <h3 className="font-bold">CSS</h3>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-pink-300 rounded-full"
          >
            <SVGSass />
          </div>

          <h3 className="font-bold">Sass</h3>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-yellow-300 rounded-full"
          >
            <SVGJS />
          </div>

          <h3 className="font-bold">JavaScript</h3>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-sky-300"
          >
            <SVGTS />
          </div>

          <h3 className="font-bold">TypeScript</h3>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-cyan-300"
          >
            <SVGJquery />
          </div>

          <h3 className="font-bold">Jquery</h3>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-violet-300"
          >
            <SVGBootstrap />
          </div>

          <h3 className="font-bold">Bootstrap</h3>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-purple-300 rounded-full"
          >
            <SVGRedux />
          </div>

          <h3 className="font-bold">Redux</h3>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-sky-300"
          >
            <SVGReact />
          </div>

          <h3 className="font-bold">React</h3>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-orange-300 rounded-full"
          >
            <SVGastro />
          </div>
          <h1 className="font-bold">Astro</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-cyan-300"
          >
            <SVGTailwind />
          </div>

          <h3 className="font-bold">Tailwind</h3>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-violet-300"
          >
            <SVGVite />
          </div>

          <h3 className="font-bold">Vite</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-indigo-300 rounded-full"
          >
            <SVGphp />
          </div>
          <h1 className="font-bold">PHP</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-red-300 rounded-full"
          >
            <SVGlaravel />
          </div>
          <h1 className="font-bold">Laravel</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-lime-300"
          >
            <SVGnode />
          </div>
          <h1 className="font-bold">Node.js</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-4 bg-orange-300 rounded-full"
          >
            <SVGmysql />
          </div>
          <h1 className="font-bold">MySQL</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-sky-300"
          >
            <SVGsqlite />
          </div>
          <h1 className="font-bold">SQlite</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-blue-300 rounded-full"
          >
            <SVGpostgresql />
          </div>
          <h1 className="font-bold">PostgreSQL</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-sky-700"
          >
            <SVGWordPress />
          </div>
          <h1 className="font-bold">WordPress</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-blue-300 rounded-full"
          >
            <SVGdocker />
          </div>
          <h1 className="font-bold">Docker</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-orange-300 rounded-full"
          >
            <SVGgit />
          </div>
          <h1 className="font-bold">GIT</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-neutral-700"
          >
            <SVGgitHub />
          </div>
          <h1 className="font-bold">GitHub</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-4 bg-red-300 rounded-full"
          >
            <SVGnpm />
          </div>
          <h1 className="font-bold">NPM</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-rose-300"
          >
            <SVGgulp />
          </div>
          <h1 className="font-bold">Gulp</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-orange-300 rounded-full"
          >
            <SVGpostman />
          </div>
          <h1 className="font-bold">Postman</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-pink-300 rounded-full"
          >
            <SVGfigma />
          </div>
          <h1 className="font-bold">Figma</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-cyan-300"
          >
            <SVGcanva />
          </div>
          <h1 className="font-bold">Canva</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-4 bg-purple-300 rounded-full"
          >
            <img src="/public/img/Clerk.webp" alt="Clerk" className="mr-2 invert" />
          </div>

          <h1 className="font-bold">Clerk SDK</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 bg-teal-300 rounded-full"
          >
            <SVGdatabases />
          </div>
          <h1 className="font-bold">
            Diseño y modelado de bases de datos relacionales
          </h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-4 rounded-full bg-sky-300"
          >
            <SVGresponsive />
          </div>
          <h1 className="font-bold">Diseño Responsive</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-slate-800"
          >
            <img src="/public/img/MVC.webp" alt="MVC" className="invert" />
          </div>
          <h1 className="font-bold">MVC (Model-View-Controller)</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-4 bg-blue-300 rounded-full"
          >
            <img src="/public/img/crud.webp" alt="crud" className="invert" />
          </div>
          <h1 className="font-bold">CRUD (Create, Read, Update, Delete)</h1>
        </div>

        <div
          className="flex flex-col items-center justify-center h-auto gap-4 p-4 text-center shadow-xl bg-slate-100 dark:bg-neutral-800 dark:shadow-neutral-700/40"
        >
          <div
            className="flex flex-col items-center justify-center w-20 h-20 p-3 rounded-full bg-neutral-700"
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

