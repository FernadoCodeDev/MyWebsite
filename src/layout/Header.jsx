import React, { useState } from "react";
import DarkMode from "../component/ui/DarkMode";

const Header = () => {
  return (
    <div className="">
      <div className="flex flex-col items-start justify-between w-full h-auto gap-4 p-4 align-center ">
        <div className="flex flex-row items-center w-full justify-between max-w-[80rem] m-auto gap-4">
         <div className="flex flex-row items-center justify-center gap-2">
          <img src="/img/ImgFirstSection.webp" alt="ImgFirstSection" className="w-16 h-auto"/>

          <h1 className="text-2xl font-bold text-blue-400">Fernando Mejía</h1>

         </div>
         
          <DarkMode />
        </div>
        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut expedita quos maxime explicabo doloribus exercitationem, quibusdam tempora. Natus dolor rem sit quia tenetur! Officia tempore similique enim voluptate quasi esse?</p>


        <div className="flex flex-row gap-4 items-start justify-between max-w-[60rem]">

          <div className="">linkedin</div>
          <div className="">GitHub </div>
          <div className="">CV</div>
          <div className="">Gmail</div>

        </div>



      </div>
    </div>
  );
};

export default Header;