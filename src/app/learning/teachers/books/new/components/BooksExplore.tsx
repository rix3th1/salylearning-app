import { mapDataCarrousel } from "@/app/learning/libs";
import { obtenerLibros } from "@/services/libros.service";
import Carrousel from "./Carrousel";
import UploadBookButton from "./UploadBookButton";

export default async function BooksExplore() {
  const libros = await obtenerLibros.server();
  const images = mapDataCarrousel(libros, false);

  return (
    <>
      {/* Carrusel */}
      <Carrousel items={images} />

      {/* Botón para subir libros */}
      <section className="text-center" style={{ marginTop: "2rem" }}>
        <UploadBookButton libros={libros} />
      </section>
    </>
  );
}
