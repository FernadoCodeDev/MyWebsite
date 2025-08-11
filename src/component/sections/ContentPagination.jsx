
import react from "react";
import { useState as reactUseState } from "react";
import Book from "../../assets/svg/Book";

export default function ContentPagination({ activePage, pages }) {
  const current = pages.find((p) => p.id === activePage);

  return (
    <div className="flex flex-col items-start w-full h-auto mt-4 bg-transparent border border-gray-500 rounded-md">
      <div className="flex flex-row gap-2 p-2 ml-4 border-b border-b-orange-500">
        <Book />
        <h1>README.md</h1>
      </div>

      <div className="flex flex-row items-start justify-between w-full gap-2 p-4 bg-transparent border-t border-gray-500">
        {current ? current.content : "contenido"}
      </div>
    </div>
  );
}