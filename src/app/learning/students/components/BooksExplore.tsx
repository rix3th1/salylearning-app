import { mapDataCarrousel } from "@/app/learning/libs";
import Carrousel from "@/app/learning/teachers/books/new/components/Carrousel";
import { obtenerLibros } from "@/services/libros.service";

export default async function BooksExplore() {
  const libros = await obtenerLibros.server();
  const images = mapDataCarrousel(libros, true);

  return (
    <div className="container-fluid" style={{ width: "20rem" }}>
      <Carrousel items={images} />
    </div>
  );
}
