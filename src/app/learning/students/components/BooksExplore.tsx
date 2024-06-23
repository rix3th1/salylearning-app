import { obtenerLibros } from "@/services/libros.service";
import { mapDataCarrousel } from "../../libs";
import Carrousel from "../../teachers/books/new/components/Carrousel";

export default async function BooksExplore() {
  const libros = await obtenerLibros.server();
  const images = mapDataCarrousel(libros, true);

  return (
    <div className="container-fluid" style={{ width: "20rem" }}>
      <Carrousel items={images} />
    </div>
  );
}
