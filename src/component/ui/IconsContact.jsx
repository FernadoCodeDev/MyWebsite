import React, { useState } from "react";
import Linkedin from "../../assets/svg/Linkedin";
import GitHub from "../../assets/svg/GitHub";
import Cv from "../../assets/svg/CV";
import Gmail from "../../assets/svg/Gmail";

const IconsContact = () => {
  return (
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
  );
};

export default IconsContact;