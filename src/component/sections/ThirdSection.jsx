import React from "react";

const ThirdSection = () => {
  return (
    <div className="relative flex flex-col items-center min-h-screen gap-8 p-4 text-black bg-white 2xl:text-2xl dark:text-white dark:bg-neutral-900">
      <div className="w-full m-auto grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[80rem]">
        <div class="flex flex-col  rounded-2xl bg-red-200 p-2">
          <div class="mt-8 h-32 rounded-l-2xl rounded-br-2xl rounded-bl-2xl bg-black relative flex flex-col">
            {/* Parte superior de la "carpeta" */}
            <div class="w-1/3 h-12 bg-black rounded-2xl absolute transform -top-7 right-5 skew-x-[-40deg]"></div>
            <div class="w-1/4 h-12 bg-black rounded-tr-2xl absolute transform -top-7 right-0 "></div>

            {/* Círculo en la parte superior */}
            <div class="absolute top-7 left-0 w-4 h-4 bg-transparent rounded-full shadow-md -ml-4"></div>

            {/* Sección de contenido con íconos o elementos */}
            <div class="absolute top-0 h-8 flex justify-between items-center p-4">
              <div class="h-full aspect-square p-2">{/* SVG */}</div>
              <div class="flex h-full gap-2 items-center pr-4">{/* SVG */}</div>
            </div>
          </div>

          <div class="mt-4 p-2">
            <span class="block text-center text-white font-extrabold text-2xl tracking-wide">
              text
            </span>

            <div class="flex justify-between mt-5">
              <div class="flex-1 text-center p-2 text-black">
                <span class="block text-white font-bold text-sm">text</span>
                <span class="text-xs">text</span>
              </div>
              <div class="flex-1 text-center p-2 text-black border-l border-r border-black">
                <span class="block text-white font-bold text-sm">text</span>
                <span class="text-xs">text</span>
              </div>
              <div class="flex-1 text-center p-2 text-black">
                <span class="block text-white font-bold text-sm">text</span>
                <span class="text-xs">text</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
