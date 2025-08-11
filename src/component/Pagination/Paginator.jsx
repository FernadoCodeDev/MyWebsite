import { useState } from "react";
import Folder from "../../assets/svg/Folder";
import File from "../../assets/svg/File";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

const pages = [
  { id: "page-1", title: "Sobre Mí", content: Page1 },
  { id: "page-2", title: "Tecnologías", content: Page2 },
  { id: "page-3", title: "Proyectos", content: Page3 }, 
];

export default function Paginator({ pages, activePage, setActivePage }) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-between w-full border-b border-l border-r border-gray-500 bg-slate-100 dark:bg-slate-950 rounded-b-md">
        {pages.map((page, index) => (
          <button
            key={page.id}
            onClick={() => setActivePage(page.id === activePage ? null : page.id)}
            className={`flex flex-row items-center justify-between w-full gap-2 p-2 transition-all duration-300 bg-transparent cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 ${
              index > 0 ? "border-t border-gray-500" : ""
            }`}
          >
            <div className="flex gap-2">
              <Folder />
              <h1>{page.title}</h1>
            </div>
            <div className="hidden text-gray-500 md:flex">First Commit</div>
            <div className="flex text-gray-500">1 Day ago</div>
          </button>
        ))}

        {/* Static elements, they are just decoration. */}
        <div className="flex flex-row items-center justify-between w-full gap-2 p-2 bg-transparent border-t border-gray-500">
          <div className="flex gap-2">
            <File />
            <h1>.gitignore</h1>
          </div>
          <div className="hidden text-gray-500 md:flex">First Commit</div>
          <div className="flex text-gray-500">1 Day ago</div>
        </div>

        <div className="flex flex-row items-center justify-between w-full gap-2 p-2 bg-transparent border-t border-gray-500">
          <div className="flex gap-2">
            <File />
            <h1>README.md</h1>
          </div>
          <div className="hidden text-gray-500 md:flex">First Commit</div>
          <div className="flex text-gray-500">1 Day ago</div>
        </div>
      </div>
    </div>
  );
}
