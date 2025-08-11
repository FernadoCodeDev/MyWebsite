import react from "react";
import { useState as reactUseState } from "react";
import Paginator from "./Paginator";
import ContentPagination from "../sections/ContentPagination";

const pages = [
  { id: "sobre-mi", title: "Sobre Mí", content: "Este es el contenido de Sobre Mí" },
  { id: "tecnologias", title: "Tecnologías", content: "Aquí van las tecnologías" },
  { id: "proyectos", title: "Proyectos", content: "Lista de proyectos" }, //Content esta eso pero luego se cambiaran por archivos astro, aqui solo es como prueba pero luego cambiara a las pagina reales
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