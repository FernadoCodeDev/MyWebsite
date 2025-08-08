import React, { useState } from "react";
import DarkMode from "../component/ui/DarkMode";
import Linkedin from "../assets/svg/Linkedin";
import GitHub from "../assets/svg/GitHub";
import Cv from "../assets/svg/CV";
import Gmail from "../assets/svg/Gmail"

const Header = () => {
  return (
    <div className="">
      <div className="flex flex-col items-start justify-between w-full h-auto gap-4 p-4 pb-4 border-b-2 border-gray-400 align-center">
        <div className="flex flex-row items-center w-full justify-between max-w-[80rem] m-auto gap-4">
          <div className="flex flex-row items-center justify-center gap-2">
            <img src="/img/ImgFirstSection.webp" alt="ImgFirstSection" className="w-16 h-auto" />

            <h1 className="text-2xl font-bold text-blue-500">Fernando Mejía</h1>

          </div>

          <DarkMode />
        </div>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita quos maxime explicabo doloribus exercitationem, quibusdam tempora. Natus dolor rem sit quia tenetur! Officia tempore similique enim voluptate quasi esse?</p>
        <div className="flex flex-row gap-2" >
          <GitHub />
          <p className="font-bold text-blue-400">fercode.netlify.app/</p>

        </div>


        <div className="flex flex-row gap-4 items-start justify-between max-w-[60rem]">

          <a href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex flex-row gap-2 p-2 transition-all duration-700 ease-out bg-transparent rounded-lg cursor-pointer cursor hover:bg-slate-300 dark:hover:bg-slate-800" >
              <Linkedin />
              <p className="">linkedin</p>

            </button>
          </a>

          <a href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex flex-row gap-2 p-2 transition-all duration-700 ease-out bg-transparent rounded-lg cursor-pointer cursor hover:bg-slate-300 dark:hover:bg-slate-800" >
              <GitHub />
              <p className="">GitHub</p>

            </button>
          </a>

          <a href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex flex-row gap-2 p-2 transition-all duration-700 ease-out bg-transparent rounded-lg cursor-pointer cursor hover:bg-slate-300 dark:hover:bg-slate-800" >
              <Cv />
              <p className="">Cv</p>

            </button>
          </a>

          <a href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex flex-row gap-2 p-2 transition-all duration-700 ease-out bg-transparent rounded-lg cursor-pointer cursor hover:bg-slate-300 dark:hover:bg-slate-800" >
              <Gmail />
              <p className="">Gmail</p>

            </button>
          </a>


        </div>



      </div>
    </div>
  );
};

export default Header;