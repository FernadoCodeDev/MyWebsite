import rea from "react";
import { useState as reactUseState } from "react";
import Paginator from "./Paginator";
import ContentPagination from "../sections/ContentPagination";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";

const pages = [
  { id: "page-1", title: "Sobre Mí", content: <Page1 /> },
  { id: "page-2", title: "Tecnologías", content: <Page2 /> },
  { id: "page-3", title: "Proyectos", content: <Page3 /> }, 
];



export default function PageWrapper() {
  const [activePage, setActivePage] = reactUseState(null);

  return (
    <>
      <Paginator pages={pages} activePage={activePage} setActivePage={setActivePage} />
      <ContentPagination activePage={activePage} pages={pages} />
    </>
  );
}